import { useAppDispatch } from "@/store/hooks"
import { useCallback } from "react"
import { login } from "../store/auth.slice"

const useLoginController = () => {
    const dispatch = useAppDispatch();

    const handleLogin = useCallback((email: string, password: string) => {
        dispatch(login({
            id: "1",
            name: "Ashish",
            email,
            token: "dummy-jwt-token",
        }))
    }, [dispatch])

    return { handleLogin }
}

export default useLoginController