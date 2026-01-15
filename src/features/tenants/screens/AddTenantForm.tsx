import React, { useState } from 'react';
import { Container, Dropdown, FormInput } from '@/common/components';
import {
  propertyStatusItems,
  propertyTypeItems,
  rentRecurrenceItems,
} from '@/features/property/constants/properties.dummy.data';
const AddTenantForm = () => {
  const [tenantName, setTenantName] = useState<string | undefined>('');
  const [email, setEmail] = useState<string | undefined>('');
  const [phone, setPhone] = useState<string | undefined>('');

  const [property, setProperty] = useState<string | undefined>('');
  const [deposite, setDeposite] = useState<string>('');
  const [rent, setRent] = useState<string>('');

  const [leaseStartDate, setLeaseStartDate] = useState<string | undefined>('');
  const [leaseEndDate, setLeaseEndDate] = useState<string | undefined>('');

  const [propertyType, setPropertyType] = useState<string>();
  const [rentRecurrence, setRentRecurrence] = useState<string>();

  const onSubmit = () => {
    const payload = {
      tenantName,
      email,
      phone,
      rent,
      property,
      deposite,
      leaseStartDate,
      leaseEndDate,
      propertyType,
      rentRecurrence,
    };

    console.log('PAYLOAD =>', payload);
  };

  return (
    <Container
      buttonLabel={'Add Tenant'}
      onButtonPress={onSubmit}
      screenHeading="Add Tenant"
    >
      {/* Tenant Name */}
      <FormInput
        type="Personal-Details-Field"
        label="Tenant Name"
        placeholder="Enter tenant name"
        value={tenantName}
        onChangeText={setTenantName}
      />

      {/* Email */}
      <FormInput
        type="Personal-Details-Field"
        label="Email Address"
        placeholder="Enter email address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Phone */}
      <FormInput
        type="Personal-Details-Field"
        label="Phone Number"
        placeholder="Enter phone number"
        value={phone}
        onChangeText={setPhone}
      />

      <Dropdown
        label="Select Property"
        items={propertyStatusItems}
        value={property}
        onChange={setProperty}
      />

      {/* Property Type */}
      <Dropdown
        label="Property Type"
        items={propertyTypeItems}
        value={propertyType}
        onChange={setPropertyType}
      />

      <FormInput
        type="Personal-Details-Field"
        label="Property Deposite"
        placeholder="Enter deposite amount"
        keyboardType="number-pad"
        value={deposite}
        onChangeText={setDeposite}
      />

      <FormInput
        type="Personal-Details-Field"
        label="Property Rent"
        placeholder="Enter rent amount"
        value={rent}
        keyboardType="number-pad"
        onChangeText={setRent}
      />

      {/* Lease Start Date */}
      <Dropdown
        label="Lease Start Date"
        isDatePicker
        value={leaseStartDate}
        onChange={setLeaseStartDate}
      />

      {/* Lease End Date */}
      <Dropdown
        label="Lease End Date"
        isDatePicker
        value={leaseEndDate}
        onChange={setLeaseEndDate}
      />

      {/* Rent Recurrence */}
      <Dropdown
        label="Rent Recurrence"
        items={rentRecurrenceItems}
        value={rentRecurrence}
        onChange={setRentRecurrence}
      />

      {/* <Button title="Add Tenant" style={styles.button} onPress={onSubmit} /> */}
    </Container>
  );
};

export default AddTenantForm;
