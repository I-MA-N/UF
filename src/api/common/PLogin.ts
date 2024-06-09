import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import API from "../axiosInstance";
import getFormData from "../../utils/getFormData";
import axios from "axios";
import { getCookie, setCookie } from "../../utils/cookies";

function PLogin() {
    const navigate = useNavigate();

    const { mutate, error, isPending } = useMutation({
        mutationKey: ['post: login'],
        mutationFn: async (userData: any) => {
            const formData = getFormData(userData);
            const req = await API.post(`/login/`, formData)

            return req.data
        },
        onSuccess: (data) => {
            if (data.access === 'denied') {
                throw new Error('Denied')
            }

            sessionStorage.setItem('jwt', data.access);
            const timestamp = 1000 * 60 * 60 * 24;
            
            setCookie('refresh', data.refresh, timestamp);
            console.log('setting cookie');
            

            navigate(`/${data.role}`)
        },
    })

    return { mutate, error, isPending }
}

const GNewToken = async () => {
    const rTkn = getCookie('refresh');
    
    const req = await axios.post(`${import.meta.env.VITE_ENDPOINT}login/refresh/`, { refresh: rTkn })

    return req.data
}

export default PLogin
export { GNewToken };