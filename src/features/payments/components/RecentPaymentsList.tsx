import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import {
  recentPaymentsData,
  recentPaymentsFilterOptions,
} from '../constants/payments.dummy.data';
import { RecentPayment } from '../types/payments.components.type';
import PaymentItem from './PaymentItem';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import useTheme from '@/common/hooks/useTheme';
import { Dropdown } from '@/common/components';
import { scale, scaleVertical } from '@/theme/scale';

const RecentPaymentsList = () => {
  const [selectedFilter, setSelectedFilter] = React.useState('all');
  const { Spacing, Fonts } = useTheme();
  const styles = useMemo(() => stylesFn(Spacing, Fonts), [Spacing, Fonts]);

  const renderItem = useMemo(
    () =>
      ({ item, index }: { item: RecentPayment; index: number }) =>
        <PaymentItem item={item} index={index.toString()} />,
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionHeading}>Recent Payments</Text>

        <Dropdown
          value={selectedFilter}
          onChange={setSelectedFilter}
          dropdownStyle={styles.dropdown}
          textStyle={styles.dropdownText}
          labelStyle={styles.dropdownLabel}
          items={recentPaymentsFilterOptions}
          containerStyle={styles.dropdownContainer}
        />
      </View>

      <FlatList
        data={recentPaymentsData}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        removeClippedSubviews
      />
    </View>
  );
};

const stylesFn = (Spacing: ThemeSpacing, Fonts: ThemeFonts) =>
  StyleSheet.create({
    container: {
      marginTop: scale(16),
    },

    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    sectionHeading: {
      ...Fonts.sz14,
      ...Fonts.font600,
      ...Spacing.my2,
    },

    dropdownContainer: {
      width: scale(100),
      minHeight: scaleVertical(26),
      borderRadius: scale(16),
      ...Spacing.pr2,
      ...Spacing.pl4,
      zIndex: 100000,
    },

    dropdown: {
      width: scale(100),
      zIndex: 1000,
    },

    dropdownText: {
      ...Fonts.sz10,
      ...Fonts.font500,
    },

    dropdownLabel: {
      color: 'purple',
    },
  });

export default RecentPaymentsList;
