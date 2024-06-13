import { PropsWithChildren, useEffect, useLayoutEffect, useState } from "react";
import PNewToken from "../../api/common/PNewToken";
import axios from "axios";

function ProtectedRoute({ children }: PropsWithChildren) {
    const [token, setToken] = useState<string | null>(null);
    const { mutateAsync } = PNewToken();

    // Get new token on reload of page
    useEffect(() => {
        mutateAsync()
            .then(res => {
                if (res.access) {
                    console.log(res.access)
                    setToken(res.access)
                }
            })
            .catch(() => { setToken(null) });
    }, [])

    // Middleware to set token in every request
    useLayoutEffect(() => {
        const axiosInterceptor = axios.interceptors.request.use(
            (config: any) => {
                console.log(config._requested)
                if (token && !config._requested) {
                    console.log('changing headers')
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
                        console.log('in response interceptor', res.access)
                        setToken(res.access)

                        originalConfig.headers.Authorization = `Bearer ${res.access}`;
                        originalConfig._requested = true;

                        return axios(originalConfig)
                    } catch {
                        setToken(null)
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

    return <h1>You are not allowed!</h1>
}

export default ProtectedRoute