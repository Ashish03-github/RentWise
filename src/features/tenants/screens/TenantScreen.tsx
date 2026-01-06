import React from 'react';
import { AppIcon, Container } from '@/common/components';
import TenantsList from '../components/TenantsList';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { scale } from '@/theme/scale';
import { TenantRoutes } from '@/navigation/routes';

const TenantScreen = () => {
  const navigation = useNavigation();

  const { Colors, Fonts, Layout } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Layout),
    [Colors, Fonts, Layout],
  );

  const showFormModal = () => {
    navigation.navigate(TenantRoutes.addTenant);
  };
  return (
    <Container screenHeading={'Tenants'}>
      <View style={styles.container}>
        <TenantsList />

        <TouchableOpacity
          onPress={showFormModal}
          activeOpacity={0.9}
          style={styles.plusButton}
        >
          <AppIcon name="add" size={22} color={Colors.whitePure} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const stylesFn = (Colors: ThemeColors, Layout: ThemeLayout) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    plusButton: {
      width: scale(56),
      height: scale(56),
      ...Layout.absolute,
      bottom: 0,
      right: 0,
      borderRadius: scale(28),
      ...Colors.primary,
      ...Layout.center,
    },
  });
export default TenantScreen;
