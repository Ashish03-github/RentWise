import React from 'react';
import { AppIcon, Container } from '@/common/components';
import PropertyList from '../components/PropertyList';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { scale } from '@/theme/scale';
import useTheme from '@/common/hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { PropertyRoutes } from '@/navigation/routes';

const PropertyScreen = () => {
  const navigation = useNavigation();

  const { Colors, Fonts, Layout } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Layout),
    [Colors, Fonts, Layout],
  );

  const showFormModal = () => {
    navigation.navigate(PropertyRoutes.addProperty);
  };
  return (
    <Container screenHeading={'Properties'}>
      <View style={styles.container}>
        <PropertyList />

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

export default PropertyScreen;
