import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import useTheme from '@/common/hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { ThemeFonts } from '@/theme/fonts';
import RegisterForm from '../components/RegisterForm';
import { Container } from '@/common/components';
import { useLoginController } from '../controller';

const RegisterScreen = () => {
  const { Colors, Layout, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Layout, Fonts),
    [Colors, Layout, Fonts],
  );

  const { email, password, setEmail, setPassword, handleLogin } =
    useLoginController();

  return (
    <Container>
      <View style={styles.container}>
        <RegisterForm
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSubmit={handleLogin}
        />
      </View>
    </Container>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Layout: ThemeLayout,
  Fonts: ThemeFonts,
) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
      ...Layout.justifyCenter,
    },
  });

export default RegisterScreen;
