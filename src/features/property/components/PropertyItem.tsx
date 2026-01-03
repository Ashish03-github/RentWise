import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { scale, scaleVertical } from '@/theme/scale';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { AppIcon, AppImage } from '@/common/components';
import { ThemeSpacing } from '@/theme/spacing';

type PropertyItemProps = {
  item: PropertyItem;
  key: number;
};

const PropertyItem: React.FC<PropertyItemProps> = ({ item, key }) => {
  const {
    image,
    propertyName,
    propertyAdress,
    propertyRent,
    propertySatus,
    propertyType,
    propertyRentReccurance,
  } = item;
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout],
  );
  return (
    <View key={key} style={styles.propertyItemContainer}>
      <View style={styles.propertyImageContainer}>
        <AppImage
          uri={image}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
        />
      </View>
      <View style={styles.propertyDetailsContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.propertyName}
        >
          {propertyName}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.propertyAddress}
        >
          {propertyAdress}
        </Text>
        <View style={styles.propertyTypeContainer}>
          <AppIcon name="house" size={12} />
          <Text style={styles.propertyType}>{propertyType}</Text>
        </View>
      </View>
      <View style={styles.propertyStatusAndAmountContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.propertyStatusButton}
        >
          <Text style={styles.propertyStatusText}>{propertySatus}</Text>
        </TouchableOpacity>
        <View style={styles.propertyRentContainer}>
          <AppIcon size={12} name="currency-rupee" />
          <Text style={styles.propertyRentText}>
            {propertyRent}/{propertyRentReccurance}
          </Text>
        </View>
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
    propertyItemContainer: {
      ...Layout.fullWidth,
      ...Layout.flexRow,
      paddingVertical: scaleVertical(10),
      paddingHorizontal: scale(10),
      ...Colors.primaryLight2,
      borderRadius: scale(10),
      ...Spacing.mb4,
      // height: scaleVertical(0),
    },
    propertyTypeContainer: {
      width: scale(60),
      paddingHorizontal: scale(6),
      paddingVertical: scale(3),
      borderRadius: scale(6),
      ...Colors.primaryLight1,
      ...Layout.justifyCenter,
      ...Layout.flexRow,
      ...Colors.white,
      ...Spacing.mt2,
    },
    propertyName: {
      ...Fonts.font600,
      ...Fonts.sz12,
    },
    propertyAddress: {
      ...Fonts.font400Italic,
      ...Fonts.sz10,
      ...Colors.textSecondary,
    },
    propertyType: {
      ...Fonts.font500,
      ...Fonts.sz8,
      ...Colors.textBlack,
      ...Spacing.ml1,
    },
    propertyImageContainer: {
      flex: 0.25,
      ...Layout.justifyCenter,
      // backgroundColor: 'red',
    },
    imageStyle: {
      width: scale(70),
      height: scale(70),
      borderRadius: scale(10),
    },
    propertyDetailsContainer: {
      flex: 0.5,
      ...Layout.justifyCenter,
      // backgroundColor: 'yellow',
    },
    propertyStatusAndAmountContainer: {
      flex: 0.25,
      ...Layout.center,
    },
    propertyStatusButton: {
      width: scale(72),
      minHeight: scale(25),
      ...Layout.roundedMd,
      ...Layout.center,
      ...Colors.green,
    },
    propertyStatusText: {
      ...Fonts.font500,
      ...Fonts.sz8,
      ...Colors.textWhite,
    },
    propertyRentText: {
      ...Fonts.font600Italic,
      ...Fonts.sz10,
      ...Colors.textBlack,
    },
    propertyRentContainer: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Spacing.pt4,
    },
  });

export default PropertyItem;
