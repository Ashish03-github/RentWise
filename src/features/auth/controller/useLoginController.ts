import { useAppDispatch } from "@/store/hooks"
import { useCallback } from "react"
import { setSession } from "../store/auth.slice"
import { useNavigation } from "@react-navigation/native"
import { AuthRoutes } from "@/navigation/routes"

const useLoginController = () => {
    const navigation = useNavigation()
    const dispatch = useAppDispatch();

    const handleLogin = useCallback((email: string, password: string) => {
        dispatch(setSession({
            user: {
                id: "123",
                name: "Ashish Yadav",
                email: email,
            },
            token: "dummy-jwt-token",
        }))
    }, [dispatch])

    const navigateTo = useCallback(() => {
        navigation.navigate(AuthRoutes.register)
    }, [])

    return { handleLogin, navigateTo }
}

export default useLoginController