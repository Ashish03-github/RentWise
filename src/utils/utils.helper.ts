import { format } from "date-fns";

export const formatDate = (dateString: string) => {
    try {
        return format(new Date(dateString), 'dd MMM, yyyy');
    } catch (error) {
        return dateString;
    }
};