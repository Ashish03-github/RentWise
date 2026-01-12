import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { useNavigation } from '@react-navigation/native';
import useTheme from '../hooks/useTheme';
import AppIcon from './AppIcon';

type CircularAddButtonProps = {
  nextToScreen: string;
};
const CircularAddButton: React.FC<CircularAddButtonProps> = ({
  nextToScreen,
}) => {
  const navigation = useNavigation();
  const { Colors, Fonts, Layout } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Layout),
    [Colors, Fonts, Layout],
  );

  const navigateTo = () => {
    navigation.navigate(nextToScreen);
  };

  return (
    <TouchableOpacity
      onPress={navigateTo}
      activeOpacity={0.9}
      style={styles.plusButton}
    >
      <AppIcon name="add" size={22} color={Colors.whitePure} />
    </TouchableOpacity>
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
      bottom: scale(20),
      right: 0,
      borderRadius: scale(28),
      ...Colors.primary,
      ...Layout.center,
    },
  });
export default CircularAddButton;
