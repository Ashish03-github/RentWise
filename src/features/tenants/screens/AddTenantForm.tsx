import {
  propertyStatusItems,
  propertyTypeItems,
  rentRecurrenceItems,
} from '@/features/property/constants/properties.dummy.data';
import { useAddTenantFormController } from '../controller';
import { Container, RHFInput, RHFDropdown } from '@/common/components';

const AddTenantForm = () => {
  const { control, errors, handleSubmit, onSubmit, isEditMode } =
    useAddTenantFormController();

  return (
    <Container
      screenHeading={isEditMode ? 'Edit Tenant' : 'Add Tenant'}
      buttonLabel={isEditMode ? 'Update Tenant' : 'Add Tenant'}
      onButtonPress={handleSubmit(onSubmit)}
    >
      <RHFInput
        name="tenantName"
        label="Tenant Name"
        placeholder="Enter tenant name"
        control={control}
        errors={errors}
        type="Personal-Details-Field"
      />

      <RHFInput
        name="email"
        label="Email Address"
        placeholder="Enter email address"
        control={control}
        errors={errors}
        type="Personal-Details-Field"
      />

      <RHFInput
        name="phone"
        label="Phone Number"
        keyboardType="number-pad"
        maxLength={10}
        control={control}
        errors={errors}
        placeholder="Enter phone number"
        type="Personal-Details-Field"
      />

      <RHFDropdown
        items={propertyStatusItems}
        name="property"
        label="Select Property"
        errors={errors}
        control={control}
        placeholder="Select property"
      />

      <RHFDropdown
        name="propertyType"
        label="Property Type"
        items={propertyTypeItems}
        control={control}
        errors={errors}
        placeholder="Select property type"
      />

      <RHFInput
        name="deposit"
        label="Property Deposit"
        keyboardType="number-pad"
        placeholder="Enter deposit amount"
        control={control}
        errors={errors}
        type="Personal-Details-Field"
      />

      <RHFInput
        name="rent"
        label="Property Rent"
        keyboardType="number-pad"
        placeholder="Enter rent amount"
        control={control}
        errors={errors}
        type="Personal-Details-Field"
      />

      <RHFDropdown
        name="leaseStartDate"
        label="Lease Start Date"
        isDatePicker
        control={control}
        errors={errors}
      />

      <RHFDropdown
        name="leaseEndDate"
        label="Lease End Date"
        isDatePicker
        control={control}
        errors={errors}
      />

      <RHFDropdown
        name="rentRecurrence"
        label="Rent Recurrence"
        items={rentRecurrenceItems}
        control={control}
        errors={errors}
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

export default AddTenantForm;
