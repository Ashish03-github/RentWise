import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import useTheme from '@/common/hooks/useTheme';
import { ThemeSpacing } from '@/theme/spacing';
import QuickActionCard from './QuickActionCard';
import { DashboardQuickActionsDummyData } from '../constants/dummyData';
import { QuickActionItem } from '../types/components.type';
import { useNavigation } from '@react-navigation/native';

const QuickActionsGrid = () => {
  const navigation = useNavigation();
  const { Spacing, Fonts, Layout, Colors } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Spacing, Fonts, Layout),
    [Spacing, Fonts, Layout, Colors],
  );

  const navigateTo = useCallback(
    (item: QuickActionItem) => () => {
      // navigation.navigate(item.navigateTo);
    },
    [],
  );

  return (
    <View style={styles.sectionStyle}>
      <Text style={styles.sectionHeading}>Quick Actions </Text>
      <View style={styles.quickActionsWrapper}>
        {DashboardQuickActionsDummyData.map((item, index) => (
          <QuickActionCard
            data={item}
            onPress={navigateTo(item)}
            key={index.toString()}
          />
        ))}
      </View>
    </View>
  );
};
const stylesFn = (
  Spacing: ThemeSpacing,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
) =>
  StyleSheet.create({
    sectionStyle: {
      ...Spacing.mt4,
    },
    sectionHeading: {
      ...Fonts.font600,
      ...Fonts.sz14,
    },
    quickActionsWrapper: {
      ...Layout.flexRow,
      ...Layout.flexWrap,
      ...Spacing.mt3,
      ...Layout.justifyStart,
    },
  });

export default QuickActionsGrid;
