import React from 'react';
import { Container } from '@/common/components';
import { StyleSheet, View } from 'react-native';
import { ThemeColors } from '@/theme/colors';
import { ThemeLayout } from '@/theme/layout';
import { ThemeFonts } from '@/theme/fonts';
import useTheme from '@/common/hooks/useTheme';
import LoginForm from '../components/LoginForm';
import useLoginController from '../controller/useLoginController';

const LoginScreen = () => {
  const { Colors, Layout, Fonts } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Layout, Fonts),
    [Colors, Layout, Fonts],
  );

  const { email, password, setEmail, setPassword } = useLoginController();

  return (
    <Container buttonLabel={'Continue'}>
      <View style={styles.container}>
        <LoginForm
          email={email}
          password={password}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
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
export default LoginScreen;
