import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';

type Tenant = {
  name: string;
  property: string;
  leaseStart: string;
  leaseEnd: string;
  profileImage: string;
};

const TenantProfileCard = ({ tenant }: { tenant: Tenant }) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: tenant.profileImage }} style={styles.image} />
      </View>

      <View style={styles.details}>
        <Text style={styles.name}>{tenant.name}</Text>
        <Text style={styles.property}>{tenant.property}</Text>
        <Text style={styles.lease}>
          {tenant.leaseStart} - {tenant.leaseEnd}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(TenantProfileCard);

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    container: {
      ...Layout.flexRow,
      ...Spacing.py6,
      ...Colors.white,
      ...Layout.roundedXl,
      // marginBottom: 12,
    },
    imageWrapper: {
      flex: 0.3,
      ...Layout.center,
    },
    image: {
      width: scale(80),
      height: scale(80),
      borderRadius: scale(40),
    },
    details: {
      flex: 0.7,
      ...Layout.justifyCenter,
    },
    name: {
      ...Fonts.sz14,
      ...Fonts.font600,
      ...Colors.textBlack,
    },
    property: {
      ...Fonts.sz11,
      ...Fonts.font500,
      ...Colors.textSecondary,
      ...Spacing.mb1,
    },
    lease: {
      ...Fonts.sz11,
      ...Fonts.font400,
      ...Colors.inputFiledTextColor,
    },
  });
