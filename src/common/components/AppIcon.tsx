// src/components/AppIcon.tsx
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { StyleProp, ViewStyle } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';

type IconType =
  | 'fontAwesome6'
  | 'material'
  | 'feather'
  | 'ionicons'
  | 'octicons';

interface Props extends IconProps {
  type?: IconType;
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

const AppIcon = ({
  type = 'material',
  name,
  size = 24,
  color = '#000',
  style,
  ...props
}: Props) => {
  if (type === 'fontAwesome6') {
    return (
      <FontAwesome6
        name={name}
        size={size}
        color={color}
        style={style}
        {...props}
      />
    );
  }
  if (type === 'ionicons') {
    return (
      <Ionicons
        name={name}
        size={size}
        color={color}
        style={style}
        {...props}
      />
    );
  }

  if (type === 'octicons') {
    return (
      <Octicons
        name={name}
        size={size}
        color={color}
        style={style}
        {...props}
      />
    );
  }

  if (type === 'feather') {
    return (
      <Feather name={name} size={size} color={color} style={style} {...props} />
    );
  }

  return (
    <MaterialIcons
      name={name}
      style={style}
      size={size}
      color={color}
      {...props}
    />
  );
};

export default AppIcon;
