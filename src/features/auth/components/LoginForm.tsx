import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { InputField } from '@/common/components';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import useTheme from '@/common/hooks/useTheme';
import { ThemeSpacing } from '@/theme/spacing';

interface LoginFormProps {
  email?: string;
  password?: string;
  onEmailChange?: (email: string) => void;
  onPasswordChange?: (password: string) => void;
}
const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
}) => {
  const { Colors, Fonts, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Spacing),
    [Colors, Fonts, Spacing],
  );
  return (
    <View>
      <Text style={styles.welcomeText}>Hey! Welcome back</Text>
      <Text style={styles.subSignInText}>Sign In to your account</Text>

      <InputField
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChangeText={onEmailChange}
      />

      <InputField
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={onPasswordChange}
        placeholder="Enter your password"
      />

      <Text style={styles.termsConditionsText}>
        After continuing, I accept all Terms & Conditions and Privacy Policy
      </Text>
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    welcomeText: {
      ...Fonts.font700,
      ...Fonts.sz22,
    },
    subSignInText: {
      ...Fonts.font400,
      ...Fonts.sz12,
      ...Colors.textSecondary,
      ...Spacing.mb8,
    },
    termsConditionsText: {
      ...Fonts.font400,
      ...Fonts.sz10,
      ...Colors.textSecondary,
      // ...Spacing.mt2,
    },
  });

export default LoginForm;
