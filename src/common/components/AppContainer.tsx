import React, { useMemo } from 'react';
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
  Alert,
  Modal,
  View,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useTheme from '../hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { AppHeader, Button } from '.';

type AppContainerProps = {
  style?: ViewStyle;
  noPadding?: boolean;
  showModal?: boolean;
  modalComponent?: React.ReactNode;
  isDashboard?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;
  screenHeading: string | null;
  buttonLabel?: string | null;
  onButtonPress?: () => void;
};

const AppContainer = ({
  style,
  children,
  showModal,
  isDashboard,
  screenHeading,
  modalComponent,
  backgroundColor,
  noPadding = false,
  buttonLabel = null,
  onButtonPress,
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
        {!showModal ? (
          <>
            <AppHeader isDashboard={isDashboard} heading={screenHeading} />
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
                onPress={
                  onButtonPress
                    ? onButtonPress
                    : () => {
                        Alert.alert('Please pass onButtonPress method.');
                      }
                }
                style={styles.buttonStyle}
              />
            ) : null}
          </>
        ) : (
          <Modal
            transparent
            visible={showModal}
            animationType="fade"
            statusBarTranslucent
          >
            <Pressable style={styles.modalContainer}>
              <Pressable style={styles.modalContent} onPress={() => {}}>
                {modalComponent}
              </Pressable>
            </Pressable>
          </Modal>
        )}
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
      ...Colors.white,
      ...Spacing.pb1,
    },
    flex: {
      ...Layout.flex,
    },
    container: {
      flexGrow: 1,
      ...Spacing.p4,
      ...Spacing.pb0,
    },
    buttonStyle: {
      ...Spacing.mx4,
    },
    modalContainer: {
      ...Layout.flex,
      backgroundColor: 'rgba(0,0,0,0.2)',
      ...Spacing.p4,
      ...Layout.justifyCenter,
    },
    modalContent: {
      width: '100%',
      ...Layout.center,
    },
  });

export default AppContainer;
