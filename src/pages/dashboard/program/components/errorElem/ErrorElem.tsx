import HeaderSection from "../../../common/components/headerSection/HeaderSection";
import ProgramErrorType from "../../../../../types/ProgramErrorType";
import NeededTestNamesText from "./NeededTestNamesText";
import IncompleteInputsList from "./IncompleteInputsList";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

type ErrorElemProps = {
   data: ProgramErrorType
}

function ErrorElem({ data }: ErrorElemProps) {
   const { program } = useParams();
   const programNameFA = useMemo(() => (
      program === "fitness" ? "برنامه ورزشی" : "حرکات اصلاحی"
   ), [program])

   return (
      <div className="px-4 sm:container pt-24 lg:pt-32 pb-16 lg:pb-24">
         <HeaderSection>
            <HeaderSection.ExitBtn exitModalText="آیا از خروج اطمینان دارید؟" />
            <HeaderSection.Title text={programNameFA} />
            <HeaderSection.ActionBtn hidden />
         </HeaderSection>

         <section className="mt-8 lg:mt-10">
            <NeededTestNamesText />

            <h4 className="text-center text-lg lg:text-2xl mt-4 lg:mt-6 mb-1 lg:mb-2">پیغام خطا:</h4>
            <p className="text-center text-sm lg:text-lg">
               {
                  data?.incompleteInputs
                     ? "لطفا از کامل بودن اطلاعات زیر اطمینان حاصل کنید."
                     : data.errorMsg
               }
            </p>

            <IncompleteInputsList incompleteInputs={data?.incompleteInputs} />
         </section>
      </div>
   );
};

export default ErrorElem;