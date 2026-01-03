import { useAppDispatch } from "@/store/hooks"
import { useState } from "react"
import { login } from "../store/auth.slice"

const useLoginController = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        dispatch(login({
            id: "1",
            name: "Ashish",
            email: 'ashish@gmail.com',
            token: "dummy-jwt-token",
        }))
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin
    }
}

export default useLoginController