import { useCallback } from 'react'
import {
    RegisterationValues,
    registrationSchema,
} from '../utils/auth.registration.validation.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { REGISTRATION_FORM_INITIAL_VALUES } from '../constants/auth.dummy.values';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '@/navigation/routes';

const useRegistrationController = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterationValues>({
        resolver: zodResolver(registrationSchema),
        defaultValues: REGISTRATION_FORM_INITIAL_VALUES,
    });

    const navigateTo = useCallback(() => {
        navigation.navigate(AuthRoutes.login);
    }, []);


    const onSubmit = useCallback((data: RegisterationValues) => {
        console.log('Registeration Form Values =>', data);
    }, []);

    return {
        control,
        errors,
        handleSubmit,
        navigateTo,
        onSubmit
    }
}

export default useRegistrationController