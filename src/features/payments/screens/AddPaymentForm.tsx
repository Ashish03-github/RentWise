import React from 'react';
import { Container, RHFDropdown, RHFInput } from '@/common/components';
import {
  payementTypeItems,
  rentStatusItems,
} from '../constants/payments.dummy.data';
import useAddPaymentFormController from '../controller/useAddPaymentFormController';

const AddPaymentForm = () => {
  const {
    control,
    errors,
    tenantOptions,
    propertyOptions,
    onSubmit,
    handleSubmit,
  } = useAddPaymentFormController();

  return (
    <Container
      scrollEnable={true}
      buttonLabel={'Add Payment'}
      screenHeading={'Add Payments'}
      onButtonPress={handleSubmit(onSubmit)}
    >
      <RHFDropdown
        name="tenantId"
        label="Select Tenant"
        items={tenantOptions}
        control={control}
        errors={errors}
        emptyMessage="No tenant for added yet."
      />

      <RHFDropdown
        name="propertyId"
        label="Select Property"
        items={propertyOptions}
        control={control}
        errors={errors}
        emptyMessage="No property for selected tenant"
      />

      <RHFDropdown
        items={[]}
        errors={errors}
        name="fromDate"
        label="From Date"
        control={control}
        isDatePicker={true}
        placeholder="Select start date"
      />

      <RHFDropdown
        items={[]}
        name="toDate"
        label="To Date"
        errors={errors}
        control={control}
        isDatePicker={true}
        placeholder="Select end date"
      />

      <RHFInput
        errors={errors}
        name="paidAmount"
        control={control}
        label="Paid Amount"
        type="Personal-Details-Field"
        placeholder="Enter paid amount"
      />

      <RHFInput
        errors={errors}
        control={control}
        name="remainingAmount"
        label="Remaining Amount"
        type="Personal-Details-Field"
        placeholder="Enter remaining amount"
      />

      <RHFDropdown
        errors={errors}
        control={control}
        label="Rent Status"
        name="rentStatus"
        items={rentStatusItems}
        placeholder="Select property type"
      />

      <RHFDropdown
        errors={errors}
        control={control}
        name="paymentType"
        label="Payment Type"
        items={payementTypeItems}
        placeholder="Select payement type"
      />

      <RHFInput
        multiline
        label="Note"
        name="note"
        errors={errors}
        control={control}
        numberOfLines={3}
        placeholder="Enter note"
        type="Personal-Details-Field"
      />
    </Container>
  );
};

export default AddPaymentForm;
