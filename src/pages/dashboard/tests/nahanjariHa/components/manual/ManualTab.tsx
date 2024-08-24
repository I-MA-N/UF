import { FieldValues, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import testsData from "../../../data/testsData";
import ManualInput from "./components/ManualInput";

type ManualTabProps = {
   getValues: UseFormGetValues<FieldValues>,
   setValue: UseFormSetValue<FieldValues>
}

function ManualTab({ getValues, setValue }: ManualTabProps) {
   const data = getValues();

   return (
      <div className={`${testsData['ناهنجاری ها'].testClassName}`}>
         {
            testsData['ناهنجاری ها'].testData.map(section => (
               <div className="py-10" key={section.sectionTitle}>
                  <h3 className="mb-3 text-center text-sm lg:text-base">{section.sectionTitle}</h3>
                  <div className="flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap">
                     {
                        section.sectionQuestions.map(input => {
                           const defaultValue = data?.[input.title];

                           return <ManualInput
                              key={input.title}
                              title={input.title}
                              keys={input.keys}
                              values={input.values}
                              index={input.id}
                              defaultValue={Number(defaultValue)}
                              setValue={setValue}
                           />
                        })
                     }
                  </div>
               </div>
            ))
         }
      </div>
   );
};

export default ManualTab;