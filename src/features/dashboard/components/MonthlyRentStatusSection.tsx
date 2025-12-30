import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TenantRentItem from './TenantRentItem';
import { ThemeSpacing } from '@/theme/spacing';
import useTheme from '@/common/hooks/useTheme';
import { ThemeFonts } from '@/theme/fonts';
import { DashboardTenantsDummyData } from '../constants/dummyData';

const MonthlyRentStatusSection = () => {
  const { Spacing, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Spacing, Fonts),
    [Spacing, Fonts],
  );
  return (
    <View style={styles.sectionStyle}>
      <Text style={styles.sectionHeading}>Current Month Rent Status </Text>

      {DashboardTenantsDummyData.map((item, index) => (
        <TenantRentItem data={item} key={index.toString()} />
      ))}
    </View>
  );
};

const stylesFn = (Spacing: ThemeSpacing, Fonts: ThemeFonts) =>
  StyleSheet.create({
    sectionStyle: {
      ...Spacing.mt4,
      // ...Spacing.mb3,
    },
    sectionHeading: {
      ...Fonts.font600,
      ...Fonts.sz14,
    },
  });
export default MonthlyRentStatusSection;
