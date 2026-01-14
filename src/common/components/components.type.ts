import { Dispatch, SetStateAction } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface AppContainerProps {
    style?: ViewStyle;
    noPadding?: boolean;
    isDashboard?: boolean;
    backgroundColor?: string;
    children: React.ReactNode;

    screenHeading: string | null;
    buttonLabel?: string | null;
    onButtonPress?: () => void;

    overlayType?: 'modal' | 'bottomSheet';
    isOverlayVisible?: boolean;
    onCloseOverlay?: () => void;

    modalComponent?: React.ReactNode;

    bottomSheetComponent?: React.ReactNode;
    bottomSheetSnapPoint?: number | `${number}%`;
};

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

type DropdownItem<T = any> = {
    label: string;
    value: T;
    icon?: string;
};

export interface AppDropdownProps<T> {
    label?: string;
    placeholder?: string;
    items?: DropdownItem<T>[];
    value?: T;
    onChange: Dispatch<SetStateAction<string | undefined>>;
    error?: string;
    disabled?: boolean;
    iconSize?: number,
    styles?: {
        wrapper?: StyleProp<ViewStyle>;
        label?: StyleProp<TextStyle>;
        container?: StyleProp<ViewStyle>;
        text?: StyleProp<TextStyle>;
        placeholder?: StyleProp<TextStyle>;
        dropdown?: StyleProp<ViewStyle>;
        item?: StyleProp<ViewStyle>;
        itemText?: StyleProp<TextStyle>;
        emptyItem?: StyleProp<ViewStyle>;
        errorText?: StyleProp<TextStyle>;
        emptyMessage?: StyleProp<TextStyle>;
    };
    isDatePicker?: boolean
}