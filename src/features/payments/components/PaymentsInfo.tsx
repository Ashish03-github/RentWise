import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import { AppIcon, GradientView } from '@/common/components';
import { scale } from '@/theme/scale';
import {
  COLLECTED_GRADIENT,
  PENDING_GRADIENT,
  PROPERIY_GRADIENT,
  TENANTS_GRADIENT,
} from '@/features/dashboard/constants';
import { paymentsInfoDummyData } from '../constants/payments.dummy.data';
import { Icons } from '../assets/payments.icons';

const PaymentsInfo = () => {
  const { Spacing, Colors, Layout, Fonts } = useTheme();
  const styles = useMemo(
    () => stylesFn(Colors, Layout, Spacing, Fonts),
    [Colors, Layout, Spacing, Fonts],
  );

  const calculateCardColors = useCallback((i: number) => {
    const colors = {
      0: COLLECTED_GRADIENT,
      1: PENDING_GRADIENT,
      2: PROPERIY_GRADIENT,
      3: TENANTS_GRADIENT,
    };

    return colors[i];
  }, []);
  return (
    <View style={styles.container}>
      {paymentsInfoDummyData.map((item, i) => (
        <GradientView
          colors={calculateCardColors(i)}
          styles={styles.cardContainer}
        >
          <View style={styles.iconContainer}>
            <View style={styles.cardIconContainer}>
              <AppIcon type="fontAwesome6" name={item.cardIcon} size={12} />
            </View>
          </View>
          <View style={styles.cardDetailsContainer}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.cardText}
            >
              {item.cardHeading}
            </Text>
            <View style={styles.amountContainer}>
              <AppIcon
                size={13}
                type="fontAwesome6"
                name={Icons.rupee}
                color={Colors.whitePure}
              />
              <Text style={styles.cardHeading}>{item.cardText}</Text>
            </View>
          </View>
        </GradientView>
      ))}
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
  Fonts: ThemeFonts,
) =>
  StyleSheet.create({
    container: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
    },
    cardContainer: {
      width: '32%',
      //   ...Spacing.m1,
      ...Spacing.p2,
      ...Layout.flexRow,
      ...Layout.roundedLg,
      // elevation: 2,
      ...Spacing.py3,
    },
    iconContainer: { flex: 3 },
    cardIconContainer: {
      width: scale(24),
      height: scale(24),
      borderRadius: scale(40),
      ...Colors.white,
      ...Layout.center,
    },
    cardDetailsContainer: {
      flex: 7,
    },
    cardText: {
      ...Fonts.sz13,
      ...Fonts.font600,
      ...Colors.textWhite,
    },
    cardHeading: {
      ...Fonts.sz12,
      ...Fonts.font500Italic,
      ...Colors.textWhite,
      marginLeft: scale(5),
    },
    amountContainer: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },
  });
export default PaymentsInfo;
