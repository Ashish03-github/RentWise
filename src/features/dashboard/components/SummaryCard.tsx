import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import { AppIcon, GradientView } from '@/common/components';
import {
  COLLECTED_GRADIENT,
  PENDING_GRADIENT,
  PROPERIY_GRADIENT,
  TENANTS_GRADIENT,
} from '../constants';
import { ThemeColors } from '@/theme/colors';
import useTheme from '@/common/hooks/useTheme';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';
import { CardType, SummaryCardProps } from '../types/components.type';

const SummaryCard: React.FC<SummaryCardProps> = ({ cardType, cardItem }) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();

  const styles = useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const calculateCardColors = useCallback(() => {
    const colors: Record<CardType, string[]> = {
      '0': COLLECTED_GRADIENT,
      '1': PENDING_GRADIENT,
      '2': PROPERIY_GRADIENT,
      '3': TENANTS_GRADIENT,
    };

    return colors[cardType];
  }, [cardType]);

  return (
    <GradientView colors={calculateCardColors()} styles={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <View style={styles.cardIconContainer}>
          <AppIcon type="fontAwesome6" name={cardItem.cardIcon} size={16} />
        </View>
      </View>
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.cardHeading}>{cardItem.cardHeading}</Text>
        <Text style={styles.cardText}>{cardItem.cardText}</Text>
        <Text style={styles.cardSubText}>{cardItem.cardSubText}</Text>
      </View>
    </GradientView>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    cardContainer: {
      width: '47.5%',
      ...Spacing.m1,
      ...Spacing.p3,
      ...Layout.flexRow,
      ...Layout.roundedLg,
      // elevation: 2,
      ...Spacing.py2,
    },
    iconContainer: { flex: 3.5 },
    cardIconContainer: {
      width: scale(32),
      height: scale(32),
      borderRadius: scale(40),
      ...Colors.white,
      ...Layout.center,
    },
    cardDetailsContainer: { flex: 6.5 },
    cardHeading: {
      ...Fonts.sz14,
      ...Fonts.font500,
      ...Colors.textWhite,
    },
    cardText: {
      ...Fonts.sz16,
      ...Fonts.font600Italic,
      ...Colors.textWhite,
    },
    cardSubText: {
      ...Fonts.sz10,
      ...Fonts.font500Italic,
      ...Colors.textWhite,
    },
  });

export default SummaryCard;
