import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import DropDownPicker, {
  DropDownPickerProps,
} from 'react-native-dropdown-picker';

import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeSpacing } from '@/theme/spacing';
import { scale, scaleVertical } from '@/theme/scale';

import useTheme from '../hooks/useTheme';
import AppIcon from './AppIcon';

export type DropdownItem<T = string> = {
  label: string;
  value: T;
};

interface AppDropdownProps<T = string> extends DropDownPickerProps {
  label?: string;
  placeholder?: string;
  items: DropdownItem<T>[];
  value: T | null;
  onChange: (value: T) => void;
  disabled?: boolean;
  zIndex?: number;
  error?: string;

  // New optional style props
  containerStyle?: StyleProp<ViewStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  listItemStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorTextStyle?: StyleProp<TextStyle>;
}

const AppDropdown = <T extends string | number>({
  label,
  placeholder = 'Select option',
  items,
  value,
  onChange,
  error,
  disabled = false,
  zIndex = 0,
  containerStyle,
  dropdownStyle,
  textStyle,
  placeholderStyle,
  listItemStyle,
  labelStyle,
  errorTextStyle,
  ...props
}: AppDropdownProps<T>) => {
  const [open, setOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItem<T>[]>(items);

  const { Colors, Fonts, Spacing } = useTheme();
  const styles = useMemo(
    () => stylesFn(Colors, Fonts, Spacing),
    [Colors, Fonts, Spacing],
  );

  const containerStyles = useMemo(
    () => [styles.dropdownInput, error && styles.errorBorder, containerStyle],
    [error, containerStyle],
  );

  return (
    <View style={[styles.wrapper, { zIndex }]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <DropDownPicker
        open={open}
        value={value}
        items={dropdownItems}
        setOpen={setOpen}
        setValue={callback => {
          const nextValue = callback(value);
          onChange(nextValue as T);
        }}
        setItems={setDropdownItems}
        placeholder={placeholder}
        disabled={disabled}
        style={containerStyles}
        textStyle={[styles.dropdownText, textStyle]}
        listItemLabelStyle={[styles.listItemText, listItemStyle]}
        modalContentContainerStyle={{ backgroundColor: 'red' }}
        dropDownContainerStyle={[styles.dropdownList, dropdownStyle]}
        placeholderStyle={[styles.dropdownPlaceholder, placeholderStyle]}
        ArrowUpIconComponent={() => <AppIcon name="keyboard-arrow-up" />}
        ArrowDownIconComponent={() => <AppIcon name="keyboard-arrow-down" />}
        {...props}
      />

      {!!error && (
        <Text style={[styles.errorText, errorTextStyle]}>{error}</Text>
      )}
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    wrapper: {
      // ...Spacing.mb4,
      // zIndex: 10000,
    },

    label: {
      ...Fonts.sz11,
      ...Spacing.mb2,
      ...Fonts.font600,
      ...Colors.textPrimary,
      lineHeight: scale(16),
    },

    dropdownInput: {
      borderWidth: scale(1),
      borderColor: Colors.lightGrayPure,
      borderRadius: scale(8),
      minHeight: scaleVertical(44),
      paddingHorizontal: scale(12),
      // ...Colors.white,
    },

    dropdownList: {
      borderWidth: scale(1),
      borderColor: Colors.lightGrayPure,
      borderRadius: scale(8),
      marginTop: scale(8),
      // ...Colors.white,
      // backgroundColor: '#FFFFFF',
      // zIndex: 10000,
    },

    dropdownText: {
      ...Fonts.font500,
      ...Fonts.sz11,
      ...Colors.textBlack,
    },

    listItemText: {
      ...Fonts.sz10,
      ...Fonts.font400,
      ...Colors.textBlack,
    },

    errorBorder: {
      borderColor: Colors.redPure,
    },

    disabled: {
      ...Colors.background,
      borderColor: Colors.lightGrayPure,
    },

    errorText: {
      ...Spacing.mt2,
      ...Fonts.sz10,
      lineHeight: scale(16),
      color: Colors.redPure,
    },
    dropdownPlaceholder: {
      ...Fonts.font500,
      ...Fonts.sz11,
      ...Colors.inputFiledTextColor,
    },
  });

export default AppDropdown;
