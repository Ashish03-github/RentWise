import React, { memo, useMemo, useState, useCallback } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import { scale } from '@/theme/scale';

const FILTER_OPTIONS = ['All', 'Paid', 'Partial', 'Pending'] as const;
type FilterType = (typeof FILTER_OPTIONS)[number];

type PaymentsFiltersProps = {
  onChange?: (filter: FilterType) => void;
};

const PaymentsFilters = ({ onChange }: PaymentsFiltersProps) => {
  const { Spacing, Colors, Layout, Fonts } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');
  const badge = false;
  const styles = useMemo(
    () => stylesFn(Colors, Layout, Spacing, Fonts),
    [Colors, Layout, Spacing, Fonts],
  );

  const onFilterPress = useCallback(
    (filter: FilterType) => {
      setSelectedFilter(filter);
      onChange?.(filter);
    },
    [onChange],
  );

  return (
    <View style={styles.container}>
      {FILTER_OPTIONS.map(item => {
        const isSelected = selectedFilter === item;

        return (
          <Pressable
            key={item}
            onPress={() => onFilterPress(item)}
            style={[
              styles.filterItem,
              isSelected ? styles.selectedItem : styles.unSelectedItem,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                isSelected ? styles.selectedText : styles.unSelectedText,
              ]}
            >
              {item}
            </Text>

            {badge && (
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>8</Text>
              </View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
  Fonts: ThemeFonts,
) =>
  StyleSheet.create({
    container: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.flexWrap,
      ...Spacing.my4,
    },

    filterItem: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Layout.roundedXl,
      ...Layout.center,
      minWidth: scale(75),
      ...Spacing.py1,
      ...Spacing.px2,
    },

    selectedItem: {
      ...Colors.primary,
    },

    unSelectedItem: {
      ...Colors.background,
      borderWidth: 1,
      borderColor: Colors.lightGrayPure,
    },

    filterText: {
      ...Fonts.sz9,
      ...Fonts.font500,
    },

    filterBadge: {
      width: scale(14),
      height: scale(14),
      borderRadius: scale(10),
      ...Colors.primaryLight1,
      ...Spacing.ml2,
      ...Layout.center,
    },

    filterBadgeText: {
      ...Fonts.sz8,
      ...Fonts.font500,
    },

    selectedText: {
      ...Colors.textWhite,
    },

    unSelectedText: {
      ...Colors.textSecondary,
    },
  });

export default PaymentsFilters;
