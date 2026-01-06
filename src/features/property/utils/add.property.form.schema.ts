import * as Yup from "yup";
import { PropertyItem } from "../types/proprty.type";

const createYupSchema = <T extends object>(
    schema: Yup.ObjectSchema<T>
): Yup.ObjectSchema<T> => schema;

export const addPropertyFormSchema = createYupSchema<PropertyItem>(
    Yup.object({
        image: Yup.string().required("Please provide property image."),

        propertyName: Yup.string()
            .required("Please provide property name."),

        propertyAddress: Yup.string()
            .required("Please provide property address."),

        propertyType: Yup.mixed<PropertyItem["propertyType"]>()
            // .oneOf(["Room", "Flat", "Land"])
            .required("Please select property type."),

        propertyStatus: Yup.mixed<PropertyItem["propertyStatus"]>()
            .oneOf(["Occupied", "Vacant", "Booked"])
            .required("Please select property status."),

        propertyDeposite: Yup.number()
            .typeError("Deposite must be a number.")
            .positive("Deposite must be greater than 0.")
            .required("Please provide property deposite."),

        propertyRent: Yup.number()
            .typeError("Rent must be a number.")
            .positive("Rent must be greater than 0.")
            .required("Please provide property rent."),

        propertyRentRecurrence: Yup.mixed<PropertyItem["propertyRentRecurrence"]>()
            .oneOf(["Monthly", "Yearly", "Other"])
            .required("Please select rent recurrence."),

        note: Yup.string().optional(),
    })
);
