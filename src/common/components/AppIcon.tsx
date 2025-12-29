// src/components/AppIcon.tsx
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

type IconType =
  | 'fontAwesome6'
  | 'material'
  | 'feather'
  | 'ionicons'
  | 'octicons';

interface Props {
  type?: IconType;
  name: string;
  size?: number;
  color?: string;
}

const AppIcon = ({
  type = 'material',
  name,
  size = 24,
  color = '#000',
}: Props) => {
  if (type === 'fontAwesome6') {
    return <FontAwesome6 name={name} size={size} color={color} />;
  }
  if (type === 'ionicons') {
    return <Ionicons name={name} size={size} color={color} />;
  }

  if (type === 'octicons') {
    return <Octicons name={name} size={size} color={color} />;
  }

  if (type === 'feather') {
    return <Feather name={name} size={size} color={color} />;
  }

  return <MaterialIcons name={name} size={size} color={color} />;
};

export default AppIcon;
