import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import useTheme from '@/common/hooks/useTheme';
import { AppIcon, Button, InputField } from '@/common/components';
import { scale, scaleVertical } from '@/theme/scale';

interface AddPropertyFormProps {
  onPress: () => void;
  onCancel: () => void;
}
const AddPropertyForm: React.FC<AddPropertyFormProps> = ({
  onPress,
  onCancel,
}) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.formHeaderContainer}>
          <Text style={styles.formHeading}>Add Property</Text>
          <AppIcon
            style={styles.icon}
            name="cancel"
            onPress={onCancel}
            color={Colors.redPure}
          />
        </View>
        <View style={styles.formBody}>
          <InputField label="Property Name" placeholder="Enter property name" />
          <InputField label="Property Type" placeholder="Enter property type" />
          <InputField
            label="Property Address"
            placeholder="Enter property address"
          />
          <InputField
            label="Property Deposite"
            placeholder="Enter deposite amount"
          />
          <InputField label="Property Rent" placeholder="Enter rent amount" />
          <InputField label="Note" placeholder="Enter note" />

          <Button
            title="Save Details"
            style={styles.button}
            onPress={onPress}
          />
        </View>
      </ScrollView>
    </View>
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
      ...Layout.fullWidth,
      height: '90%',
      ...Colors.white,
      ...Layout.rounded2xl,
      overflow: 'hidden',
    },
    scrollContent: {
      paddingBottom: scaleVertical(20),
    },
    formHeaderContainer: {
      paddingVertical: scaleVertical(16),
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
      top: scale(8),
      right: scale(8),
    },
    formBody: {
      ...Spacing.p5,
    },
    button: {
      marginBottom: scaleVertical(-20),
    },
  });

export default AddPropertyForm;
