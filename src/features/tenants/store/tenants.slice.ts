import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { TenantItem } from '../types/tenant.components.type';

export type TenantHistoryItem = {
    id: string;
    tenantId: string;
    action: 'CREATED' | 'UPDATED' | 'DELETED';
    timestamp: number;
    snapshot: TenantItem;
};

type TenantState = {
    tenants: TenantItem[];
    history: TenantHistoryItem[];
    activeTenantId: string | null;
};

const initialState: TenantState = {
    tenants: [],
    history: [],
    activeTenantId: null,
};

const tenantSlice = createSlice({
    name: 'tenants',
    initialState,
    reducers: {
        addTenant: (state, action: PayloadAction<TenantItem>) => {
            state.tenants.push(action.payload);

            state.history.push({
                id: nanoid(),
                tenantId: action.payload.id!,
                action: 'CREATED',
                timestamp: Date.now(),
                snapshot: action.payload,
            });
        },

        updateTenant: (state, action: PayloadAction<TenantItem>) => {
            const index = state.tenants.findIndex(
                t => t.id === action.payload.id,
            );

            if (index !== -1) {
                state.tenants[index] = action.payload;

                state.history.push({
                    id: nanoid(),
                    tenantId: action.payload.id!,
                    action: 'UPDATED',
                    timestamp: Date.now(),
                    snapshot: action.payload,
                });
            }
        },

        removeTenant: (state, action: PayloadAction<{ id: string }>) => {
            const tenant = state.tenants.find(
                t => t.id === action.payload.id,
            );

            state.tenants = state.tenants.filter(
                t => t.id !== action.payload.id,
            );

            if (tenant) {
                state.history.push({
                    id: nanoid(),
                    tenantId: action.payload.id,
                    action: 'DELETED',
                    timestamp: Date.now(),
                    snapshot: tenant,
                });
            }

            if (state.activeTenantId === action.payload.id) {
                state.activeTenantId = null;
            }
        },

        setActiveTenantId: (state, action: PayloadAction<string>) => {
            state.activeTenantId = action.payload;
        },

        clearActiveTenantId: state => {
            state.activeTenantId = null;
        },

        getTenants: (state, action: PayloadAction<TenantItem[]>) => {
            state.tenants = action.payload;
        },

        getTenantById: (state, action: PayloadAction<TenantItem>) => {
            const index = state.tenants.findIndex(
                t => t.id === action.payload.id,
            );
            if (index !== -1) {
                state.tenants[index] = action.payload;
            } else {
                state.tenants.push(action.payload);
            }
        },
    },
});

export const {
    addTenant,
    updateTenant,
    removeTenant,
    setActiveTenantId,
    clearActiveTenantId,
    getTenants,
    getTenantById,
} = tenantSlice.actions;

export default tenantSlice.reducer;

