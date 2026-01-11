import { TextInputProps } from "react-native";

export interface AppInputProps extends TextInputProps {
    label?: string;
    error?: string;
    containerStyle?: object;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    placeholder?: string;

    debounceDelay?: number;
    onDebouncedChange?: (text: string) => void;
}