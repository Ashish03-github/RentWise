import React from 'react';
import { StyleProp, StyleSheet } from 'react-native';
import FastImage, {
  FastImageProps,
  ImageStyle,
  Priority,
  ResizeMode,
} from 'react-native-fast-image';

interface AppImageProps extends FastImageProps {
  uri: string;
  resizeMode?: ResizeMode;
  priority?: Priority;
  imageStyle?: StyleProp<ImageStyle>;
}
const AppImage = ({
  uri,
  imageStyle,
  priority = 'high',
  resizeMode = 'contain',
  ...props
}: AppImageProps) => {
  const styles = React.useMemo(() => stylesFn(), []);
  return (
    <FastImage
      style={[styles.imageStyle, imageStyle]}
      source={{
        uri: uri,
        priority: priority,
      }}
      resizeMode={resizeMode}
      {...props}
    />
  );
};

const stylesFn = () =>
  StyleSheet.create({
    imageStyle: {
      width: 100,
      height: 100,
    },
  });

export default AppImage;
