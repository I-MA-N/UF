import { useNavigate } from "react-router-dom"
import Container from "./common/Container"

function NotFound() {
    const navigate = useNavigate();

    return (
        <Container>
            <h2 className="text-xl lg:text-2xl text-center">مشکلی رخ داده است!</h2>
            <p className="my-6 text-sm/6 lg:text-base text-yellow text-center">صفحه مورد نظر یافت نشد! با دکمه پایینی به صفحه اصلی برگرد.</p>
            <button className="btn w-12 lg:w-14 h-12 lg:h-14" onClick={() => navigate('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className="w-5">
                    <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </Container>
    )
}

export default NotFound