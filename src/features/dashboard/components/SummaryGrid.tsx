import { StyleSheet, View } from 'react-native';
import React from 'react';
import SummaryCard from './SummaryCard';
import useTheme from '@/common/hooks/useTheme';
import { ThemeLayout } from '@/theme/layout';
import { DashboardSummaryDummyData } from '../constants/dummyData';

const SummaryGrid = () => {
  const { Layout } = useTheme();
  const styles = React.useMemo(() => stylesFn(Layout), [Layout]);

  return (
    <View style={styles.cardWrapper}>
      {DashboardSummaryDummyData.map((item, index) => (
        <SummaryCard cardItem={item} key={index} cardType={`${index}`} />
      ))}
    </View>
  );
};

const stylesFn = (Layout: ThemeLayout) =>
  StyleSheet.create({
    cardWrapper: {
      // ...Layout.flex,
      ...Layout.flexRow,
      ...Layout.flexWrap,
      ...Layout.justifyBetween,
    },
  });
export default SummaryGrid;
