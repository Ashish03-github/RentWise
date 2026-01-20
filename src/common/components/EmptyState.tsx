import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import AppIcon from './AppIcon';

type EmptyStateProps = {
  message: string;
  icon: string;
  color?: string;
};
const EmptyState = ({
  message,
  color = '#1F75EC',
  icon = 'question',
}: EmptyStateProps) => {
  const { Fonts, Layout, Colors, Spacing } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          ...Layout.flex,
          ...Layout.center,
        },
        text: {
          ...Fonts.sz11,
          ...Fonts.font500,
          ...Colors.textBlack,
          ...Spacing.mt3,
        },
      }),
    [Fonts, Layout, Colors],
  );

  return (
    <View style={styles.container}>
      <AppIcon type="fontAwesome6" name={icon} color={color} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default React.memo(EmptyState);
