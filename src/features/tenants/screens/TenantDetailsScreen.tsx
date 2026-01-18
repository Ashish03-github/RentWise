import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { AppTabs, Container } from '@/common/components';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import TenantProfileHeader from '../components/TenantProfileHeader';
import TenantTabRenderer from '../components/TenantTabRenderer';

const TABS = ['Security Deposit', 'Payment History', 'Contact Details'];

const TenantDetailsScreen = () => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );

  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <Container
      screenHeading="Tenant Details"
      buttonLabel="End Lease"
      style={styles.safeArea}
    >
      <TenantProfileHeader />

      <AppTabs
        options={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <TenantTabRenderer activeTab={activeTab} />
    </Container>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    safeArea: {
      ...Layout.flex,
      ...Spacing.pb4,
    },
    card: {
      ...Spacing.p4,
      ...Colors.white,
      ...Layout.roundedLg,
      //   backgroundColor: 'red',
      //   ...Spacing.mb3,
    },
    sectionTitle: {
      ...Fonts.sz12,
      ...Fonts.font600,
      ...Colors.textBlack,
      ...Spacing.mb4,
    },
    depositRow: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Spacing.mb2,
    },
    depositLabel: {
      ...Fonts.sz11,
      ...Fonts.font500,
    },
    depositAmount: {
      ...Fonts.sz11,
      ...Fonts.font600,
    },
    paymentItem: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.alignCenter,
      ...Spacing.py3,
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.05)',
    },
    paymentLeft: {
      ...Layout.flexRow,
      ...Layout.alignCenter,
    },
    paymentAmount: {
      ...Fonts.sz11,
      ...Fonts.font500,
      ...Colors.textBlack,
      ...Spacing.mr3,
    },
    paymentMethod: {
      ...Fonts.sz9,
      ...Fonts.font500Italic,
      ...Colors.textBlack,
      backgroundColor: '#F0F0F0',
      ...Spacing.px4,
      ...Spacing.py0,
      ...Layout.rounded,
    },
    paymentDate: {
      ...Fonts.sz10,
      ...Fonts.font400,
    },
    endLeaseButton: {
      ...Layout.flexRow,
      ...Layout.center,
      ...Spacing.p3,
      ...Layout.roundedLg,
    },
    endLeaseIcon: {
      marginRight: 8,
      transform: [{ rotate: '180deg' }],
    },
    endLeaseText: {
      ...Colors.textWhite,
      ...Fonts.sz12,
      ...Fonts.font500,
    },
  });

export default TenantDetailsScreen;
