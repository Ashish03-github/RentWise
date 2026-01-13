import { StyleSheet } from 'react-native';
import React from 'react';
import { Button, Container, Dropdown, FormInput } from '@/common/components';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import {
  propertyStatusItems,
  propertyTypeItems,
} from '@/features/property/constants/properties.dummy.data';
import {
  payementTypeItems,
  rentStatusItems,
} from '../constants/payments.dummy.data';

const AddPaymentScreen = () => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout],
  );
  return (
    <Container screenHeading={'Add Payments'}>
      <Dropdown
        value={''}
        onChange={() => {}}
        label="Select Tenant"
        items={propertyTypeItems}
        placeholder="Select tenant"
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        value={''}
        onChange={() => {}}
        label="Select Property"
        items={propertyTypeItems}
        placeholder="Select property type"
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        value={''}
        label="From Date"
        onChange={() => {}}
        items={propertyStatusItems}
        placeholder="Select start date"
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        label="To Date"
        value={''}
        placeholder="Select end date"
        items={propertyStatusItems}
        onChange={() => {}}
        // error={'Please enter valid property name.'}
      />

      <FormInput
        type="Personal-Details-Field"
        label="Paid Amount"
        placeholder="Enter paid amount"
        onChangeText={() => {}}
        multiline
        numberOfLines={3}
        // error={'Please enter valid property name.'}
      />

      <FormInput
        type="Personal-Details-Field"
        label="Remaining Amount"
        placeholder="Enter remaining amount"
        onChangeText={() => {}}
        multiline
        numberOfLines={3}
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        value={''}
        label="Rent Status"
        onChange={() => {}}
        items={rentStatusItems}
        placeholder="Select property type"
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        label="Payment Type"
        value={''}
        placeholder="Select payement type"
        items={payementTypeItems}
        onChange={() => {}}
        // error={'Please enter valid property name.'}
      />

      <FormInput
        type="Personal-Details-Field"
        label="Note"
        placeholder="Enter note"
        onChangeText={() => {}}
        multiline
        numberOfLines={3}
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
