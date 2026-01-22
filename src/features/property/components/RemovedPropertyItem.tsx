import React, { useCallback } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';
import { AppIcon, AppImage } from '@/common/components';
import { BUILDING_IMAGE } from '../constants/properties.dummy.data';
import { commonIcons } from '@/common/constants/commonIcons';
import { PropertyHistoryItem } from '../store/properties.slice';
import { useNavigation } from '@react-navigation/native';
import { PropertyRoutes } from '@/navigation/routes';
import { useAppDispatch } from '@/store/hooks';
import { setActivePropertyId } from '../store/properties.slice';

type RemovedPropertyItemProps = {
  item: PropertyHistoryItem;
};

const RemovedPropertyItem: React.FC<RemovedPropertyItemProps> = ({ item }) => {
  const property = item.snapshot;
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const navigateToDetails = useCallback(() => {
    dispatch(setActivePropertyId(property.id || ''));
    navigation.navigate(PropertyRoutes.propertyDetails);
  }, [dispatch, navigation, property.id]);

  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  return (
    <Pressable onPress={navigateToDetails} style={styles.propertyItemContainer}>
      <View style={styles.propertyImageContainer}>
        <AppImage
          uri={property.image || BUILDING_IMAGE}
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
          {property.propertyName}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.propertyAddress}
        >
          {property.propertyAddress}
        </Text>
        <View style={styles.propertyTypeContainer}>
          <AppIcon name="house" size={12} />
          <Text numberOfLines={1} style={styles.propertyType}>
            {property.propertyType}
          </Text>
        </View>
      </View>
      <View style={styles.propertyStatusAndAmountContainer}>
        <View style={styles.removedPill}>
          <Text style={styles.removedText}>Removed</Text>
        </View>
        <View style={styles.propertyRentContainer}>
          <Text style={styles.propertyRentText}>
            {commonIcons.rupees} {property.propertyRent}/
            {property.rentRecurrence}
          </Text>
        </View>
      </View>
    </Pressable>
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
      ...Spacing.p2,
      ...Spacing.mb3,
      ...Colors.white,
      borderRadius: scale(10),
      // ...Spacing.mb4,
    },
    propertyTypeContainer: {
      width: scale(90),
      ...Spacing.px3,
      ...Spacing.py1,
      ...Layout.roundedMd,
      ...Colors.primaryLight1,
      ...Layout.justifyCenter,
      ...Layout.flexRow,
      ...Colors.primaryLight1,
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
      width: scale(50),
      height: scale(50),
      borderRadius: scale(10),
      overflow: 'hidden',
      marginRight: scale(12),
    },
    imageStyle: {
      ...Layout.fullWidth,
      ...Layout.fullHeight,
      borderRadius: scale(10),
    },
    propertyDetailsContainer: {
      flex: 0.5,
      ...Layout.justifyCenter,
      // backgroundColor: 'yellow',
    },
    propertyStatusAndAmountContainer: {
      flex: 0.5,
      ...Layout.justifyCenter,
      ...Layout.alignEnd,
      // backgroundColor: 'red',
    },
    editButton: {
      position: 'absolute',
      // top: scale(6),
      right: scale(6),
      bottom: scale(0),
      // width: scale(26),
      // height: scale(26),
      ...Spacing.px3,
      paddingVertical: scale(6),
      ...Layout.rounded,
      ...Colors.primaryLight1,
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
    container: {
      ...Layout.fullWidth,
      ...Layout.flexRow,
      ...Spacing.p2,
      ...Spacing.mb3,
      ...Colors.white,
      borderRadius: scale(10),
    },
    imageContainer: {
      width: scale(50),
      height: scale(50),
      borderRadius: scale(10),
      overflow: 'hidden',
      marginRight: scale(12),
    },
    // imageStyle: {
    //   ...Layout.fullWidth,
    //   ...Layout.fullHeight,
    //   borderRadius: scale(10),
    // },
    detailsContainer: {
      ...Layout.flex,
      ...Layout.justifyCenter,
    },
    name: {
      ...Fonts.font600,
      ...Fonts.sz12,
    },
    address: {
      ...Fonts.font400Italic,
      ...Fonts.sz10,
      ...Colors.textSecondary,
    },
    metaRow: {
      ...Layout.flexRow,
      ...Layout.center,
      ...Spacing.mt2,
    },
    typePill: {
      ...Spacing.px3,
      ...Spacing.py1,
      ...Layout.roundedMd,
      ...Colors.primaryLight1,
      ...Layout.justifyCenter,
      ...Layout.flexRow,
      ...Layout.alignCenter,
      maxWidth: scale(160),
    },
    typeText: {
      ...Fonts.font500,
      ...Fonts.sz8,
      ...Colors.textBlack,
      ...Spacing.ml1,
    },
    removedPill: {
      paddingHorizontal: scale(10),
      paddingVertical: scale(4),
      borderRadius: scale(12),
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
    removedText: {
      ...Fonts.font500,
      ...Fonts.sz9,
      color: '#EF4444',
    },
    bottomRow: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      ...Spacing.mt2,
    },
    rentText: {
      ...Fonts.font600Italic,
      ...Fonts.sz10,
      ...Colors.textBlack,
    },
    dateText: {
      ...Fonts.font500Italic,
      ...Fonts.sz8,
      ...Colors.textSecondary,
    },
  });

export default RemovedPropertyItem;
