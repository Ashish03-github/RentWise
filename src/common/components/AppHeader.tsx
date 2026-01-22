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
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ChatsRoutes } from '@/navigation/routes';

type AppHeaderProps = {
  heading?: string | null;
  isDashboard?: boolean;
};
const AppHeader: React.FC<AppHeaderProps> = ({ heading, isDashboard }) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const navigation = useNavigation();
  const drawerNavigation = useNavigation<DrawerNavigationProp<any>>();

  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <View style={styles.headerContainer}>
      {isDashboard ? (
        <View style={styles.dashboardHeadingWithIcon}>
          <AppIcon
            size={30}
            type="ionicons"
            name={ICONS.MENU}
            color={Colors.primaryPure}
            onPress={() => drawerNavigation.openDrawer()}
          />
          <Text style={styles.logoText}>RentWise</Text>
          <AppIcon type="octicons" name={ICONS.BELL} size={scale(20)} />
          <AppIcon
            type="ionicons"
            onPress={() => navigation.navigate(ChatsRoutes.chats)}
            name={ICONS.CHAT}
            size={scale(24)}
          />
        </View>
      ) : (
        <View style={styles.headingWithIconContainer}>
          <AppIcon
            size={30}
            type="ionicons"
            name={ICONS.MENU}
            color={Colors.primaryPure}
            onPress={() => drawerNavigation.openDrawer()}
          />
          <AppIcon
            type="ionicons"
            name={ICONS.back}
            style={{ ...Spacing.ml4 }}
            // color={Colors.lightGrayPure}
            onPress={() => navigation.goBack()}
          />
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
      ...Layout.justifyEnd,
      // height: scaleVertical(50),
      // backgroundColor: 'red',
    },
    logoText: {
      ...Fonts.font600,
      ...Fonts.sz27,
      ...Colors.textPrimary,
    },
    screenHeadingText: {
      ...Fonts.sz18,
      ...Fonts.font600,
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
