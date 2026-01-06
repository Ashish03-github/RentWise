interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: object;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;

  debounceDelay?: number;
  onDebouncedChange?: (text: string) => void;
}

import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  Pressable,
} from 'react-native';
import useTheme from '../hooks/useTheme';
import { moderateScale, scale, scaleVertical } from '@/theme/scale';

const AppInput = forwardRef<TextInput, AppInputProps>(
  (
    {
      label,
      error,
      value,
      placeholder,
      defaultValue,
      onChangeText,
      onDebouncedChange,
      debounceDelay = 500,
      containerStyle,
      leftIcon,
      rightIcon,
      editable = true,
      ...rest
    },
    ref,
  ) => {
    const { Colors, Layout, Fonts, Spacing } = useTheme();
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    // @ts-ignore
    const debounceTimer = useRef<NodeJS.Timeout | null>(null);

    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : internalValue;

    const handleChangeText = useCallback(
      (text: string) => {
        if (!isControlled) {
          setInternalValue(text);
        }
        onChangeText?.(text);

        if (onDebouncedChange) {
          if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
          }

          debounceTimer.current = setTimeout(() => {
            onDebouncedChange(text);
          }, debounceDelay);
        }
      },
      [isControlled, onChangeText, onDebouncedChange, debounceDelay],
    );

    useEffect(() => {
      return () => {
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current);
        }
      };
    }, []);

    const styles = React.useMemo(
      () => stylesFn(Colors, Layout, Fonts, Spacing),
      [Colors, Layout, Fonts, Spacing],
    );

    const containerStyles = useMemo(
      () => [
        styles.container,
        error && styles.errorBorder,
        !editable && styles.disabled,
        containerStyle,
      ],
      [error, editable, containerStyle],
    );

    return (
      <View style={styles.wrapper}>
        {label && <Text style={styles.label}>{label}</Text>}

        <View style={containerStyles}>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}

          <TextInput
            ref={ref}
            style={styles.input}
            value={inputValue}
            editable={editable}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            onChangeText={handleChangeText}
            {...rest}
          />

          {rightIcon && <Pressable style={styles.icon}>{rightIcon}</Pressable>}
        </View>

        {!!error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  },
);

export const stylesFn = (
  Colors: ThemeColors,
  Layout: ThemeLayout,
  Fonts: ThemeFonts,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    wrapper: {
      ...Spacing.mb4,
    },

    label: {
      ...Fonts.sz11,
      ...Spacing.mb2,
      ...Fonts.font600,
      ...Colors.textPrimary,
      lineHeight: scale(16),
    },

    container: {
      ...Layout.flexRow,
      minHeight: scale(48),
      ...Layout.alignCenter,

      borderWidth: 1,
      borderRadius: moderateScale(8),
      borderColor: Colors.lightGrayPure,

      ...Spacing.px3,
      ...Colors.white,
    },

    input: {
      ...Layout.flex,
      ...Fonts.sz11,
      lineHeight: scale(20),
      ...Colors.inputFiledTextColor,
      paddingVertical: scaleVertical(10),
      ...Fonts.font500,
      ...Colors.textBlack,
      includeFontPadding: false,
      textAlignVertical: 'center',
    },

    icon: {
      ...Spacing.mx2,
      ...Layout.center,
    },

    errorBorder: {
      borderColor: Colors.redPure,
    },

    disabled: {
      ...Colors.background,
      borderColor: Colors.lightGrayPure,
    },

    errorText: {
      ...Fonts.sz9,
      ...Spacing.mt2,
      lineHeight: scale(16),
      color: Colors.redPure,
      ...Fonts.font500Italic,
    },
  });

export default memo(AppInput);
