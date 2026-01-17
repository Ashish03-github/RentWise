import { Text, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import useTheme from '../hooks/useTheme';
import { ThemeColors } from '@/theme/colors';
import { ThemeFonts } from '@/theme/fonts';
import { ThemeLayout } from '@/theme/layout';
import { ThemeSpacing } from '@/theme/spacing';
import { scale } from '@/theme/scale';

interface AppTabProps {
  options: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const AppTabs: React.FC<AppTabProps> = ({
  options = ['option 1', 'option 2', 'option 3'],
  activeTab,
  setActiveTab,
}) => {
  const { Colors, Fonts, Layout, Spacing } = useTheme();
  const styles = React.useMemo(
    () => stylesFn(Colors, Fonts, Layout, Spacing),
    [Colors, Fonts, Layout, Spacing],
  );
  return (
    <View style={[styles.tabContainer, Spacing.py3]}>
      {options.map(option => {
        const isActive = option === activeTab;
        return (
          <Pressable
            key={option}
            onPress={() => setActiveTab(option)}
            style={[styles.tabItem, isActive && styles.activeTabItem]}
          >
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
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
    tabContainer: {
      ...Layout.flexRow,
      ...Layout.justifyBetween,
      ...Layout.rounded,
      ...Spacing.mt3,
    },

    tabItem: {
      paddingHorizontal: scale(10),
    },

    activeTabItem: {
      borderBottomWidth: scale(2),
      borderBottomColor: Colors.primaryPure,
    },

    tabText: {
      ...Fonts.sz10,
      ...Fonts.font600,
      ...Colors.inputFiledTextColor,
    },
    activeTabText: {
      ...Fonts.font600,
      color: Colors.primaryPure,
    },
  });

export default AppTabs;
