import React from 'react';
import { CircularButton, Container } from '@/common/components';
import PropertyList from '../components/PropertyList';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemeLayout } from '@/theme/layout';
import useTheme from '@/common/hooks/useTheme';
import { PropertyRoutes } from '@/navigation/routes';
import { useNavigation } from '@react-navigation/native';
import { AppIcon } from '@/common/components';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';

const PropertyScreen = () => {
  const { Layout, Colors, Fonts, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Layout, Colors, Fonts, Spacing),
    [Layout, Colors, Fonts, Spacing],
  );

  const navigation = useNavigation<any>();
  return (
    <Container screenHeading={'Properties'}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Pressable
            onPress={() => navigation.navigate(PropertyRoutes.propertyHistory)}
            style={styles.historyChip}
          >
            <AppIcon type="fontAwesome6" name="clock-rotate-left" size={14} />
            <Text style={styles.historyChipText}>Removed</Text>
          </Pressable>
        </View>
        <PropertyList />
        <CircularButton nextToScreen={PropertyRoutes.addProperty} />
      </View>
    </Container>
  );
};

const stylesFn = (
  Layout: ThemeLayout,
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
    },
    topRow: {
      ...Layout.fullWidth,
      ...Layout.flexRow,
      ...Layout.justifyEnd,
      ...Spacing.mb3,
    },
    historyChip: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Spacing.px4,
      ...Spacing.py2,
      borderRadius: scale(999),
      backgroundColor: 'rgba(59, 130, 246, 0.08)',
    },
    historyChipText: {
      ...Fonts.font500,
      ...Fonts.sz10,
      ...Colors.textBlack,
      ...Spacing.ml2,
    },
  });

export default PropertyScreen;
