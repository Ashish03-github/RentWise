import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';
import HistoryList from './HistoryList';
import HistoryItem from './HistoryItem';
import { AppTabs } from '@/common/components';
import { TenantItem } from '@/features/tenants/types/tenant.components.type';
import { payments } from '@/features/payments/constants/payments.dummy.data';
import PaymentHistoryItem from '@/features/payments/components/PaymentHistoryItem';

const TABS = ['Overview', 'Tenant', 'Tenant History', 'Rent History'];

const OVERVIEW_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse.
`;

const TENANT_DATA: TenantItem = {
  image:
    'https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas.jpg',
  propertyName: 'Room Number 2',
  propertyAddress: 'Shillgaon, Khopoli, Maharashtra',
  propertyType: 'Room',
  propertyStatus: 'Occupied',
  propertyRent: 4000,
  propertyDeposite: 7000,
  propertyRentRecurrence: 'Monthly',
  tenantImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4H7mPnTLV9rtqZ7_W5NeAhudM0OXP3UNNQ&s',
  tenantName: 'Sarfaraz Ahmad',
  leaseStartDate: '01 March 2025',
  leaseEndDate: '01 March 2026',
};
const PropertyDetailsCard = () => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const [activeTab, setActiveTab] = React.useState(TABS[0]);

  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const getActiveTabDetails = useCallback((tab: string) => {
    let activeComponent = <></>;
    switch (tab) {
      case 'Overview':
        activeComponent = (
          <Text style={styles.descriptionText}>{OVERVIEW_TEXT}</Text>
        );
        break;
      case 'Tenant':
        activeComponent = <HistoryItem item={TENANT_DATA} key={0} />;
        break;
      case 'Tenant History':
        activeComponent = <HistoryList />;
        break;
      case 'Rent History':
        activeComponent = (
          <>
            {payments.map(payment => (
              <PaymentHistoryItem key={payment.id} payment={payment} />
            ))}
          </>
        );
        break;

      default:
        return (activeComponent = (
          <Text style={styles.descriptionText}>{OVERVIEW_TEXT}</Text>
        ));
    }
    return activeComponent;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppTabs
        options={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {getActiveTabDetails(activeTab)}
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
    tabContainer: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.rounded,
      ...Spacing.mt3,
    },

    tabItem: {
      paddingHorizontal: scale(10),
    },

    activeTabItem: {
      borderBottomWidth: scale(2),
      borderBottomColor: Colors.primaryPure,
    },

    tabText: {
      ...Fonts.sz10,
      ...Fonts.font600,
      ...Colors.inputFiledTextColor,
    },

    descriptionText: {
      ...Fonts.sz10,
      ...Fonts.font500,
      lineHeight: scale(20),
    },

    activeTabText: {
      ...Fonts.font600,
      color: Colors.primaryPure,
    },

    contentText: {
      ...Fonts.sz12,
      ...Fonts.font500,
      ...Colors.textBlack,
    },
  });

export default PropertyDetailsCard;
