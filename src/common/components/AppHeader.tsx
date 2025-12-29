import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale, scaleVertical } from '@/theme/scale';
import AppIcon from './AppIcon';
import { ICONS } from '@/constants/icons';

type AppHeaderProps = {
  heading?: string | null;
  isDashboard?: boolean;
};
const AppHeader: React.FC<AppHeaderProps> = ({ heading, isDashboard }) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <View style={styles.headerContainer}>
      {isDashboard ? (
        <View style={styles.dashboardHeadingWithIcon}>
          <Text style={styles.logoText}>RentWise</Text>
          <AppIcon type="octicons" name={ICONS.BELL} size={scale(20)} />
        </View>
      ) : (
        <View style={styles.headingWithIconContainer}>
          <AppIcon type="ionicons" name={ICONS.back} />
          <Text style={styles.screenHeadingText}>{heading}</Text>
        </View>
      )}
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
    headerContainer: {
      ...Spacing.px4,
      ...Layout.justifyCenter,
      height: scaleVertical(40),
    },
    logoText: {
      ...Fonts.font600,
      ...Fonts.sz27,
      ...Colors.textPrimary,
    },
    screenHeadingText: {
      ...Fonts.sz20,
      ...Fonts.font500,
      ...Colors.textBlack,
      ...Spacing.ml3,
    },
    dashboardHeadingWithIcon: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      ...Spacing.pr3,
    },
    headingWithIconContainer: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },
  });

export default AppHeader;
