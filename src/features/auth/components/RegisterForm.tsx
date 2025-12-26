import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { InputField } from '@/common/components';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeSpacing } from '@/theme/spacing';

interface RegisterFormProps {
  email?: string;
  password?: string;
  onEmailChange?: (email: string) => void;
  onPasswordChange?: (password: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
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
      <Text style={styles.welcomeText}>Create Account</Text>
      <Text style={styles.subSignInText}>
        Please fill all the details given below
      </Text>

      <InputField
        label="Name"
        value={email}
        placeholder="Enter your name"
        onChangeText={onEmailChange}
      />

      <InputField
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChangeText={onEmailChange}
      />

      <InputField
        label="Mobile Number"
        value={password}
        secureTextEntry
        onChangeText={onPasswordChange}
        placeholder="Enter your mobile number"
      />

      <InputField
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={onPasswordChange}
        placeholder="Enter your password"
      />

      <InputField
        label="Confirm Password"
        value={password}
        secureTextEntry
        onChangeText={onPasswordChange}
        placeholder="Enter confirm your password"
      />

      {/* <InputField
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={onPasswordChange}
        placeholder="Enter your password"
      /> */}

      {/* <Button title="Continue" onPress={onSubmit} /> */}
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
      ...Fonts.sz22,
      ...Fonts.font700,
    },
    subSignInText: {
      ...Fonts.sz12,
      ...Spacing.mb8,
      ...Fonts.font400,
      ...Colors.textSecondary,
    },
  });

export default RegisterForm;
