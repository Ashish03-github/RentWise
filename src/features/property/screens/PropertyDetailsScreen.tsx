import React from 'react';
import { Container } from '@/common/components';
import PropertyCard from '../components/PropertyCard';
import PropertyDetailsCard from '../components/PropertyDetailsCard';
import { View, StyleSheet } from 'react-native';

const PropertyDetailsScreen = () => {
  return (
    <Container screenHeading="Property Details">
      <View style={styles.container}>
        {/* Fixed section */}
        <PropertyCard />

        {/* Scrollable section */}
        <View style={styles.detailsContainer}>
          <PropertyDetailsCard />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    height: '50%',
  },
});

export default PropertyDetailsScreen;
