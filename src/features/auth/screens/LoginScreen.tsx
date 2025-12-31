import React from 'react';
import { Container } from '@/common/components';
import { StyleSheet, View } from 'react-native';
import { ThemeLayout } from '@/theme/layout';
import useTheme from '@/common/hooks/useTheme';
import LoginForm from '../components/LoginForm';
import useLoginController from '../controller/useLoginController';

const LoginScreen = () => {
  const { Colors } = useTheme();
  const styles = React.useMemo(() => stylesFn(Colors), [Colors]);

  const { email, password, setEmail, setPassword } = useLoginController();

  return (
    <Container screenHeading={null} buttonLabel={'Continue'}>
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
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
export default LoginScreen;
