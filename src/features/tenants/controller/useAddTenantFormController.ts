import { useForm } from "react-hook-form";
import { INITIAL_ADD_TENANT_FORM_STATE } from "../constants/tenants.dummy.data";
import { AddTenantFormValues, addTenantSchema } from "../utils/addTenant.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const useAddTenantFormController = () => {

    // Form Fields Handling
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<AddTenantFormValues>({
        resolver: zodResolver(addTenantSchema),
        defaultValues: INITIAL_ADD_TENANT_FORM_STATE,
    });

    const onSubmit = (data: AddTenantFormValues) => {
        console.log('PAYLOAD =>', data);
    };

    return {
        errors,
        control,
        onSubmit,
        handleSubmit,
    }
}

export default useAddTenantFormController