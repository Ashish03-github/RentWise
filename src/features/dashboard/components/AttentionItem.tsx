import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { AppIcon } from '@/common/components';
import { Dashboard_Icons } from '../assets/icons';
import { AttentionItemProps } from '../types/components.type';

const AttentionItem: React.FC<AttentionItemProps> = ({ data, key }) => {
  const { tenantName, attentionReason, amount } = data;
  const { Spacing, Fonts, Colors, Layout } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Spacing, Fonts, Colors, Layout),
    [Spacing, Fonts],
  );

  return (
    <View key={key} style={styles.tenantRentItemContainer}>
      <View style={styles.tenantImageContainer}>
        <AppIcon
          size={40}
          type="ionicons"
          name={Dashboard_Icons.alert}
          color={Colors.pureLightOrange}
        />
      </View>
      <View style={styles.tenantDetailsContainer}>
        <View>
          <Text style={styles.tenantName}>{tenantName}</Text>
          <Text style={styles.propertyName}>{attentionReason}</Text>
        </View>
        <View style={styles.propertyRentContainer}>
          <AppIcon
            size={12}
            type={'fontAwesome6'}
            name={Dashboard_Icons.rupee}
          />
          <Text style={styles.propertyRent}>{amount}</Text>
        </View>
      </View>
    </View>
  );
};

const stylesFn = (
  Spacing: ThemeSpacing,
  Fonts: ThemeFonts,
  Colors: ThemeColors,
  Layout: ThemeLayout,
) =>
  StyleSheet.create({
    tenantRentItemContainer: {
      ...Layout.fullWidth,
      height: 50,
      ...Spacing.mt2,
      ...Layout.flexRow,
      borderBottomColor: Colors.lightGrayPure,
      borderBottomWidth: 0.2,
    },
    tenantImageContainer: {
      flex: 0.14,
      ...Layout.justifyCenter,
    },
    tenantImage: {
      width: scale(25),
      borderWidth: 0.8,
      height: scale(25),
      ...Layout.center,
      borderRadius: scale(20),
      borderColor: Colors.lightGrayPure,
    },
    tenantDetailsContainer: {
      flex: 0.86,
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      //   backgroundColor: 'red',
      ...Spacing.pr2,
    },
    tenantName: {
      ...Fonts.font600,
      ...Fonts.sz12,
    },
    propertyName: {
      ...Fonts.sz9,
      ...Fonts.font400Italic,
      ...Colors.textSecondary,
    },
    propertyRentContainer: {
      ...Layout.flexRow,
      ...Layout.center,
    },
    propertyRent: {
      ...Fonts.sz12,
      ...Fonts.font600,
      ...Spacing.ml1,
    },
    tenantRentStatusButtonContainer: {
      flex: 0.25,
      ...Layout.center,
    },
    rentStatusBadege: {
      width: scale(65),
      ...Layout.center,
      ...Spacing.py1,
      ...Layout.rounded3xl,
      //   ...Colors.lightRed,
    },
    rentStatusText: {
      ...Fonts.font500Italic,
      ...Fonts.sz8,
    },
  });

export default AttentionItem;
