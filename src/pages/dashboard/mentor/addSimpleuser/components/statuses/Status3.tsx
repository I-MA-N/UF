import { useLocation, useNavigate } from "react-router-dom"
import Link from "../../../../../common/Link";
import mentorPAddSimpleuser from "../../../../../../api/mentor/mentorPAddSimpleuser";
import Btn from "../../../../../common/Btn";
import { useEffect } from "react";

type Status3Props = {
   username: string,
   orgName: string,
   status: string
}

function Status3({ username, orgName, status }: Status3Props) {
   const { mutate, isPending, isError, isSuccess } = mentorPAddSimpleuser();
   const { pathname } = useLocation();
   const navigate = useNavigate();

   const clickHandler = () => {
      mutate({
         email: 'test1234@example.com',
         password: 'examplePass1234',
         orgName,
         username,
      })
   }

   useEffect(() => {
      if (isSuccess) navigate(`${pathname}/${username}`);
   }, [isSuccess])

   return (
      <>
         <p className="text-xs lg:text-sm mx-auto text-center text-yellow w-64 mb-4">
            با رفتن به مرحله بعد ارزیابی این کاربر را انجام دهید.
         </p>

         {
            isError &&
            <p className="text-xs lg:text-sm text-center text-red min-h-4 my-4">
               مشکلی در ادامه ارزیابی به وجود آمده است!
            </p>
         }
         
         {
            status === 'exist not in list' ?
               <Btn
                  text="ارزیابی کاربر"
                  type="button"
                  icon={
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" fill="none" className="w-4.5 lg:w-5">
                        <path d="M1 19C1 19.9693 1.11783 20.618 1.34327 21.0791C1.5502 21.5023 1.88679 21.8473 2.51687 22.1337C3.17962 22.4349 4.14546 22.6599 5.5602 22.8028C6.96536 22.9448 8.74527 23 11 23C13.2547 23 15.0346 22.9448 16.4398 22.8028C17.8545 22.6599 18.8204 22.4349 19.4831 22.1337C20.1132 21.8473 20.4498 21.5023 20.6567 21.0791C20.8822 20.618 21 19.9693 21 19C21 18.0307 20.8822 17.382 20.6567 16.9209C20.4498 16.4977 20.1132 16.1527 19.4831 15.8663C18.8204 15.5651 17.8545 15.3401 16.4398 15.1972C15.0346 15.0552 13.2547 15 11 15C8.74527 15 6.96536 15.0552 5.5602 15.1972C4.14546 15.3401 3.17962 15.5651 2.51687 15.8663C1.88679 16.1527 1.5502 16.4977 1.34327 16.9209C1.11783 17.382 1 18.0307 1 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="6" cy="6" r="5" transform="matrix(-1 0 0 1 17 0)" stroke="currentColor" strokeWidth="2" />
                        <path d="M19 10.5L20.5 12L24.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  }
                  onClick={clickHandler}
                  className="mx-auto"
                  isDisabled={isPending}
               /> :
               <Link
                  text="ارزیابی کاربر"
                  url={`${pathname}/${username}`}
                  icon={
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" fill="none" className="w-4.5 lg:w-5">
                        <path d="M1 19C1 19.9693 1.11783 20.618 1.34327 21.0791C1.5502 21.5023 1.88679 21.8473 2.51687 22.1337C3.17962 22.4349 4.14546 22.6599 5.5602 22.8028C6.96536 22.9448 8.74527 23 11 23C13.2547 23 15.0346 22.9448 16.4398 22.8028C17.8545 22.6599 18.8204 22.4349 19.4831 22.1337C20.1132 21.8473 20.4498 21.5023 20.6567 21.0791C20.8822 20.618 21 19.9693 21 19C21 18.0307 20.8822 17.382 20.6567 16.9209C20.4498 16.4977 20.1132 16.1527 19.4831 15.8663C18.8204 15.5651 17.8545 15.3401 16.4398 15.1972C15.0346 15.0552 13.2547 15 11 15C8.74527 15 6.96536 15.0552 5.5602 15.1972C4.14546 15.3401 3.17962 15.5651 2.51687 15.8663C1.88679 16.1527 1.5502 16.4977 1.34327 16.9209C1.11783 17.382 1 18.0307 1 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="6" cy="6" r="5" transform="matrix(-1 0 0 1 17 0)" stroke="currentColor" strokeWidth="2" />
                        <path d="M19 10.5L20.5 12L24.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  }
                  className="mx-auto"
               />
         }
      </>
   )
}

export default Status3