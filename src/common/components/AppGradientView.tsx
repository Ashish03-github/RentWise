import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type AppGradientViewProps = {
  colors: Array<string>;
  children?: React.ReactNode;
  styles: StyleProp<ViewStyle>;
};
const AppGradientView: React.FC<AppGradientViewProps> = ({
  colors,
  styles,
  children,
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={styles}
      end={{ x: 1, y: 0 }}
      start={{ x: 0, y: 0 }}
    >
      {children}
    </LinearGradient>
  );
};

export default AppGradientView;
