import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useCallback, useMemo } from 'react';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import useTheme from '@/common/hooks/useTheme';
import { formatDate } from '@/utils/utils.helper';
import {
  PaymentItemProps,
  PaymentStatus,
} from '../types/payments.components.type';
import { AppImage } from '@/common/components';
import { STATUS_UI_MAP } from '../constants/payments.dummy.data';
import { useNavigation } from '@react-navigation/native';
import { PaymentRoutes } from '@/navigation/routes';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectPaymentById } from '../store/payment.slice';
import { selectProperties } from '@/features/property/store/properties.selectors';

const PaymentItem: React.FC<PaymentItemProps> = ({ item, index }) => {
  const {
    id,
    tenantName,
    propertyId,
    tenantImage,
    paymentstatus,
    fromDate,
    toDate,
  } = item;

  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const properites = useAppSelector(selectProperties);
  const selectedProperty = useMemo(
    () => properites.find(p => p.id === propertyId),
    [propertyId],
  );

  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const statusConfig =
    STATUS_UI_MAP[paymentstatus as PaymentStatus] ?? STATUS_UI_MAP.Pending;

  const navigateTo = useCallback(() => {
    dispatch(selectPaymentById({ id: id }));
    navigation.navigate(PaymentRoutes.paymentDetails);
  }, []);

  return (
    <Pressable
      onPress={navigateTo}
      key={index}
      style={styles.paymentItemContainer}
    >
      <View style={styles.paymentImageContainer}>
        <AppImage
          uri={tenantImage}
          resizeMode="cover"
          imageStyle={styles.imageStyle}
        />
      </View>

      <View style={styles.paymentDetailsContainer}>
        <Text style={styles.paymentName} numberOfLines={1}>
          {tenantName}
        </Text>
        <Text style={styles.propertyName} numberOfLines={1}>
          {selectedProperty?.propertyName}
        </Text>
        <Text style={styles.leaseDateText}>
          {formatDate(fromDate)} - {formatDate(toDate)}
        </Text>
      </View>

      <View style={styles.statusContainer}>
        {/* {(paymentstatus === 'Partial' || paymentstatus === 'Paid') && (
          <View style={styles.amountRow}>
            <AppIcon type="fontAwesome6" name={Icons.rupee} size={12.5} />
            <Text style={styles.amountText}>{paidAmount}</Text>
          </View>
        )} */}

        <View style={[styles.statusBadge, statusConfig.badgeStyle]}>
          <Text style={[styles.statusText, statusConfig.textStyle]}>
            {statusConfig.label}
          </Text>
        </View>

        {/* {paymentstatus !== 'Paid' && (
          <View style={styles.lateInfoRow}>
            <AppIcon
              type="fontAwesome6"
              name="clock"
              size={8}
              color={Colors.pureLightOrange}
            />
            <Text style={styles.rentInfoText}>
              {paymentstatus === 'Pending'
                ? `${daysLate} days late`
                : partialAmount
                ? `${partialAmount} due`
                : ''}
            </Text>
          </View>
        )} */}
      </View>
    </Pressable>
  );
};

export default PaymentItem;

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    paymentItemContainer: {
      ...Layout.fullWidth,
      ...Layout.flexRow,
      ...Colors.white,
      borderRadius: scale(12),
      ...Spacing.p3,
      ...Spacing.mb3,
      ...Colors.white,
    },
    paymentImageContainer: {
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
    paymentDetailsContainer: {
      ...Layout.flex,
      ...Layout.justifyCenter,
    },
    paymentName: {
      ...Fonts.font600,
      ...Fonts.sz12,
      ...Colors.textBlack,
      marginBottom: scale(2),
    },
    propertyName: {
      ...Fonts.font400,
      ...Fonts.sz10,
      ...Colors.textSecondary,
      marginBottom: scale(4),
    },
    leaseDateContainer: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      marginTop: scale(2),
    },
    leaseDateText: {
      ...Fonts.font500Italic,
      ...Fonts.sz8,
      ...Colors.textBlack,
    },
    statusContainer: {
      ...Layout.center,
      minWidth: scale(70),
    },
    statusBadge: {
      minWidth: scale(70),
      ...Spacing.py1,
      borderRadius: scale(12),
      ...Layout.center,
    },
    statusText: {
      ...Fonts.font500,
      ...Fonts.sz8,
    },
    occupiedBadge: {
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
    },
    vacantBadge: {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
    occupiedText: {
      color: '#22C55E',
    },
    vacantText: {
      color: '#EF4444',
    },

    amountRow: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },

    amountText: {
      ...Fonts.font600,
      ...Fonts.sz11,
      ...Colors.textBlack,
      ...Spacing.ml1,
    },

    lateInfoRow: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
      ...Spacing.mt1,
      // position: 'absolute',
    },

    rentInfoText: {
      ...Fonts.font500,
      ...Fonts.sz8,
      ...Colors.textSecondary,
      ...Spacing.ml1,
    },
  });
