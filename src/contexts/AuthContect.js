import { createContext, useState } from "react";

const initContext = {
    token: null
}

export const AuthContext = createContext(initContext);

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();

    const handleSetToken = (t) => {
        setToken(t)
    }

    return (
        <AuthContext.Provider value={{token, handleSetToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;