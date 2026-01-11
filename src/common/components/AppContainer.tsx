import React, { useMemo } from 'react';
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
  Modal,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import useTheme from '../hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { AppHeader, Button, BottomSheet } from '.';
import { scale } from '@/theme/scale';

type AppContainerProps = {
  style?: ViewStyle;
  noPadding?: boolean;
  isDashboard?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;

  screenHeading: string | null;
  buttonLabel?: string | null;
  onButtonPress?: () => void;

  overlayType?: 'modal' | 'bottomSheet';
  isOverlayVisible?: boolean;
  onCloseOverlay?: () => void;

  modalComponent?: React.ReactNode;

  bottomSheetComponent?: React.ReactNode;
  bottomSheetSnapPoint?: number | `${number}%`;
};

const AppContainer = ({
  style,
  children,
  isDashboard,
  overlayType,
  screenHeading,
  onCloseOverlay,
  modalComponent,
  backgroundColor,
  isOverlayVisible,
  noPadding = false,
  buttonLabel = null,
  bottomSheetComponent,
  bottomSheetSnapPoint,
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
              onPress={onButtonPress ? onButtonPress : () => {}}
              style={styles.buttonStyle}
            />
          ) : null}

          {overlayType === 'modal' && isOverlayVisible ? (
            <Modal
              transparent
              visible
              animationType="fade"
              statusBarTranslucent
            >
              <Pressable style={styles.modalContainer} onPress={onCloseOverlay}>
                <Pressable style={styles.modalContent}>
                  {modalComponent}
                </Pressable>
              </Pressable>
            </Modal>
          ) : null}

          {overlayType === 'bottomSheet' && isOverlayVisible ? (
            <BottomSheet
              isVisible
              snapPoint={bottomSheetSnapPoint}
              onClose={onCloseOverlay ?? (() => {})}
            >
              {bottomSheetComponent}
            </BottomSheet>
          ) : null}
        </>
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
      paddingBottom: scale(-20),
    },
    flex: {
      ...Layout.flex,
      // backgroundColor: 'red',
    },
    container: {
      flexGrow: 1,
      ...Spacing.p4,
      ...Spacing.pb1,
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
      ...Layout.fullWidth,
      ...Layout.center,
    },
  });

export default AppContainer;
