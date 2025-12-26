import { useState } from "react"

const useLoginController = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleLogin = () => {
        // Handle login logic here
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