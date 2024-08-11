import { Link as RouterLink } from "react-router-dom";
import Container from "../../../common/Container";
import { FormObj } from "../../../../types/TestsTypes";
import FormNamesList from "../../common/components/form/FormNamesList";

type FormsProps = {
   username: string,
   formNames: FormObj[]
}

function Forms({ username, formNames }: FormsProps) {
   return (
      <Container withTitle={false} sectionClassName="w-64 xs:w-[300px] lg:w-80 mx-auto">
         <h2 className="text-center lg:text-lg font-Estedad-Black">فرم های ارزیابی</h2>
         <h3 className="text-sm lg:text-base font-Estedad-ExtraLight mt-2 mb-6">
            کاربر: {username}
         </h3>

         <div className="flex flex-col gap-4 items-center justify-center w-full">
            <FormNamesList
               role="mentor"
               username={username}
               formNames={formNames}
            />
         </div>

         <RouterLink
            to="/mentor/dashboard/members/"
            className="btn w-auto px-4 py-3.5 gap-3 mt-8 mr-auto"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className="w-4 lg:w-5">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </RouterLink>
      </Container>
   )
}

export default Forms