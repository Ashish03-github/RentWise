import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useMemo } from 'react';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import useTheme from '@/common/hooks/useTheme';
import { scale } from '@/theme/scale';
import { AppImage } from '@/common/components';

const UserDetailsCard = () => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.profileImageContainer}>
          <AppImage
            uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kyB2JPzgQbZ1h5hPGeOYD1Qstk0Po8IOGA&s"
            style={{
              width: scale(100),
              height: scale(100),
              borderRadius: scale(100),
            }}
          />
        </View>

        <Text style={styles.userName}>Rahul Sharma</Text>
        <Text style={styles.userEmail}>rahulsharma@gmail.com</Text>
        <Text style={styles.userEmail}>+91 9730592488</Text>
        <Pressable style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </Pressable>
      </View>
    </View>
  );
};

const stylesFn = (
  Colors: ThemeColors,
  Fonts: ThemeFonts,
  Layout: ThemeLayout,
  Spacing: ThemeSpacing,
) =>
  StyleSheet.create({
    container: {
      flex: 1,
      ...Layout.justifyCenter,
    },
    cardContainer: {
      height: '80%',
      ...Colors.white,
      elevation: scale(2),
      borderRadius: scale(10),
      shadowColor: Colors.lightGrayPure,
      ...Layout.justifyEnd,
      ...Layout.alignCenter,
    },
    profileImageContainer: {
      top: scale(-40),
      width: scale(110),
      height: scale(110),
      borderRadius: scale(100),
      ...Spacing.p1,
      ...Layout.absolute,
      ...Layout.selfCenter,
      elevation: scale(2),
      ...Colors.white,
    },
    userName: {
      ...Fonts.sz14,
      ...Fonts.font600,
    },
    userEmail: {
      ...Fonts.sz12,
      ...Fonts.font400,
    },
    editButton: {
      ...Spacing.px10,
      ...Spacing.py2,
      ...Spacing.my3,
      ...Layout.rounded3xl,
      ...Colors.primary,
    },
    editButtonText: {
      ...Fonts.sz12,
      ...Fonts.font400,
      ...Colors.textWhite,
    },
  });

export default UserDetailsCard;
