import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import QuickActionCard from './QuickActionCard';
import { ThemeLayout } from '@/theme/layout';
import { DashboardQuickActionsDummyData } from '../constants/dummyData';

const QuickActionsGrid = () => {
  const { Spacing, Fonts, Layout, Colors } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Spacing, Fonts, Layout),
    [Spacing, Fonts, Layout, Colors],
  );

  return (
    <View style={styles.sectionStyle}>
      <Text style={styles.sectionHeading}>Quick Actions </Text>

      <View style={styles.quickActionsWrapper}>
        {DashboardQuickActionsDummyData.map((item, index) => (
          <QuickActionCard data={item} key={index.toString()} />
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
