import { useState } from 'react'

const useTheme = () => {
    const [data, setData] = useState([])
    return {
        data,
        setData
    }
}

export default useTheme