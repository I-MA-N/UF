import splitArr from "../../../../utils/splitArr";
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import Container from "../../../common/Container";
import Link from "../../../common/Link";
import { Link as RouterLink } from "react-router-dom";

type FormsProps = {
   formNames: string[]
}

function Forms({ formNames }: FormsProps) {
   const { orgNames } = useUserDataContext();
   const orgName = splitArr(orgNames)[0];

   return (
      <Container withTitle={false} sectionClassName="w-64 xs:w-[300px] lg:w-80 mx-auto">
         <h2 className="text-center lg:text-lg font-Estedad-Black">فرم های گزارش</h2>
         <h3 className="text-sm lg:text-base font-Estedad-ExtraLight mt-4 mb-10">
            سازمان: {orgName}
         </h3>

         <div className="flex flex-col gap-8 items-center justify-center w-full">
            {
               formNames.length ?
                  formNames?.map(form => (
                     <Link
                        text={`گزارش ${form}`}
                        url={`reports?formname=${form}`}
                        key={form}
                        className="w-full"
                     />
                  )) : <p className="lg:text-lg text-center text-yellow">هیچ فرمی برای این سازمان وجود ندارد.</p>
            }
         </div>

         <RouterLink
            to="/manager/dashboard/"
            className="btn w-auto px-4 py-3.5 gap-3 mt-8 mr-auto"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className="w-4 lg:w-5">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </RouterLink>
      </Container>
   );
};

export default Forms;