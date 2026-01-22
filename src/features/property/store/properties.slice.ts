import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { Property } from '../types/proprty.type';

export type PropertyHistoryItem = {
    id: string;
    propertyId: string;
    action: 'CREATED' | 'UPDATED' | 'DELETED';
    timestamp: number;
    snapshot: Property;
};

type PropertyState = {
    properties: Property[];
    history: PropertyHistoryItem[];
    activePropertyId: string | null;
};

const initialState: PropertyState = {
    properties: [],
    history: [],
    activePropertyId: null,
};

const propertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        addProperty: (state, action: PayloadAction<Property>) => {
            state.properties.push(action.payload);

            state.history.push({
                id: nanoid(),
                propertyId: action.payload.id!,
                action: 'CREATED',
                timestamp: Date.now(),
                snapshot: action.payload,
            });
        },

        updateProperty: (state, action: PayloadAction<Property>) => {
            const index = state.properties.findIndex(
                p => p.id === action.payload.id,
            );

            if (index !== -1) {
                state.properties[index] = action.payload;

                state.history.push({
                    id: nanoid(),
                    propertyId: action.payload.id!,
                    action: 'UPDATED',
                    timestamp: Date.now(),
                    snapshot: action.payload,
                });
            }
        },

        removeProperty: (state, action: PayloadAction<{ id: string }>) => {
            const property = state.properties.find(
                p => p.id === action.payload.id,
            );

            state.properties = state.properties.filter(
                p => p.id !== action.payload.id,
            );

            if (property) {
                state.history.push({
                    id: nanoid(),
                    propertyId: action.payload.id,
                    action: 'DELETED',
                    timestamp: Date.now(),
                    snapshot: property,
                });
            }

            if (state.activePropertyId === action.payload.id) {
                state.activePropertyId = null;
            }
        },

        setActivePropertyId: (state, action: PayloadAction<string>) => {
            state.activePropertyId = action.payload;
        },

        clearActivePropertyId: state => {
            state.activePropertyId = null;
        },
    },
});

export const {
    addProperty,
    updateProperty,
    removeProperty,
    setActivePropertyId,
    clearActivePropertyId,
} = propertySlice.actions;

export default propertySlice.reducer;
