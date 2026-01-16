import { useForm } from 'react-hook-form';
import {
  addPaymentFormSchema,
  AddPaymentFormValues,
} from '../utils/addPayement.form.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ADD_PAYMENT_FORM_VALUES } from '../constants/payments.dummy.data';

const useAddPaymentFormController = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddPaymentFormValues>({
    resolver: zodResolver(addPaymentFormSchema),
    defaultValues: ADD_PAYMENT_FORM_VALUES,
  });

  const onSubmit = (data: AddPaymentFormValues) => {
    console.log('Payment =>', data);
  };
  return {
    control,
    errors,
    onSubmit,
    handleSubmit,
  };
};

export default useAddPaymentFormController;
