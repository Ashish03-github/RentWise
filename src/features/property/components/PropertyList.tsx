import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useCallback } from 'react';
import { propertiesData } from '../constants/properties.dummy.data';
import PropertyItem from './PropertyItem';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { AppIcon } from '@/common/components';
import { scale } from '@/theme/scale';

const PropertyList = () => {
  const { Colors, Fonts, Layout } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout),
    [Colors, Fonts, Layout],
  );

  const renderItem = useCallback(
    ({ item, index }: { item: PropertyItem; index: number }) => {
      return <PropertyItem item={item} key={index} />;
    },
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={propertiesData}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
      />

      <TouchableOpacity activeOpacity={0.9} style={styles.plusButton}>
        <AppIcon name="add" size={22} color={Colors.whitePure} />
      </TouchableOpacity>
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
) =>
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

export default PropertyList;
