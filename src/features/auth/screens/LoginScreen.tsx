import React from 'react';
import { Container } from '@/common/components';
import { StyleSheet, View } from 'react-native';
import { ThemeLayout } from '@/theme/layout';
import useTheme from '@/common/hooks/useTheme';
import LoginForm from '../components/LoginForm';
import useLoginController from '../controller/useLoginController';

const LoginScreen = () => {
  const { Layout } = useTheme();
  const styles = React.useMemo(() => stylesFn(Layout), [Layout]);

  const { email, password, setEmail, setPassword, handleLogin } =
    useLoginController();

  return (
    <Container
      screenHeading={null}
      buttonLabel={'Continue'}
      onButtonPress={handleLogin}
    >
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

const stylesFn = (Layout: ThemeLayout) =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...Layout.justifyCenter,
    },
  });
export default LoginScreen;
