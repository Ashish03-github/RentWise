import { useEffect, useMemo } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigation } from '@react-navigation/native';

import {
    addTenantSchema,
    AddTenantFormValues,
} from '../utils/addTenant.schema';

import {
    DUMMY_USER,
    INITIAL_ADD_TENANT_FORM_STATE,
} from '../constants/tenants.dummy.data';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
    addTenant,
    updateTenant,
    clearActiveTenantId,
} from '../store/tenants.slice';

import { selectActiveTenant } from '../store/tenants.selectors';
import { selectProperties } from '@/features/property/store/properties.selectors';
import { TenantItem } from '../types/tenant.components.type';

const useAddTenantFormController = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const activeTenant = useAppSelector(selectActiveTenant);
    const properties = useAppSelector(selectProperties);

    const isEditMode = Boolean(activeTenant && !(activeTenant as any)?._isRemoved);

    /**
     * -------------------------
     * DEFAULT VALUES
     * -------------------------
     */
    const defaultValues = useMemo<AddTenantFormValues>(() => {
        if (!isEditMode || !activeTenant) {
            return INITIAL_ADD_TENANT_FORM_STATE;
        }

        return {
            tenantName: activeTenant.tenantName ?? '',
            email: activeTenant.email ?? '',
            phone: activeTenant.phone ?? '',
            propertyId: activeTenant.propertyId ?? '',
            propertyType: activeTenant.propertyType ?? '',
            propertyAddress: activeTenant.propertyAddress ?? '',
            deposit: String(activeTenant.propertyDeposit ?? ''),
            rent: String(activeTenant.propertyRent ?? ''),
            rentRecurrence: activeTenant.rentRecurrence ?? '',
            leaseStartDate: activeTenant.leaseStartDate ?? '',
            leaseEndDate: activeTenant.leaseEndDate ?? '',
            note: activeTenant.note ?? '',
        };
    }, [activeTenant, isEditMode]);

    /**
     * -------------------------
     * FORM SETUP
     * -------------------------
     */
    const {
        control,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<AddTenantFormValues>({
        resolver: zodResolver(addTenantSchema),
        defaultValues,
    });

    /**
     * Reset form when switching edit/add mode
     */
    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues, reset]);

    /**
     * Cleanup active tenant on unmount
     */
    useEffect(() => {
        return () => {
            dispatch(clearActiveTenantId());
        };
    }, [dispatch]);

    /**
     * -------------------------
     * PROPERTY SELECTION
     * -------------------------
     */
    const propertyId = useWatch({
        control,
        name: 'propertyId',
    });

    const selectedProperty = useMemo(
        () => properties.find(p => p.id === propertyId),
        [propertyId, properties],
    );

    /**
     * Auto-fill property-derived fields
     * (NO reset — keeps user inputs intact)
     */
    useEffect(() => {
        if (!selectedProperty) return;

        setValue('propertyType', selectedProperty.propertyType);
        setValue('propertyAddress', selectedProperty.propertyAddress);
        setValue('deposit', String(selectedProperty.propertyDeposit));
        setValue('rent', String(selectedProperty.propertyRent));
        setValue('rentRecurrence', selectedProperty.rentRecurrence);
    }, [selectedProperty, setValue]);

    /**
     * -------------------------
     * DROPDOWN OPTIONS
     * -------------------------
     */
    const propertyOptions = useMemo(
        () =>
            properties.map(p => ({
                label: p.propertyName,
                value: p.id,
            })),
        [properties],
    );

    /**
     * -------------------------
     * SUBMIT HANDLER
     * -------------------------
     */
    const onSubmit = (data: AddTenantFormValues) => {
        const property = properties.find(p => p.id === data.propertyId);
        if (!property) return;

        if (isEditMode && activeTenant) {
            const updatedTenant: TenantItem = {
                ...activeTenant,
                tenantName: data.tenantName,
                email: data.email,
                phone: data.phone,
                propertyId: property.id,
                propertyName: property.propertyName,
                propertyType: property.propertyType,
                propertyAddress: property.propertyAddress,
                propertyDeposit: Number(data.deposit),
                propertyRent: Number(data.rent),
                rentRecurrence: data.rentRecurrence,
                leaseStartDate: data.leaseStartDate,
                leaseEndDate: data.leaseEndDate,
                note: data.note,
            };

            dispatch(updateTenant(updatedTenant));
        } else {
            const newTenant: TenantItem = {
                id: nanoid(),
                tenantName: data.tenantName,
                email: data.email,
                phone: data.phone,
                propertyId: property.id || '',
                propertyName: property.propertyName,
                propertyType: property.propertyType,
                propertyAddress: property.propertyAddress,
                propertyStatus: 'Occupied',
                propertyDeposit: Number(property.propertyDeposit),
                propertyRent: Number(property.propertyRent),
                rentRecurrence: property.rentRecurrence,
                leaseStartDate: data.leaseStartDate,
                leaseEndDate: data.leaseEndDate,
                tenantImage: DUMMY_USER,
                note: data.note,
            };

            dispatch(addTenant(newTenant));
        }

        navigation.goBack();
    };

    return {
        control,
        handleSubmit,
        errors,
        propertyOptions,
        onSubmit,
        isEditMode,
    };
};

export default useAddTenantFormController;
