import { RootState } from "@/store/type";


export const selectProperties = (state: RootState) =>
    state.properties.properties;

export const selectActiveProperty = (state: RootState) => {
    const id = state.properties.activePropertyId;
    if (!id) return null;
    
    // First check active properties
    const activeProperty = state.properties.properties.find(p => p.id === id);
    if (activeProperty) return activeProperty;
    
    // If not found, check removed properties from history
    const removedHistory = state.properties.history
        .filter(h => h.action === 'DELETED' && h.propertyId === id)
        .sort((a, b) => b.timestamp - a.timestamp);
    
    if (removedHistory.length > 0) {
        // Return the snapshot with "Removed" status
        const removedProperty = { ...removedHistory[0].snapshot };
        // Mark as removed for UI purposes (we'll use a special propertyStatus value)
        return { ...removedProperty, _isRemoved: true } as any;
    }
    
    return null;
};
export const selectActivePropertyHistory = (state: RootState) => {
    const id = state.properties.activePropertyId;
    return state.properties.history.filter(h => h.propertyId === id);
};

export const selectRemovedProperties = (state: RootState) => {
    const deleted = state.properties.history
        .filter(h => h.action === 'DELETED')
        .sort((a, b) => b.timestamp - a.timestamp);

    const seen = new Set<string>();
    const removed: typeof deleted = [];

    for (const item of deleted) {
        if (seen.has(item.propertyId)) continue;
        seen.add(item.propertyId);
        removed.push(item);
    }

    return removed;
};