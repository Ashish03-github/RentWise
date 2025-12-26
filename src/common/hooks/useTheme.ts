import { fonts, spacing, layout, colors } from "@/theme";
import { useColorScheme } from "react-native"


const useTheme = () => {
    const colorScheme = useColorScheme()
    const isDarkMode = colorScheme === "dark" ? "dark" : "light";

    let Fonts = fonts;
    let Spacing = spacing;
    let Layout = layout;
    let Colors = colors[isDarkMode];

    return {
        isDarkMode,
        Fonts,
        Spacing,
        Layout,
        Colors
    }

}

export default useTheme