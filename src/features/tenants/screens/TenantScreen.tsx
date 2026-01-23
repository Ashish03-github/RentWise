import React from 'react';
import { CircularButton, Container, AppIcon } from '@/common/components';
import TenantsList from '../components/TenantsList';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { TenantRoutes } from '@/navigation/routes';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@/store/hooks';
import { selectRemovedTenants } from '../store/tenants.selectors';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';

const TenantScreen = () => {
  const navigation = useNavigation<any>();
  const removedTenants = useAppSelector(selectRemovedTenants);
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const hasRemovedTenants = removedTenants.length > 0;

  return (
    <Container screenHeading={'Tenants'}>
      <View style={styles.container}>
        {hasRemovedTenants && (
          <Pressable
            onPress={() => navigation.navigate(TenantRoutes.tenantHistory)}
            style={styles.historyChip}
          >
            <AppIcon type="fontAwesome6" name="clock-rotate-left" size={14} />
            <Text style={styles.historyChipText}>Removed</Text>
          </Pressable>
        )}
        <TenantsList />
        <CircularButton nextToScreen={TenantRoutes.addTenant} />
      </View>
    </Container>
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
      flex: 1,
    },
    historyChip: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      alignSelf: 'flex-end',
      ...Spacing.px4,
      ...Spacing.py2,
      ...Spacing.mb3,
      ...Layout.roundedLg,
      ...Colors.primaryLight1,
    },
    historyChipText: {
      ...Fonts.font500,
      ...Fonts.sz10,
      ...Colors.textBlack,
      ...Spacing.ml2,
    },
  });

export default TenantScreen;
