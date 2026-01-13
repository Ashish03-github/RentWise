import { StyleSheet } from 'react-native';
import React from 'react';
import { Button, Container, Dropdown, FormInput } from '@/common/components';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import useTheme from '@/common/hooks/useTheme';
import {
  propertyStatusItems,
  propertyTypeItems,
  rentRecurrenceItems,
} from '@/features/property/constants/properties.dummy.data';

const AddTenantForm = () => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout],
  );
  return (
    <Container screenHeading={'Add Tenant'}>
      <FormInput
        type="Personal-Details-Field"
        label="Tenant Name"
        placeholder="Enter property name"
        onChangeText={() => {}}
        // error={'Please enter valid property name.'}
      />

      <FormInput
        type="Personal-Details-Field"
        label="Email Address"
        placeholder="Enter email address"
        onChangeText={() => {}}
        // error={'Please enter valid property name.'}
        multiline
        numberOfLines={3}
      />

      <FormInput
        type="Personal-Details-Field"
        label="Phone Number"
        placeholder="Enter phone number"
        onChangeText={() => {}}
        // error={'Please enter valid property name.'}
        multiline
        numberOfLines={3}
      />

      <Dropdown
        label="Select Property"
        value={null}
        placeholder="Select property type"
        emptyMessage="No properties found."
        items={[]}
        onChange={() => {}}
        // error={'Please enter valid property name.'}
      />

      {/* <Dropdown
        label="Property Status"
        value={''}
        placeholder="Select property type"
        items={propertyTypeItems}
        onChange={() => {}}
        // error={'Please enter valid property name.'}
      /> */}

      <Dropdown
        label="Property Type"
        value={''}
        placeholder="Select property type"
        items={propertyStatusItems}
        onChange={() => {}}
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        label="Lease Start Date"
        value={''}
        placeholder="Select start date"
        items={propertyStatusItems}
        onChange={() => {}}
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        label="Lease End Date"
        value={''}
        placeholder="Select end date"
        items={propertyStatusItems}
        onChange={() => {}}
        // error={'Please enter valid property name.'}
      />

      <FormInput
        type="Personal-Details-Field"
        label="Property Deposit"
        keyboardType="numeric"
        placeholder="Enter deposit amount"
        onChangeText={() => {}}
        // error={'Please enter valid property name.'}
      />

      <FormInput
        type="Personal-Details-Field"
        label="Property Rent"
        keyboardType="numeric"
        placeholder="Enter rent amount"
        onChangeText={() => {}}
        // error={'Please enter valid property name.'}
      />

      <Dropdown
        label="Rent Recurrence"
        value={''}
        items={rentRecurrenceItems}
        placeholder="Select rent recurrence period"
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

      <Button title={'Add Tenant'} style={styles.button} onPress={() => {}} />
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

export default AddTenantForm;
