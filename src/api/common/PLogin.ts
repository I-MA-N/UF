import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import getFormData from "../../utils/getFormData";
import Cookies from "js-cookie";
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

            Cookies.set('refresh', data.refresh, { expires: 1 })

            navigate(`/${data.role}/dashboard`)
        },
    })

    return { mutate, error, isPending }
}

export default PLogin