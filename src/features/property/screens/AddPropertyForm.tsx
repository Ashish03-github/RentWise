import React, { useState } from 'react';
import { Container, Dropdown, FormInput } from '@/common/components';
import {
  propertyStatusItems,
  propertyTypeItems,
  rentRecurrenceItems,
} from '../constants/properties.dummy.data';

const AddPropertyForm = () => {
  const [propertyName, setPropertyName] = useState<string | undefined>('');
  const [propertyAddress, setPropertyAddress] = useState<string | undefined>(
    '',
  );
  const [propertyType, setPropertyType] = useState<string | undefined>('');
  const [propertyStaus, setPropertyStatus] = useState<string | undefined>('');
  const [depositeAmount, setDepositeAmount] = useState<string | undefined>('');
  const [rentAmount, setRentAmount] = useState<string | undefined>('');
  const [rentRecurrence, setRentRecurrence] = useState<string | undefined>('');
  const [note, setNote] = useState<string | undefined>('');

  const onSubmit = () => {
    console.log('Property Details =>', {
      propertyName,
      propertyAddress,
      propertyType,
      propertyStaus,
      depositeAmount,
      rentAmount,
      rentRecurrence,
      note,
    });
  };

  return (
    <Container
      onButtonPress={onSubmit}
      buttonLabel={'Add Property'}
      screenHeading="Add Property"
    >
      <FormInput
        label="Property Name"
        value={propertyName}
        onChangeText={setPropertyName}
        type="Personal-Details-Field"
        placeholder="Enter property name"
        // error={'Please enter valid property name.'}
      />

      <FormInput
        multiline
        numberOfLines={3}
        value={propertyAddress}
        label="Property Address"
        onChangeText={setPropertyAddress}
        type="Personal-Details-Field"
        placeholder="Enter property address"
      />

      <Dropdown
        label="Property Type"
        value={propertyType}
        items={propertyTypeItems}
        onChange={setPropertyType}
        placeholder="Select property type"
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        label="Property Status"
        value={propertyStaus}
        items={propertyStatusItems}
        onChange={setPropertyStatus}
        placeholder="Select property status"
        // error={'Please enter valid property name.'}
      />

      <FormInput
        label="Property Deposit"
        value={depositeAmount}
        keyboardType="numeric"
        type="Personal-Details-Field"
        onChangeText={setDepositeAmount}
        placeholder="Enter deposit amount"
        // error={'Please enter valid property name.'}
      />

      <FormInput
        value={rentAmount}
        label="Property Rent"
        keyboardType="numeric"
        onChangeText={setRentAmount}
        type="Personal-Details-Field"
        placeholder="Enter rent amount"
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        label="Rent Recurrence"
        value={rentRecurrence}
        items={rentRecurrenceItems}
        onChange={setRentRecurrence}
        placeholder="Select rent recurrence period"
        // error={'Please enter valid property name.'}
      />

      <FormInput
        label="Note"
        multiline
        value={note}
        numberOfLines={3}
        placeholder="Enter note"
        onChangeText={setNote}
        type="Personal-Details-Field"
        // error={'Please enter valid property name.'}
      />
    </Container>
  );
};
export default AddPropertyForm;
