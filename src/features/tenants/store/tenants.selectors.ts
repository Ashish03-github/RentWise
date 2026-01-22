import { RootState } from "@/store/type";

export const selectTenants = (state: RootState) =>
    state.tenants.tenants;

export const selectActiveTenant = (state: RootState) => {
    const id = state.tenants.activeTenantId;
    if (!id) return null;
    
    // First check active tenants
    const activeTenant = state.tenants.tenants.find(t => t.id === id);
    if (activeTenant) return activeTenant;
    
    // If not found, check removed tenants from history
    const removedHistory = state.tenants.history
        .filter(h => h.action === 'DELETED' && h.tenantId === id)
        .sort((a, b) => b.timestamp - a.timestamp);
    
    if (removedHistory.length > 0) {
        // Return the snapshot with "Removed" status
        const removedTenant = { ...removedHistory[0].snapshot };
        // Mark as removed for UI purposes
        return { ...removedTenant, _isRemoved: true } as any;
    }
    
    return null;
};

export const selectActiveTenantHistory = (state: RootState) => {
    const id = state.tenants.activeTenantId;
    return state.tenants.history.filter(h => h.tenantId === id);
};

export const selectRemovedTenants = (state: RootState) => {
    const deleted = state.tenants.history
        .filter(h => h.action === 'DELETED')
        .sort((a, b) => b.timestamp - a.timestamp);

    const seen = new Set<string>();
    const removed: typeof deleted = [];

    for (const item of deleted) {
        if (seen.has(item.tenantId)) continue;
        seen.add(item.tenantId);
        removed.push(item);
    }

    return removed;
};

