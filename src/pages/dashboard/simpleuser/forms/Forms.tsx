import { Link } from 'react-router-dom';
import Container from "../../../common/Container";
import FormNamesList from '../../common/components/form/FormNamesList';
import { FormObj } from '../../../../types/TestsTypes';

type FormsProps = {
   username: string,
   formNames: FormObj[]
}

function Forms({ username, formNames }: FormsProps) {
   return (
      <Container withTitle={false} sectionClassName="w-64 lg:w-80 mx-auto">
         <h2 className="text-center lg:text-lg font-Estedad-Black mb-6">پرسشنامه ها</h2>

         <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center">
            <FormNamesList
               role="simpleuser"
               username={username}
               formNames={formNames}
            />
         </div>

         <Link
            to="/simpleuser/dashboard"
            className="btn w-auto lg:w-40 px-4 py-3.5 justify-end gap-3 lg:gap-8 mt-8 mr-auto"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className='w-4 lg:w-5'>
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </Link>
      </Container>
   )
}

export default Forms