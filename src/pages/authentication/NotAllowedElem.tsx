import { Link } from "react-router-dom";
import Container from "../common/Container";

function NotAllowedElem() {
   return (
      <Container>
         <h2 className="text-2xl text-center">دسترسی به این صفحه امکان پذیر نیست!</h2>

         <p className="my-6 text-sm/6 text-yellow text-center">با کلیک بر روی دکمه زیر، به صفحه اصلی برگردید.</p>

         <Link
            to="/"
            className="btn w-14 h-14"
         >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className="w-5">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </Link>
      </Container>
   )
}

export default NotAllowedElem