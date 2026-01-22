import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import React, { useCallback } from 'react';
import { AppImage, CircularButton, Container } from '@/common/components';
import {
  DUMMY_USER,
  tenantsData,
} from '@/features/tenants/constants/tenants.dummy.data';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import useTheme from '@/common/hooks/useTheme';
import { TenantItem } from '@/features/tenants/types/tenant.components.type';
import { ChatsRoutes } from '@/navigation/routes';

const ChatsListing = () => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const renderItem = useCallback(
    ({ item }: { item: TenantItem }) => (
      <Pressable style={styles.tenantItemContainer}>
        <View style={styles.tenantImageContainer}>
          <AppImage
            uri={DUMMY_USER}
            resizeMode="cover"
            imageStyle={styles.imageStyle}
          />
        </View>
        <View style={styles.tenantDetailsContainer}>
          <Text style={styles.tenantName} numberOfLines={1}>
            {item.tenantName}
          </Text>
          <Text numberOfLines={1} style={styles.leaseDateText}>
            You: Hi, ashish I'm waiting for the rent of current month.
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Yesterday</Text>
        </View>
      </Pressable>
    ),
    [],
  );
  return (
    <Container screenHeading={'Chats'}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={tenantsData}
          renderItem={renderItem}
          initialNumToRender={12}
          removeClippedSubviews={true}
        />

        <CircularButton nextToScreen={ChatsRoutes.messages} />
      </View>
    </Container>
  );
};

export default ChatsListing;

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    tenantItemContainer: {
      ...Layout.fullWidth,
      ...Layout.flexRow,
      ...Colors.white,
      borderRadius: scale(12),
      ...Spacing.p3,
      ...Spacing.my2,
      ...Colors.white,
    },
    tenantImageContainer: {
      width: scale(45),
      height: scale(45),
      borderRadius: scale(50),
      overflow: 'hidden',
      marginRight: scale(12),
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      borderRadius: scale(10),
    },
    tenantDetailsContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    tenantName: {
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
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: scale(2),
    },
    leaseDateText: {
      ...Fonts.font500,
      ...Fonts.sz8,
      ...Colors.textBlack,
      // marginLeft: scale(4),
    },
    statusContainer: {
      // ...Layout.center,
      // minWidth: scale(70),
    },
    statusBadge: {
      ...Spacing.px4,
      ...Spacing.py1,
      borderRadius: scale(12),
      ...Layout.center,
    },
    occupiedBadge: {
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
    },
    vacantBadge: {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
    statusText: {
      ...Fonts.font500,
      ...Fonts.sz9,
      ...Colors.textSecondary,
    },
    occupiedText: {
      color: '#22C55E',
    },
    vacantText: {
      color: '#EF4444',
    },
    bookedBadge: {
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
    },
    bookedText: {
      color: '#FBBF24',
    },
    removedBadge: {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
    removedText: {
      color: '#EF4444',
    },
    editButton: {
      position: 'absolute',
      right: scale(6),
      bottom: scale(0),
      ...Spacing.px3,
      paddingVertical: scale(6),
      ...Layout.rounded,
      ...Colors.primaryLight1,
      ...Layout.center,
    },
  });
