import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import React, { useReducer, useCallback } from 'react';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import useTheme from '@/common/hooks/useTheme';
import { Button, Container, Dropdown, InputField } from '@/common/components';
import { scale } from '@/theme/scale';
import { PROPERTY_TYPE_ITEMS } from '../constants/properties.dummy.data';
import { PropertyItem } from '../types/proprty.type';
import { addPropertyFormSchema } from '../utils/add.property.form.schema';
import * as yup from 'yup';

// interface AddPropertyFormProps {
//   isSubmitting?: boolean;
//   onPress: () => void;
//   onCancel: () => void;
// }
type FormState = {
  values: Omit<PropertyItem, 'id'>;
  errors: Record<keyof Omit<PropertyItem, 'id'>, string>;
  touched: Record<keyof Omit<PropertyItem, 'id'>, boolean>;
  isSubmitting: boolean;
};

type FormAction =
  | { type: 'SET_FIELD'; field: string; value: any }
  | { type: 'SET_ERRORS'; errors: Record<string, string> }
  | { type: 'SET_TOUCHED'; field: string; value: boolean }
  | { type: 'SET_IS_SUBMITTING'; value: boolean };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
        errors: {
          ...state.errors,
          [action.field]: '',
        },
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.errors,
        },
      };
    case 'SET_TOUCHED':
      return {
        ...state,
        touched: {
          ...state.touched,
          [action.field]: action.value,
        },
      };
    case 'SET_IS_SUBMITTING':
      return {
        ...state,
        isSubmitting: action.value,
      };
    default:
      return state;
  }
};

const initialValues: Omit<PropertyItem, 'id'> = {
  image: 'default-image.jpg',
  propertyName: '',
  propertyAddress: '',
  propertyType: 'Room' as PropertyItem['propertyType'],
  propertyStatus: 'Vacant' as PropertyItem['propertyStatus'],
  propertyDeposite: 0,
  propertyRent: 0,
  propertyRentRecurrence: 'Monthly' as PropertyItem['propertyRentRecurrence'],
  note: '',
};

const initialErrors = Object.keys(initialValues).reduce(
  (acc, key) => ({
    ...acc,
    [key]: '',
  }),
  {} as Record<keyof Omit<PropertyItem, 'id'>, string>,
);

const initialTouched = Object.keys(initialValues).reduce(
  (acc, key) => ({
    ...acc,
    [key]: false,
  }),
  {} as Record<keyof Omit<PropertyItem, 'id'>, boolean>,
);

const propertyStatusItems = [
  { label: 'Vacant', value: 'Vacant' as const },
  { label: 'Occupied', value: 'Occupied' as const },
  { label: 'Booked', value: 'Booked' as const },
];

const rentRecurrenceItems = [
  { label: 'Monthly', value: 'Monthly' as const },
  { label: 'Yearly', value: 'Yearly' as const },
  { label: 'Other', value: 'Other' as const },
];

const AddPropertyForm = () => {
  const { Colors, Fonts, Layout } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout),
    [Colors, Fonts, Layout],
  );

  const [state, dispatch] = useReducer(formReducer, {
    values: initialValues,
    errors: initialErrors,
    touched: initialTouched,
    isSubmitting: false,
  });

  const handleChange = useCallback(
    (field: keyof Omit<PropertyItem, 'id'>) => (value: any) => {
      dispatch({ type: 'SET_FIELD', field, value });
    },
    [],
  );

  const handleBlur = useCallback(
    (field: keyof Omit<PropertyItem, 'id'>) => () => {
      dispatch({ type: 'SET_TOUCHED', field, value: true });
      validateField(field);
    },
    [state.values],
  );

  const validateField = async (field: keyof Omit<PropertyItem, 'id'>) => {
    try {
      // Cast the schema to any to access the validate method
      const schema = addPropertyFormSchema.fields[field] as yup.AnySchema;
      await schema.validate(state.values[field]);
      dispatch({ type: 'SET_ERRORS', errors: { [field]: '' } });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        dispatch({ type: 'SET_ERRORS', errors: { [field]: error.message } });
      }
    }
  };

  const validateForm = async () => {
    try {
      await addPropertyFormSchema.validate(state.values, { abortEarly: false });
      return true;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errors = error.inner.reduce((acc, curr) => {
          return { ...acc, [curr.path as string]: curr.message };
        }, {});
        dispatch({ type: 'SET_ERRORS', errors });
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    dispatch({ type: 'SET_IS_SUBMITTING', value: true });

    // Mark all fields as touched
    Object.keys(state.touched).forEach(field => {
      dispatch({ type: 'SET_TOUCHED', field, value: true });
    });

    const isValid = await validateForm();

    if (isValid) {
      try {
        // Handle form submission here
        console.log('Form submitted:', state.values);
        Alert.alert('Success', 'Property added successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        Alert.alert('Error', 'Failed to add property. Please try again.');
      }
    }

    dispatch({ type: 'SET_IS_SUBMITTING', value: false });
  };

  return (
    <Container screenHeading="Add Property">
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.formBody}>
            <InputField
              label="Property Name"
              placeholder="Enter property name"
              value={state.values.propertyName}
              onBlur={handleBlur('propertyName')}
              onChangeText={handleChange('propertyName')}
              error={
                state.touched.propertyName ? state.errors.propertyName : ''
              }
            />

            <Dropdown
              label="Property Type"
              value={state.values.propertyType}
              items={PROPERTY_TYPE_ITEMS}
              onChange={handleChange('propertyType')}
              error={
                state.touched.propertyType ? state.errors.propertyType : ''
              }
            />

            <InputField
              label="Property Address"
              placeholder="Enter property address"
              value={state.values.propertyAddress}
              onBlur={handleBlur('propertyAddress')}
              onChangeText={handleChange('propertyAddress')}
              error={
                state.touched.propertyAddress
                  ? state.errors.propertyAddress
                  : ''
              }
              multiline
              numberOfLines={3}
            />

            <InputField
              label="Property Deposit"
              keyboardType="numeric"
              placeholder="Enter deposit amount"
              value={state.values.propertyDeposite.toString()}
              onBlur={handleBlur('propertyDeposite')}
              onChangeText={value =>
                handleChange('propertyDeposite')(value ? parseFloat(value) : 0)
              }
              error={
                state.touched.propertyDeposite
                  ? state.errors.propertyDeposite
                  : ''
              }
            />

            <InputField
              label="Property Rent"
              keyboardType="numeric"
              placeholder="Enter rent amount"
              value={state.values.propertyRent.toString()}
              onBlur={handleBlur('propertyRent')}
              onChangeText={value =>
                handleChange('propertyRent')(value ? parseFloat(value) : 0)
              }
              error={
                state.touched.propertyRent ? state.errors.propertyRent : ''
              }
            />

            <Dropdown
              label="Property Status"
              value={state.values.propertyStatus}
              items={propertyStatusItems}
              onChange={handleChange('propertyStatus')}
              error={
                state.touched.propertyStatus ? state.errors.propertyStatus : ''
              }
            />

            <Dropdown
              label="Rent Recurrence"
              value={state.values.propertyRentRecurrence}
              items={rentRecurrenceItems}
              onChange={handleChange('propertyRentRecurrence')}
              error={
                state.touched.propertyRentRecurrence
                  ? state.errors.propertyRentRecurrence
                  : ''
              }
            />

            <InputField
              label="Note"
              placeholder="Enter note"
              value={state.values.note}
              onChangeText={handleChange('note')}
              multiline
              numberOfLines={3}
            />

            <Button
              title={state.isSubmitting ? 'Saving...' : 'Save Details'}
              style={styles.button}
              onPress={handleSubmit}
              disabled={state.isSubmitting}
            />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      ...Colors.white,
      // ...Layout.rounded2xl,
      // overflow: 'hidden',
    },
    scrollContent: {
      // paddingBottom: scaleVertical(20),
    },
    formHeaderContainer: {
      // paddingVertical: scaleVertical(16),
      ...Layout.center,
      borderBottomWidth: scale(0.6),
      borderColor: Colors.lightGrayPure,
    },
    formHeading: {
      ...Fonts.font600,
      ...Fonts.sz16,
    },
    icon: {
      ...Layout.absolute,
      top: scale(8),
      right: scale(8),
    },
    formBody: {
      // ...Spacing.p5,
    },
    button: {
      // marginBottom: scaleVertical(-20),
    },
  });

export default AddPropertyForm;
