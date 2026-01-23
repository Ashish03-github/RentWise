import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import {
  recentPaymentsData,
  recentPaymentsFilterOptions,
} from '../constants/payments.dummy.data';
import PaymentItem from './PaymentItem';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import useTheme from '@/common/hooks/useTheme';
import { Dropdown, EmptyState } from '@/common/components';
import { scale, scaleVertical } from '@/theme/scale';
import { RecentPayment } from '../types/payments.components.type';
import PaymentsInfo from './PaymentsInfo';

const RecentPaymentsList = () => {
  const [selectedFilter, setSelectedFilter] = React.useState<
    string | undefined
  >('all');
  const { Spacing, Fonts, Colors, Layout } = useTheme();

  const styles = useMemo(() => stylesFn(Spacing, Fonts), [Spacing, Fonts]);

  const dropdownStyle = useMemo(
    () => ({
      wrapper: { ...Spacing.mb1 },
      container: {
        width: scale(100),
        minHeight: scaleVertical(20),
        borderWidth: 1,
        borderColor: Colors.lightGrayPure,
        ...Layout.rounded3xl,
        ...Spacing.pr1,
        ...Spacing.pl3,
        paddingVertical: scaleVertical(3),
      },
      text: {
        ...Fonts.font500,
        ...Fonts.sz10,
        ...Colors.textBlack,
      },
      dropdown: { ...Layout.rounded2xl },
      item: { ...Spacing.py3 },
      itemText: {
        ...Fonts.font500,
        ...Fonts.sz10,
        ...Colors.textBlack,
      },
    }),
    [Spacing, Fonts, Colors, Layout],
  );

  const renderItem = useCallback(
    ({ item, index }: { item: RecentPayment; index: number }) => (
      <PaymentItem item={item} index={index.toString()} />
    ),
    [],
  );

  return (
    <FlatList
      data={recentPaymentsData}
      initialNumToRender={10}
      renderItem={renderItem}
      removeClippedSubviews={true}
      keyExtractor={(_, i) => i.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContentContainer}
      ListHeaderComponent={
        <View style={styles.header}>
          <PaymentsInfo />

          <View style={styles.headerRow}>
            <Text style={styles.sectionHeading}>Recent Payments</Text>

            <Dropdown
              iconSize={16}
              value={selectedFilter}
              styles={dropdownStyle}
              // placeholder="Select"
              onChange={setSelectedFilter}
              items={recentPaymentsFilterOptions}
            />
          </View>
        </View>
      }
      ListEmptyComponent={
        <EmptyState
          icon="circle-exclamation"
          message="No payment history found."
        />
      }
    />
  );
};

const stylesFn = (Spacing: ThemeSpacing, Fonts: ThemeFonts) =>
  StyleSheet.create({
    header: {
      ...Spacing.mb2,
    },

    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...Spacing.pt3,
    },

    sectionHeading: {
      ...Fonts.sz14,
      ...Fonts.font600,
    },
    listContentContainer: {
      paddingBottom: scaleVertical(80),
    },
  });
export default RecentPaymentsList;
