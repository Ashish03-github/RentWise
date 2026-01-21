import { createListenerMiddleware } from "@reduxjs/toolkit";
import { propertyApi } from "../services";
import { addProperty, getProperties, getPropertyById, removeProperty, updateProperty } from "./properties.slice";

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
        api.dispatch(getProperties(action.payload))
    }
})


propertyListener.startListening({
    matcher: propertyApi.endpoints.getPropertyById.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(getPropertyById(action.payload))
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

