import { Children, useContext, createContext, useEffect } from "react";
import { useState } from "react";
import { FaSlack } from "react-icons/fa";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const [services, setservices] = useState([]);
    const authorizationToken = `Bearer ${token}`;

    // http://localhost:5000 API
    const API = import.meta.env.VITE_APP_URI_API;

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    // tackling logout functionality

    const LogoutUser = () => {
        setToken(null);
        return localStorage.removeItem("token");
    }

    // JWT AUTHENTICATION _ to get the currently loggdIn user data

    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
                setIsLoading(false);

            } else {
                console.log("Error fetching user data");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching user data");
        }
    }

    // to fetch the services data from the database
    const getServices = async () => {
        try {
            const response = await fetch(`${API}/api/data/service`, {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data.msg);
                setservices(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error: ${error}`)

        }
    }


    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{ storeTokenInLS, LogoutUser, isLoggedIn, user, services, authorizationToken, isLoading, API }} >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextvalue = useContext(AuthContext);
    if (!authContextvalue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextvalue;
}