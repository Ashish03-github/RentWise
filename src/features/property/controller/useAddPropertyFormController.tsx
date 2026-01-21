import { useForm } from 'react-hook-form';
import {
  addPropertyFormSchema,
  AddPropertyFormValues,
} from '../utils/add.property.form.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ADD_PROPERTY_FORM_DEFAULT_VALUES } from '../constants/properties.dummy.data';
import { useAppDispatch } from '@/store/hooks';
import { addProperty } from '../store/properties.slice';

const useAddPropertyFormController = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddPropertyFormValues>({
    resolver: zodResolver(addPropertyFormSchema),
    defaultValues: ADD_PROPERTY_FORM_DEFAULT_VALUES,
  });

  const onSubmit = (data: AddPropertyFormValues) => {
    dispatch(addProperty({ ...data, id: Math.random().toString() }));
  };
  return { control, handleSubmit, errors, onSubmit };
};

export default useAddPropertyFormController;
