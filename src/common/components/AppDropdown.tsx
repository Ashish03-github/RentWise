import React, { memo, useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import useTheme from '../hooks/useTheme';
import { scale, scaleVertical } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { AppDropdownProps } from './components.type';
import AppCalendar from './AppCalendar';

type InternalItem<T> = {
  label: string;
  value?: T;
  icon?: string;
  __emptyMessage?: boolean;
  __isCalendar?: boolean;
};

const AppDropdown = <T,>({
  label,
  placeholder = 'Select option',
  items = [],
  value,
  onChange,
  error,
  disabled = false,
  iconSize = 22,
  isDatePicker = false,
  emptyMessage = '',
  styles: customStyles = {},
}: AppDropdownProps<T> & { emptyMessage?: string }) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const dropdownRef = useRef<SelectDropdown>(null);

  const styles = useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const selectedItem = useMemo(
    () => items.find(i => i.value === value),
    [items, value],
  );

  const dropdownData: InternalItem<T>[] = useMemo(() => {
    if (isDatePicker) {
      return [{ label: 'calendar', __isCalendar: true }];
    }

    if (!selectedItem && emptyMessage) {
      return [{ label: emptyMessage, __emptyMessage: true }, ...items];
    }

    return items;
  }, [isDatePicker, items, selectedItem, emptyMessage]);

  const renderDropdownButton = useCallback(
    (_: InternalItem<T> | null, isOpened: boolean) => (
      <View
        style={[
          styles.container,
          error && styles.errorBorder,
          disabled && styles.disabled,
          customStyles.container,
        ]}
      >
        <Text
          style={[
            styles.text,
            !selectedItem && styles.placeholder,
            customStyles.text,
          ]}
          numberOfLines={1}
        >
          {isDatePicker && (value as string).length > 0
            ? (value as string) ?? placeholder
            : selectedItem?.label ?? placeholder}
        </Text>

        <Icon
          name={isOpened ? 'chevron-up' : 'chevron-down'}
          size={scale(iconSize)}
          color={Colors.textBlack.color}
        />
      </View>
    ),
    [
      styles,
      error,
      disabled,
      customStyles.container,
      selectedItem,
      value,
      placeholder,
      iconSize,
      isDatePicker,
      Colors.textBlack.color,
    ],
  );

  const renderDropdownItem = useCallback(
    (item: InternalItem<T>) => {
      if (item.__isCalendar) {
        return (
          <View style={{ padding: scale(10) }}>
            <AppCalendar
              selectedDate={value as string}
              onDateSelect={date => {
                onChange(date);
                dropdownRef.current?.closeDropdown();
              }}
            />
          </View>
        );
      }

      if (item.__emptyMessage) {
        return (
          <View style={styles.emptyItem}>
            <Text style={styles.emptyItemText}>{item.label}</Text>
          </View>
        );
      }

      return (
        <View style={[styles.item]}>
          {item.icon && <Icon name={item.icon} size={22} style={Spacing.mr2} />}
          <Text style={styles.itemText}>{item.label}</Text>
        </View>
      );
    },
    [onChange, value, styles, Spacing],
  );

  return (
    <View style={[styles.wrapper, customStyles.wrapper]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <SelectDropdown
        ref={dropdownRef}
        data={dropdownData}
        disabled={disabled}
        statusBarTranslucent
        renderButton={renderDropdownButton}
        renderItem={renderDropdownItem}
        dropdownStyle={[
          styles.dropdown,
          isDatePicker && { height: scaleVertical(360) },
        ]}
        showsVerticalScrollIndicator={false}
        onSelect={item => {
          if (!isDatePicker && !item.__emptyMessage) {
            onChange(item.value);
          }
        }}
      />

      {!!error && (
        <Text style={[styles.errorText, customStyles.errorText]}>{error}</Text>
      )}
    </View>
  );
};

export default memo(AppDropdown);

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    wrapper: {
      ...Spacing.mb4,
    },

    label: {
      ...Fonts.sz10,
      ...Fonts.font600,
      ...Colors.textPrimary,
      ...Spacing.mb2,
    },

    container: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      minHeight: scale(50),
      borderBottomWidth: scale(1),
      borderColor: Colors.lightGrayPure,
      ...Colors.white,
    },

    text: {
      ...Layout.flex,
      ...Fonts.sz11,
      ...Fonts.font500,
      ...Colors.textBlack,
    },

    placeholder: {
      ...Colors.inputFiledTextColor,
    },

    errorBorder: {
      borderColor: Colors.redPure,
    },

    disabled: {
      ...Colors.background,
    },

    errorText: {
      ...Fonts.sz9,
      ...Spacing.mt2,
      color: Colors.redPure,
      ...Fonts.font500Italic,
    },

    dropdown: {
      borderRadius: 12,
      backgroundColor: Colors.white.backgroundColor,
    },

    item: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      paddingVertical: scaleVertical(10),
      paddingHorizontal: scale(12),
    },

    itemText: {
      ...Fonts.sz11,
      ...Fonts.font500,
      ...Colors.textBlack,
    },

    emptyItem: {
      paddingVertical: scaleVertical(20),
      paddingHorizontal: scale(12),
    },

    emptyItemText: {
      ...Fonts.sz10,
      ...Fonts.font500Italic,
      ...Colors.textBlack,
    },
  });
