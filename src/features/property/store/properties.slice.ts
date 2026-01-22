
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Property } from "../types/proprty.type";

type propertyState = {
    properties: Property[],
    propertyById: Property[],
}

let initialState: propertyState = {
    properties: [],
    propertyById: []
}

const propertySlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
        getProperties: () => { },
        addProperty: (state, action: PayloadAction<Property>) => {
            state.properties = [...state.properties, action.payload]
        },
        getPropertyById: (state, action: PayloadAction<{ id: string }>) => {
            state.propertyById = state.properties.filter(property => property.id === action.payload.id)
        },
        updateProperty: (state, action: PayloadAction<Property>) => {
            let propertyIdToUpdate = action.payload.id
            state.properties = state.properties.map(property => property.id === propertyIdToUpdate ?
                { ...action.payload } :
                property)
        },
        removeProperty: (state, action: PayloadAction<{ id: string }>) => {
            state.properties = state.properties.filter(property => property.id !== action.payload.id)
        }
    }
})

export const {
    addProperty,
    getProperties,
    getPropertyById,
    removeProperty,
    updateProperty
} = propertySlice.actions
export default propertySlice.reducer