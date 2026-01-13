import React, { memo, useCallback, useMemo, useRef } from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';

import useTheme from '../hooks/useTheme';
import { scale } from '@/theme/scale';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeSpacing } from '@/theme/spacing';
import { ThemeLayout } from '@/theme/layout';

interface AppButtonProps {
  title: string;
  onPress: () => void;

  disabled?: boolean;
  loading?: boolean;

  style?: ViewStyle;
  textStyle?: TextStyle;

  debounceTime?: number;
  testID?: string;
}

const AppButton = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  debounceTime = 500,
  style,
  textStyle,
  testID,
}: AppButtonProps) => {
  const { Colors, Fonts, Spacing, Layout } = useTheme();

  const styles = useMemo(
    () => createStyles(Colors, Fonts, Spacing, Layout),
    [Colors, Fonts, Spacing, Layout],
  );

  const lastPressRef = useRef(0);
  const isDisabled = disabled || loading;

  const handlePress = useCallback(() => {
    const now = Date.now();
    if (now - lastPressRef.current < debounceTime) return;

    lastPressRef.current = now;
    onPress();
  }, [onPress, debounceTime]);

  const containerStyle = useMemo(
    () => [styles.button, isDisabled && styles.disabled, style],
    [styles, isDisabled, style],
  );

  return (
    <Pressable
      testID={testID}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      onPress={handlePress}
      style={({ pressed }) => [
        containerStyle,
        pressed && !isDisabled && styles.pressed,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={Colors.textWhite.color} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </Pressable>
  );
};

const createStyles = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Spacing: ThemeSpacing,
  Layout: ThemeLayout,
) =>
  StyleSheet.create({
    button: {
      ...Spacing.px4,
      ...Layout.center,
      ...Colors.primary,
      minHeight: scale(44),
      borderRadius: scale(10),
    },

    pressed: {
      opacity: 0.85,
      transform: [{ scale: 0.98 }],
    },

    disabled: {
      backgroundColor: Colors.lightGrayPure,
    },

    text: {
      ...Colors.textWhite,
      ...Fonts.font500,
      ...Fonts.sz12,
    },
  });
export default memo(AppButton);
