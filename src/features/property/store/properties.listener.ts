import { createListenerMiddleware } from "@reduxjs/toolkit";
import { propertyApi } from "../services";
import { addProperty, removeProperty, setProperties, upsertProperty, updateProperty } from "./properties.slice";

export const propertyListener = createListenerMiddleware();

propertyListener.startListening({
    matcher: propertyApi.endpoints.addProperty.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(addProperty(action.payload))
    }
})


propertyListener.startListening({
    matcher: propertyApi.endpoints.getProperties.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(setProperties(action.payload))
    }
})


propertyListener.startListening({
    matcher: propertyApi.endpoints.getPropertyById.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(upsertProperty(action.payload))
    }
});


propertyListener.startListening({
    matcher: propertyApi.endpoints.updateProperty.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(updateProperty(action.payload))
    }
});


propertyListener.startListening({
    matcher: propertyApi.endpoints.removeProperty.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(removeProperty(action.payload))
    }
})

