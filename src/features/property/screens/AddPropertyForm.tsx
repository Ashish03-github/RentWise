import React from 'react';
import { Container, RHFDropdown, RHFInput } from '@/common/components';
import {
  propertyTypeItems,
  rentRecurrenceItems,
  propertyStatusItems,
} from '../constants/properties.dummy.data';
import { useAddPropertyFormController } from '../controller';

const AddPropertyForm = () => {
  const { control, handleSubmit, errors, onSubmit, isEditMode } =
    useAddPropertyFormController();

  return (
    <Container
      onButtonPress={handleSubmit(onSubmit)}
      buttonLabel={isEditMode ? 'Update Property' : 'Add Property'}
      screenHeading={isEditMode ? 'Edit Property' : 'Add Property'}
    >
      <RHFInput
        control={control}
        errors={errors}
        name="propertyName"
        label="Property Name"
        type="Personal-Details-Field"
        placeholder="Enter property name"
      />

      <RHFInput
        multiline
        errors={errors}
        control={control}
        numberOfLines={3}
        name={'propertyAddress'}
        label="Property Address"
        type="Personal-Details-Field"
        placeholder="Enter property address"
      />

      <RHFDropdown
        name="propertyType"
        label="Property Type"
        control={control}
        errors={errors}
        items={propertyTypeItems}
        placeholder="Select property type"
      />

      <RHFDropdown
        name={'propertyStatus'}
        label="Property Status"
        control={control}
        errors={errors}
        items={propertyStatusItems}
        placeholder="Select property status"
      />

      <RHFInput
        name="propertyDeposit"
        label="Property Deposit"
        control={control}
        errors={errors}
        keyboardType="numeric"
        type="Personal-Details-Field"
        placeholder="Enter deposit amount"
      />

      <RHFInput
        name="propertyRent"
        label="Property Rent"
        keyboardType="numeric"
        control={control}
        errors={errors}
        type="Personal-Details-Field"
        placeholder="Enter rent amount"
      />

      <RHFDropdown
        label="Rent Recurrence"
        name="rentRecurrence"
        control={control}
        errors={errors}
        items={rentRecurrenceItems}
        placeholder="Select rent recurrence period"
      />

      <RHFInput
        name="note"
        label="Note"
        multiline
        errors={errors}
        control={control}
        numberOfLines={3}
        placeholder="Enter note"
        type="Personal-Details-Field"
      />
    </Container>
  );
};
export default AddPropertyForm;
