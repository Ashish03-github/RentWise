import { useAppDispatch } from "@/store/hooks"
import { useCallback } from "react"
import { setSession } from "../store/auth.slice"
import { useNavigation } from "@react-navigation/native"
import { AuthRoutes } from "@/navigation/routes"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginValuesType } from "../utils/auth.login.validation.schema"
import { LOGIN_INITIAL_VALUES } from "../constants/auth.dummy.values"

const useLoginController = () => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch();


    const { control, handleSubmit, formState: { errors } } = useForm<LoginValuesType>({
        resolver: zodResolver(loginSchema),
        defaultValues: LOGIN_INITIAL_VALUES
    })

    const handleLogin = useCallback((data: LoginValuesType) => {
        // console.log(data)
        dispatch(setSession({
            user: {
                id: "123",
                name: "Ashish Yadav",
                email: data.email,
            },
            token: "dummy-jwt-token",
        }))
    }, [dispatch])

    const navigateTo = useCallback(() => {
        navigation.navigate(AuthRoutes.register)
    }, [])

    return { control, errors, handleLogin, navigateTo, handleSubmit }
}

export default useLoginController