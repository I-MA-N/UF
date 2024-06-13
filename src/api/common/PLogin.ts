import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import getFormData from "../../utils/getFormData";
import { getCookie, setCookie } from "../../utils/cookies";
import axios from "axios";

function PLogin() {
    const navigate = useNavigate();

    const { mutate, error, isPending } = useMutation({
        mutationKey: ['post: login'],
        mutationFn: async (userData: any) => {
            const formData = getFormData(userData);
            const req = await axios.post(import.meta.env.VITE_ENDPOINT + `/login/`, formData)

            return req.data
        },
        onSuccess: (data) => {
            if (data.access === 'denied') {
                throw new Error('Denied')
            }

            const timestamp = 1000 * 60 * 60 * 24;

            setCookie('refresh', data.refresh, timestamp);
            console.log('setting cookie');


            navigate(`/${data.role}/dashboard`)
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
export { GNewToken }