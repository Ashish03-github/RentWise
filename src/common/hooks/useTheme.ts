import { useColorScheme } from "react-native";
import { fonts, spacing, layout, colors, type RootTheme } from "@/theme";

const useTheme = (): RootTheme & { isDarkMode: boolean } => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === "dark";
    const themeVariant = isDarkMode ? "dark" : "light";

    return {
        isDarkMode,
        Colors: colors[themeVariant],
        Fonts: fonts,
        Layout: layout,
        Spacing: spacing,
    };
};

export default useTheme;