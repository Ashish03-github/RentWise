import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Button, InputField } from '@/common/components';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import useTheme from '@/common/hooks/useTheme';
import { ThemeSpacing } from '@/theme/spacing';
import { useLoginController } from '../controller';
import { scale } from '@/theme/scale';
import { ThemeLayout } from '@/theme/layout';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, navigateTo } = useLoginController();
  const onSubmit = useCallback(() => {
    handleLogin(email, password);
  }, [email, password, handleLogin]);

  const { Colors, Fonts, Spacing, Layout } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Spacing, Layout),
    [Colors, Fonts, Spacing, Layout],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hey! Welcome back</Text>
      <Text style={styles.subSignInText}>Sign In to your account</Text>

      <InputField
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChangeText={setEmail}
      />

      <InputField
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Enter your password"
      />

      {/* <Text style={styles.termsConditionsText}>
        After continuing, I accept all Terms & Conditions and Privacy Policy
      </Text> */}

      <Text style={styles.registerText}>
        Don’t have an account?{' '}
        <Text onPress={navigateTo} style={styles.primaryText}>
          Register
        </Text>
      </Text>

      <Button style={styles.formButton} title="Continue" onPress={onSubmit} />
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Spacing: ThemeSpacing,
  Layout: ThemeLayout,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...Layout.justifyCenter,
    },
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
    },
    formButton: {
      width: '100%',
      bottom: scale(16),
      position: 'absolute',
    },
    registerText: {
      ...Fonts.font400,
      ...Fonts.sz11,
      ...Colors.textSecondary,
    },
    primaryText: {
      ...Fonts.font600,
      ...Fonts.sz12,
      ...Colors.textPrimary,
    },
  });

export default LoginForm;
