import { RootState } from "@/store/type";

export const selectProperties = (state: RootState) => state.properties.properties;
export const selectPropertyById = (state: RootState) => state.properties.propertyById