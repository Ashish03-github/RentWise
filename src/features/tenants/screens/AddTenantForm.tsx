import {
  propertyStatusItems,
  propertyTypeItems,
  rentRecurrenceItems,
} from '@/features/property/constants/properties.dummy.data';
import { useAddTenantFormController } from '../controller';
import { Container, RHFInput, RHFDropdown } from '@/common/components';

const AddTenantForm = () => {
  const {
    control,
    errors,
    propertyOptions,
    handleSubmit,
    onSubmit,
    isEditMode,
  } = useAddTenantFormController();

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
        name="propertyId"
        label="Select Property"
        items={propertyOptions}
        control={control}
        errors={errors}
      />

      <RHFInput
        name="propertyAddress"
        label="Property Address"
        control={control}
        errors={errors}
        editable={false}
      />

      <RHFInput
        name="propertyType"
        label="Property Type"
        control={control}
        errors={errors}
        editable={false}
      />

      <RHFInput
        name="deposit"
        label="Deposit"
        control={control}
        errors={errors}
        editable={false}
      />

      <RHFInput
        name="rent"
        label="Rent"
        control={control}
        errors={errors}
        editable={false}
      />

      <RHFInput
        name="rentRecurrence"
        label="Rent Recurrence"
        control={control}
        errors={errors}
        editable={false}
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
