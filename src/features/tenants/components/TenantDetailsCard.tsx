import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback } from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';
import { AppTabs } from '@/common/components';
import SecurityDepositCard from './SecurityDepositCard';
import PaymentHistoryCard from './PaymentHistoryCard';
import ContactDetailsCard from './ContactDetailsCard';

const TABS = ['Security Deposit', 'Payment History', 'Contact Details'];

const TenantDetailsCard = () => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const [activeTab, setActiveTab] = React.useState(TABS[0]);

  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const getActiveTabDetails = useCallback((tab: string) => {
    let activeComponent = <></>;
    switch (tab) {
      case 'Security Deposit':
        activeComponent = <SecurityDepositCard />;
        break;
      case 'Payment History':
        activeComponent = <PaymentHistoryCard />;
        break;
      case 'Contact Details':
        activeComponent = <ContactDetailsCard />;
        break;
      default:
        activeComponent = <SecurityDepositCard />;
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

export default TenantDetailsCard;

