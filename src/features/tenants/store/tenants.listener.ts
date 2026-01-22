import { createListenerMiddleware } from "@reduxjs/toolkit";
import { tenantApi } from "../services";
import { addTenant, removeTenant, getTenants, getTenantById, updateTenant } from "./tenants.slice";

export const tenantListener = createListenerMiddleware();

tenantListener.startListening({
    matcher: tenantApi.endpoints.addTenant.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(addTenant(action.payload))
    }
})


tenantListener.startListening({
    matcher: tenantApi.endpoints.getTenants.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(getTenants(action.payload))
    }
})


tenantListener.startListening({
    matcher: tenantApi.endpoints.getTenantById.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(getTenantById(action.payload))
    }
});


tenantListener.startListening({
    matcher: tenantApi.endpoints.updateTenant.matchFulfilled,
    effect: async (action, api) => {
        api.dispatch(updateTenant(action.payload))
    }
});


tenantListener.startListening({
    matcher: tenantApi.endpoints.removeTenant.matchFulfilled,
    effect: async (action, api) => {
        // API returns id as string or object, handle both cases
        const id = typeof action.payload === 'string' ? action.payload : action.payload?.id || '';
        api.dispatch(removeTenant({ id }))
    }
})
