import React from 'react';
import { AppIcon, Container } from '@/common/components';
import PropertyList from '../components/PropertyList';
import AddPropertyForm from '../components/AddPropertyForm';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { scale } from '@/theme/scale';
import useTheme from '@/common/hooks/useTheme';

const PropertyScreen = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const { Colors, Fonts, Layout } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Layout),
    [Colors, Fonts, Layout],
  );

  const handFormPress = () => {
    setIsVisible(false);
  };

  const showFormModal = () => {
    setIsVisible(true);
  };
  return (
    <Container
      showModal={isVisible}
      modalComponent={
        <AddPropertyForm onPress={handFormPress} onCancel={handFormPress} />
      }
      screenHeading={'Properties'}
    >
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
