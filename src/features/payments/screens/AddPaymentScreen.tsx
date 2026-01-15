import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Button, Container, Dropdown, FormInput } from '@/common/components';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import {
  payementTypeItems,
  rentStatusItems,
} from '../constants/payments.dummy.data';

const AddPaymentScreen = () => {
  const [tenantName, setTenantName] = useState<string | undefined>('');
  const [propertyName, setPropertyName] = useState<string | undefined>('');
  const [fromDate, setFromDate] = useState<string | undefined>('');
  const [toDate, setToDate] = useState<string | undefined>('');
  const [paidAmount, setPaidAmount] = useState<string | undefined>('');
  const [remainingAmount, setRemainingAmount] = useState<string | undefined>(
    '',
  );
  const [rentStatus, setRentStatus] = useState<string | undefined>('');
  const [paymentType, setPaymentType] = useState<string | undefined>('');
  const [note, setNote] = useState<string | undefined>('');

  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout],
  );
  return (
    <Container screenHeading={'Add Payments'}>
      <Dropdown
        items={[]}
        value={tenantName}
        onChange={setTenantName}
        label="Select Tenant"
        placeholder="Select tenant"
        emptyMessage="No tenant added yet."
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        items={[]}
        value={propertyName}
        onChange={setPropertyName}
        label="Select Property"
        placeholder="Select property type"
        emptyMessage="No property added yet."
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        items={[]}
        label="From Date"
        value={fromDate}
        isDatePicker={true}
        onChange={setFromDate}
        placeholder="Select start date"
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        items={[]}
        label="To Date"
        value={toDate}
        isDatePicker={true}
        onChange={setToDate}
        placeholder="Select end date"
        // error={'Please enter valid property name.'}
      />

      <FormInput
        value={paidAmount}
        label="Paid Amount"
        onChangeText={setPaidAmount}
        type="Personal-Details-Field"
        placeholder="Enter paid amount"
        // error={'Please enter valid property name.'}
      />

      <FormInput
        value={remainingAmount}
        label="Remaining Amount"
        type="Personal-Details-Field"
        onChangeText={setRemainingAmount}
        placeholder="Enter remaining amount"
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        value={rentStatus}
        label="Rent Status"
        onChange={setRentStatus}
        items={rentStatusItems}
        placeholder="Select property type"
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        value={paymentType}
        label="Payment Type"
        onChange={setPaymentType}
        items={payementTypeItems}
        placeholder="Select payement type"
        // error={'Please enter valid property name.'}
      />

      <FormInput
        multiline
        label="Note"
        value={note}
        numberOfLines={3}
        placeholder="Enter note"
        onChangeText={setNote}
        type="Personal-Details-Field"
        // error={'Please enter valid property name.'}
      />

      <Button title={'Add Payment'} style={styles.button} onPress={() => {}} />
    </Container>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      ...Colors.white,
      ...Spacing.pb4,
    },
    scrollContent: {
      ...Layout.flexGrow,
    },
    formHeaderContainer: {
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
      ...Spacing.top2,
      ...Spacing.right2,
    },
    button: {
      ...Layout.fullWidth,
      ...Layout.rounded3xl,
      ...Spacing.mt2,
      ...Spacing.mb3,
    },
  });

export default AddPaymentScreen;
