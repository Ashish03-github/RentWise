import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useMemo } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectTenants } from '@/features/tenants/store';
import { selectProperties } from '@/features/property/store/properties.selectors';
import {
  addPaymentFormSchema,
  AddPaymentFormValues,
} from '../utils/addPayement.form.schema';
import { ADD_PAYMENT_FORM_VALUES } from '../constants/payments.dummy.data';
import { DUMMY_USER } from '@/features/tenants/constants/tenants.dummy.data';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addPayment } from '../store/payment.slice';

const useAddPaymentFormController = () => {
  const navigation = useNavigation();
  const tenants = useAppSelector(selectTenants);
  const properties = useAppSelector(selectProperties);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddPaymentFormValues>({
    resolver: zodResolver(addPaymentFormSchema),
    defaultValues: ADD_PAYMENT_FORM_VALUES,
  });

  /** ---------------- Tenant options ---------------- */
  const tenantOptions = useMemo(
    () =>
      tenants.map(t => ({
        label: t.tenantName,
        value: t.id,
      })),
    [tenants],
  );

  /** ---------------- Watch selections ---------------- */
  const tenantId = useWatch({ control, name: 'tenantId' });
  const propertyId = useWatch({ control, name: 'propertyId' });

  /** ---------------- Selected objects ---------------- */
  const selectedTenant = useMemo(
    () => tenants.find(t => t.id === tenantId),
    [tenantId, tenants],
  );

  const tenantProperties = useMemo(
    () => properties.filter(p => p.id === selectedTenant?.propertyId),
    [tenantId, properties],
  );

  const propertyOptions = useMemo(
    () =>
      tenantProperties.map(p => ({
        label: p.propertyName,
        value: p.id,
      })),
    [tenantProperties],
  );

  const selectedProperty = useMemo(
    () => tenantProperties.find(p => p.id === propertyId),
    [propertyId, tenantProperties],
  );

  /** ---------------- Reset property on tenant change ---------------- */
  React.useEffect(() => {
    setValue('propertyId', '');
  }, [tenantId]);

  /** ---------------- Submit ---------------- */
  const onSubmit = (formData: AddPaymentFormValues) => {
    if (!selectedTenant || !selectedProperty) return;

    const finalPaymentPayload = {
      // payment id
      id: Date.now().toString(),
      /** Property */
      propertyId: propertyId,

      /** Tenant */
      // tenantImage: selectedTenant.tenantImage,
      tenantId: tenantId,
      tenantImage: DUMMY_USER,
      tenantName: selectedTenant.tenantName,
      leaseStartDate: selectedTenant.leaseStartDate,
      leaseEndDate: selectedTenant.leaseEndDate,

      /** Payment */
      paymentstatus: formData.rentStatus,
      paidAmount: Number(formData.paidAmount),
      pendingAmount:
        Number(selectedProperty.propertyRent) - Number(formData.paidAmount),
      partialAmount: Number(formData.paidAmount),
      daysLate: 0,
      rentDue: 0,

      /** Meta */
      fromDate: formData.fromDate,
      toDate: formData.toDate,
      payementDate: new Date().toDateString(),
      note: formData.note,
      paymentType: formData.paymentType,
    };

    // console.log(formData);
    dispatch(addPayment(finalPaymentPayload));

    navigation.goBack();
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    tenantOptions,
    propertyOptions,
  };
};

export default useAddPaymentFormController;
