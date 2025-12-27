import React, { useMemo } from 'react';
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useTheme from '../hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { Button } from '.';

type AppContainerProps = {
  children: React.ReactNode;
  noPadding?: boolean;
  style?: ViewStyle;
  backgroundColor?: string;
  buttonLabel?: string | null;
};

const AppContainer = ({
  style,
  children,
  backgroundColor,
  noPadding = false,
  buttonLabel = null,
}: AppContainerProps) => {
  const { Colors, Layout, Spacing } = useTheme();

  const styles = useMemo(
    () => stylesFn(Colors, Layout, Spacing),
    [Colors, Layout, Spacing, noPadding, backgroundColor],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.flex}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.container, style]}
        >
          {children}
        </ScrollView>
        {buttonLabel ? (
          <Button
            title={buttonLabel}
            onPress={() => {}}
            style={styles.buttonStyle}
          />
        ) : null}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    safeArea: {
      ...Layout.flex,
      ...Colors.background,
    },
    flex: {
      ...Layout.flex,
    },
    container: {
      flexGrow: 1,
      ...Spacing.p4,
      // ...Spacing.pb0,
      ...Colors.background,
    },
    buttonStyle: {
      ...Spacing.mx4,
    },
  });

export default AppContainer;
