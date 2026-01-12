import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import { scale, scaleVertical } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { AppIcon } from '@/common/components';
import { QuickActionCardProps } from '../types/components.type';

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  data,
  key,
  onPress,
}) => {
  const { iconName, actionName } = data;
  const { Spacing, Fonts, Layout, Colors } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Spacing, Fonts, Layout, Colors),
    [Spacing, Fonts, Layout, Colors],
  );
  return (
    <Pressable onPress={onPress} key={key} style={styles.actionCard}>
      <View style={styles.quickActionIconContainer}>
        <AppIcon size={20} color={Colors.primaryPure} name={iconName} />
      </View>
      <Text style={styles.quickActionText}>{actionName}</Text>
    </Pressable>
  );
};

const stylesFn = (
  Spacing: ThemeSpacing,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Colors: ThemeColors,
) =>
  StyleSheet.create({
    actionCard: {
      width: '22%',
      ...Colors.primaryLight2,
      //   ...Spacing.ml2,
      ...Layout.roundedMd,
      height: scaleVertical(75),
      ...Layout.center,
      margin: scale(5),
    },
    quickActionIconContainer: {
      width: scale(40),
      height: scale(40),
      borderRadius: scale(40),
      ...Colors.white,
      ...Layout.center,
    },
    quickActionText: {
      ...Fonts.font600,
      ...Fonts.sz9,
      ...Spacing.mt2,
    },
  });

export default QuickActionCard;
