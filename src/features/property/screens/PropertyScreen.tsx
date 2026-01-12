import React from 'react';
import { CircularButton, Container } from '@/common/components';
import PropertyList from '../components/PropertyList';
import { StyleSheet, View } from 'react-native';
import { ThemeLayout } from '@/theme/layout';
import useTheme from '@/common/hooks/useTheme';

const PropertyScreen = () => {
  const { Layout } = useTheme();
  const styles = React.useMemo(() => stylesFn(Layout), [Layout]);

  return (
    <Container screenHeading={'Properties'}>
      <View style={styles.container}>
        <PropertyList />
        <CircularButton />
      </View>
    </Container>
  );
};

const stylesFn = (Layout: ThemeLayout) =>
  StyleSheet.create({
    container: {
      ...Layout.flex,
    },
  });

export default PropertyScreen;
