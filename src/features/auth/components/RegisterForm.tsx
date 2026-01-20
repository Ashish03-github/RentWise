import { scale } from '@/theme/scale';
import React from 'react';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeColors } from '@/theme/colors';
import useTheme from '@/common/hooks/useTheme';
import { ThemeSpacing } from '@/theme/spacing';
import { View, Text, StyleSheet } from 'react-native';
import { Button, RHFInput } from '@/common/components';
import useRegistrationController from '../controller/useRegistrationController';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const { Colors, Fonts, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Spacing),
    [Colors, Fonts, Spacing],
  );

  const { control, errors, handleSubmit, onSubmit, navigateTo } =
    useRegistrationController();

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.welcomeText}>Create Account</Text>
      <Text style={styles.subSignInText}>
        Please fill all the details given below
      </Text>

      <RHFInput
        label="Name"
        name="name"
        control={control}
        errors={errors}
        placeholder="Enter your name"
      />

      <RHFInput
        name="email"
        label="Email Address"
        control={control}
        errors={errors}
        placeholder="Enter your email address"
      />

      <RHFInput
        label="Mobile Number"
        name="phone"
        control={control}
        errors={errors}
        placeholder="Enter your mobile number"
      />

      <RHFInput
        label="Password"
        name="password"
        control={control}
        errors={errors}
        placeholder="Enter your password."
      />

      <RHFInput
        label="Confirm Password"
        name="cnf_password"
        control={control}
        errors={errors}
        placeholder="Confirm your password"
      />

      <Text style={styles.registerText}>
        Already have an account?{' '}
        <Text onPress={navigateTo} style={styles.primaryText}>
          Login
        </Text>
      </Text>

      <Button
        title="Continue"
        style={styles.formButton}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    welcomeText: {
      ...Fonts.sz22,
      ...Fonts.font700,
    },
    subSignInText: {
      ...Fonts.sz12,
      ...Spacing.mb8,
      ...Fonts.font400,
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
      ...Spacing.mt8,
    },
    primaryText: {
      ...Fonts.font600,
      ...Fonts.sz12,
      ...Colors.textPrimary,
      // ...Spacing.mb8,
    },
  });

export default RegisterForm;
