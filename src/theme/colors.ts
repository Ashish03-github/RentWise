const colors = {
    light: {
        primary: { backgroundColor: "#1F75EC" },
        primaryLight1: { backgroundColor: "#EDF6FF" },
        primaryLight2: { backgroundColor: "#BCDFFF2E" },
        background: { backgroundColor: "#FFFFFF" },

        red: { backgroundColor: "#D64252" },
        lightRed: { backgroundColor: "#DB566A24" },
        white: { backgroundColor: "#FFFFFF" },
        green: { backgroundColor: "#309535" },
        lightGreen: { backgroundColor: "#7fdb8b" },
        lightOrange: { backgroundColor: '#f9bb77' },


        // Text Colors
        textPrimary: { color: "#1F75EC" },
        textSecondary: { color: "#7C7E80" },
        textRed: { color: "#D64252" },
        textBlack: { color: "#000000" },
        textWhite: { color: "#FFFFFF" },
        textGreen: { color: "#309535" },
        textLightGreen: { color: "#7fdb8b" },
        inputFiledTextColor: { color: "#757474" },
        textLightOrange: { color: '#f9bb77' },


        // Simple Colors
        primaryPure: "#1F75EC",
        purePrimaryLight1: "#EDF6FF",
        purePrimaryLight2: "#BCDFFF2E",
        lightGrayPure: "#AEACAC",
        blackPure: "#000000",
        whitePure: "#FFFFFF",
        redPure: "#D64252",
        pureGreen: "#309535",
        pureLightGreen: "#7fdb8b",
        pureLightOrange: '#f9bb77',

    },
    dark: {
        primary: { backgroundColor: "#1F75EC" },
        primaryLight1: { backgroundColor: "#EDF6FF" },
        primaryLight2: { backgroundColor: "#BCDFFF2E" },
        background: { backgroundColor: "#FFFFFF" },

        red: { backgroundColor: "#D64252" },
        lightRed: { backgroundColor: "#DB566A24" },
        white: { backgroundColor: "#FFFFFF" },
        green: { backgroundColor: "#309535" },
        lightGreen: { backgroundColor: "#7fdb8b" },
        lightOrange: { backgroundColor: '#f9bb77' },

        // Text Colors
        textPrimary: { color: "#000000" },
        textSecondary: { color: "#7C7E80" },
        textRed: { color: "#D64252" },
        textBlack: { color: "#000000" },
        textWhite: { color: "#FFFFFF" },
        textGreen: { color: "#309535" },
        textLightGreen: { color: "#7fdb8b" },
        textLightOrange: { color: '#f9bb77' },
        inputFiledTextColor: {
            color: "#757474"
        },

        // Simple Colors
        primaryPure: "#1F75EC",
        purePrimaryLight1: "#EDF6FF",
        purePrimaryLight2: "#BCDFFF2E",
        lightGrayPure: "#AEACAC",
        blackPure: "#000000",
        whitePure: "#FFFFFF",
        redPure: "#D64252",
        pureGreen: "#309535",
        pureLightGreen: "#7fdb8b",
        pureLightOrange: '#f9bb77',
    },
} as const;

export type ThemeColors = typeof colors[keyof typeof colors];
export default colors;
