import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import useTheme from '@/common/hooks/useTheme';
import AttentionItem from './AttentionItem';
import { DashboardAttentionDummyData } from '../constants/dummyData';

const NeedsAttentionSection = () => {
  const { Spacing, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Spacing, Fonts),
    [Spacing, Fonts],
  );
  return (
    <View style={styles.sectionStyle}>
      <Text style={styles.sectionHeading}>Need Attention </Text>
      {DashboardAttentionDummyData.map((item, index) => (
        <AttentionItem data={item} key={index.toString()} />
      ))}
    </View>
  );
};

const stylesFn = (Spacing: ThemeSpacing, Fonts: ThemeFonts) =>
  StyleSheet.create({
    sectionStyle: {
      ...Spacing.mt4,
      //   ...Spacing.mb3,
    },
    sectionHeading: {
      ...Fonts.font600,
      ...Fonts.sz14,
    },
  });

export default NeedsAttentionSection;
