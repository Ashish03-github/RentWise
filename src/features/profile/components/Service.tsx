import { View, Text, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import { scale, scaleVertical } from '@/theme/scale';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { AppIcon } from '@/common/components';

type ServiceProps = {
  item: {
    serviceIcon: string;
    serviceName: string;
    nextIcon: string;
    onPress: () => void;
  };
};
const Service: React.FC<ServiceProps> = ({ item }) => {
  const { serviceIcon, serviceName, nextIcon, onPress } = item;
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );
  return (
    <View style={styles.container}>
      <View style={styles.serviceIconContainer}>
        <View style={styles.serviceIcon}>
          <AppIcon
            size={18}
            name={serviceIcon}
            type="fontAwesome6"
            color={Colors.blackPure}
          />
        </View>
      </View>
      <View style={styles.serviceNameContainer}>
        <Text style={styles.serviceName}>{serviceName}</Text>
      </View>
      <View style={styles.serviceArrowContainer}>
        <AppIcon
          size={12}
          type="fontAwesome6"
          name={nextIcon}
          color={Colors.lightGrayPure}
        />
      </View>
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    container: {
      //   ...Colors.red,
      ...Spacing.my1,
      ...Layout.fullWidth,
      ...Layout.rounded,
      ...Layout.flexRow,
      minHeight: scaleVertical(48),
    },
    serviceIconContainer: {
      flex: 0.15,
      ...Layout.center,
    },
    serviceIcon: {
      width: scale(34),
      height: scale(34),
      borderRadius: scaleVertical(30),
      ...Colors.primaryLight1,
      ...Layout.center,
    },
    serviceNameContainer: {
      flex: 0.75,
      ...Spacing.pl1,
      ...Layout.justifyCenter,
    },
    serviceName: {
      ...Fonts.sz12,
      ...Fonts.font500,
    },
    serviceArrowContainer: {
      flex: 0.1,
      ...Layout.center,
    },
  });

export default Service;
