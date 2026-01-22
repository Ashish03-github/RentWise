import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { nanoid } from '@reduxjs/toolkit';

import {
    addTenantSchema,
    AddTenantFormValues,
} from '../utils/addTenant.schema';

import { DUMMY_USER, INITIAL_ADD_TENANT_FORM_STATE } from '../constants/tenants.dummy.data';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addTenant, updateTenant, clearActiveTenantId } from '../store/tenants.slice';
import { selectActiveTenant } from '../store/tenants.selectors';
import { TenantItem } from '../types/tenant.components.type';
import { BUILDING_IMAGE } from '@/features/property/constants/properties.dummy.data';

const useAddTenantFormController = () => {
    const dispatch = useAppDispatch();
    const activeTenant = useAppSelector(selectActiveTenant);

    const isEditMode = !!activeTenant && !(activeTenant as any)?._isRemoved;

    const defaultValues = useMemo(() => {
        if (!activeTenant || (activeTenant as any)?._isRemoved) {
            return INITIAL_ADD_TENANT_FORM_STATE;
        }

        return {
            tenantName: activeTenant.tenantName || '',
            email: activeTenant.email || '',
            phone: activeTenant.phone || '',
            property: activeTenant.propertyName || '',
            propertyType: activeTenant.propertyType || '',
            deposit: String(activeTenant.propertyDeposit || ''),
            rent: String(activeTenant.propertyRent || ''),
            leaseStartDate: activeTenant.leaseStartDate || '',
            leaseEndDate: activeTenant.leaseEndDate || '',
            rentRecurrence: activeTenant.rentRecurrence || '',
            propertyAddress: activeTenant.propertyAddress || '',
            note: activeTenant.note || '',
        };
    }, [activeTenant]);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddTenantFormValues>({
        resolver: zodResolver(addTenantSchema),
        defaultValues,
    });

    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues, reset]);

    useEffect(() => {
        return () => {
            dispatch(clearActiveTenantId());
        };
    }, [dispatch]);

    const onSubmit = (data: AddTenantFormValues) => {
        if (isEditMode && activeTenant) {
            const updatedTenant: TenantItem = {
                ...activeTenant,
                tenantName: data.tenantName,
                propertyName: data.property,
                propertyType: data.propertyType as any,
                propertyAddress: data.propertyAddress,
                propertyDeposit: data.deposit,
                propertyRent: Number(data.rent),
                rentRecurrence: data.rentRecurrence as any,
                leaseStartDate: data.leaseStartDate,
                leaseEndDate: data.leaseEndDate,
                email: data.email,
                phone: data.phone,
                note: data.note,
            };

            dispatch(updateTenant(updatedTenant));
        } else {
            // Add new tenant
            const newTenant: TenantItem = {
                id: nanoid(),
                tenantName: data.tenantName,
                propertyName: data.property,
                propertyType: data.propertyType as any,
                propertyAddress: data.propertyAddress,
                propertyStatus: 'Occupied' as any,
                propertyDeposit: data.deposit,
                propertyRent: Number(data.rent),
                rentRecurrence: data.rentRecurrence as any,
                leaseStartDate: data.leaseStartDate,
                leaseEndDate: data.leaseEndDate,
                tenantImage: DUMMY_USER, // Default empty
                image: BUILDING_IMAGE,// Default empty
                email: data.email,
                phone: data.phone,
                note: data.note,
            };

            dispatch(addTenant(newTenant));
        }

        // navigation.goBack();
    };

    return {
        control,
        handleSubmit,
        errors,
        onSubmit,
        isEditMode,
    };
};

export default useAddTenantFormController;