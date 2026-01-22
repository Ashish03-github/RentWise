import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { nanoid } from '@reduxjs/toolkit';

import {
  addPropertyFormSchema,
  AddPropertyFormValues,
} from '../utils/add.property.form.schema';

import { ADD_PROPERTY_FORM_DEFAULT_VALUES } from '../constants/properties.dummy.data';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addProperty,
  clearActivePropertyId,
  updateProperty,
} from '../store/properties.slice';
import { selectActiveProperty } from '../store/properties.selectors';

const useAddPropertyFormController = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const activeProperty = useAppSelector(selectActiveProperty);

  const isEditMode = !!activeProperty;

  const defaultValues = useMemo(() => {
    if (!activeProperty) {
      return ADD_PROPERTY_FORM_DEFAULT_VALUES;
    }

    return {
      propertyName: activeProperty.propertyName,
      propertyAddress: activeProperty.propertyAddress,
      propertyType: activeProperty.propertyType,
      propertyStatus: activeProperty.propertyStatus,
      propertyDeposit: activeProperty.propertyDeposit,
      propertyRent: activeProperty.propertyRent,
      rentRecurrence: activeProperty.rentRecurrence,
      note: activeProperty.note,
    };
  }, [activeProperty]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<AddPropertyFormValues>({
    resolver: zodResolver(addPropertyFormSchema),
    defaultValues,
  });

  // IMPORTANT: reset when edit mode loads
  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  // Avoid "stuck" edit mode when leaving this screen
  useEffect(() => {
    return () => {
      dispatch(clearActivePropertyId());
    };
  }, [dispatch]);

  const onSubmit = (data: AddPropertyFormValues) => {
    if (isEditMode && activeProperty) {
      // 🧠 Merge only changed fields
      const updatedProperty = {
        ...activeProperty,
        ...Object.keys(dirtyFields).reduce((acc, key) => {
          acc[key] = data[key as keyof AddPropertyFormValues];
          return acc;
        }, {} as Partial<AddPropertyFormValues>),
      };

      dispatch(updateProperty(updatedProperty));
    } else {
      dispatch(
        addProperty({
          ...data,
          id: nanoid(),
        }),
      );
    }

    dispatch(clearActivePropertyId());
    // go back to list/details, matching current navigation behavior
    // @ts-expect-error: navigation is untyped in this module
    navigation.goBack?.();
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    isEditMode,
  };
};

export default useAddPropertyFormController;
