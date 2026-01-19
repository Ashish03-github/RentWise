import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Button, InputField } from '@/common/components';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeSpacing } from '@/theme/spacing';
import { AuthRoutes } from '@/navigation/routes';
import { useNavigation } from '@react-navigation/native';
import { scale } from '@/theme/scale';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const navigation = useNavigation();
  const navigateTo = useCallback(() => {
    navigation.navigate(AuthRoutes.login);
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const { Colors, Fonts, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Spacing),
    [Colors, Fonts, Spacing],
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.welcomeText}>Create Account</Text>
      <Text style={styles.subSignInText}>
        Please fill all the details given below
      </Text>

      <InputField
        label="Name"
        value={name}
        placeholder="Enter your name"
        onChangeText={setName}
      />

      <InputField
        label="Email"
        value={email}
        placeholder="Enter your email"
        onChangeText={setEmail}
      />

      <InputField
        label="Mobile Number"
        value={mobile}
        secureTextEntry
        onChangeText={setMobile}
        placeholder="Enter your mobile number"
      />

      <InputField
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        placeholder="Enter your password"
      />

      <InputField
        label="Confirm Password"
        value={confirmPass}
        secureTextEntry
        onChangeText={setConfirmPass}
        placeholder="Enter confirm your password"
      />

      <Text style={styles.registerText}>
        Already have an account?{' '}
        <Text onPress={navigateTo} style={styles.primaryText}>
          Login
        </Text>
      </Text>

      <Button style={styles.formButton} title="Continue" onPress={() => {}} />
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
      // ...Spacing.mb8,
    },
    primaryText: {
      ...Fonts.font600,
      ...Fonts.sz12,
      ...Colors.textPrimary,
      // ...Spacing.mb8,
    },
  });

export default RegisterForm;
