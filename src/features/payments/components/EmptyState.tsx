import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '@/common/hooks/useTheme';

const EmptyState = ({ message }: { message: string }) => {
  const { Fonts, Layout, Colors } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          ...Layout.center,
          paddingVertical: 32,
        },
        text: {
          ...Fonts.sz10,
          ...Fonts.font400,
          ...Colors.textSecondary,
        },
      }),
    [Fonts, Layout, Colors],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default React.memo(EmptyState);
