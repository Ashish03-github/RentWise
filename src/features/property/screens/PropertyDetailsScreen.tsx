import React, { useCallback, useEffect } from 'react';
import { Container } from '@/common/components';
import PropertyCard from '../components/PropertyCard';
import PropertyDetailsCard from '../components/PropertyDetailsCard';
import { View, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectActiveProperty } from '../store/properties.selectors';
import {
  clearActivePropertyId,
  removeProperty,
} from '../store/properties.slice';
import { useNavigation } from '@react-navigation/native';
const PropertyDetailsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const property = useAppSelector(selectActiveProperty);
  const isRemoved = (property as any)?._isRemoved;

  useEffect(() => {
    return () => {
      dispatch(clearActivePropertyId());
    };
  }, [dispatch]);

  const remove = useCallback(() => {
    dispatch(removeProperty({ id: property?.id || '' }));
    navigation.goBack();
  }, [dispatch, navigation, property?.id]);

  return (
    <Container
      buttonLabel={isRemoved ? undefined : 'Remove Property'}
      onButtonPress={isRemoved ? undefined : remove}
      screenHeading="Property Details"
    >
      <View style={styles.container}>
        <PropertyCard />

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
