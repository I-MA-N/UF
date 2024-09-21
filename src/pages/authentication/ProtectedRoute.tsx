import { PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import PNewToken from "../../api/common/PNewToken";
import NotAllowedElem from "./NotAllowedElem";

function ProtectedRoute({ children }: PropsWithChildren) {
    const [token, setToken] = useState<string | undefined | null>(undefined);
    const { mutateAsync } = PNewToken();

    // Get new token on reload of page
    useEffect(() => {
        mutateAsync()
            .then(res => {
                if (res?.access) setToken(res.access);
                else setToken(null);
            })
            .catch(() => { setToken(null) });
    }, [])

    // Middleware to set token in every request
    useLayoutEffect(() => {
        const axiosInterceptor = axios.interceptors.request.use(
            (config: any) => {
                if (token && !config._requested) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },

            error => Promise.reject(error)
        )

        return () => {
            axios.interceptors.request.eject(axiosInterceptor);
        }
    }, [token])

    // Middleware to get new access token on every failed request(401 err code)
    useLayoutEffect(() => {
        const axiosInterceptor = axios.interceptors.response.use(
            response => response,
            async error => {
                const originalConfig = error.config;
                
                if (
                    error.response.status === 401 &&
                    error.response.data.code === "token_not_valid"
                ) {
                    try {
                        const res = await mutateAsync();

                        if (res?.access) {
                            setToken(res.access)
    
                            originalConfig.headers.Authorization = `Bearer ${res.access}`;
                            originalConfig._requested = true;
    
                            return axios(originalConfig)
                        } else {
                            setToken(null);
                        }
                    } catch {
                        setToken(null);
                    }
                }

                return Promise.reject(error)
            }
        )

        return () => {
            axios.interceptors.response.eject(axiosInterceptor);
        }
    }, [])

    if (token) {
        return children;
    }

    if (token === null) {
        return <NotAllowedElem />
    }
}

export default ProtectedRoute