import { useEffect } from "react"
import { TestObj } from "../../../types/TestsTypes";
import TopBtns from "./components/TopBtns";
import testsData from "./data/testsData";
import generateTestInputs from "./data/generateTestInputs";
import BottomBtns from "./components/BottomBtns";
import MessageModal from "./components/MessageModal";
import TestTabs from "./testTabs/TestTabs";
import useFormDataStore from "./store/formDataStore";

type TestsProps = {
   username: string,
   formname: string,
   testsArr: TestObj[],
}

function Tests({ username, formname, testsArr }: TestsProps) {
   const { data, currentTestName, setCurrentTestName } = useFormDataStore(state => ({ data: state.data, currentTestName: state.currentTestName, setCurrentTestName: state.setCurrentTestName }));
   
   useEffect(() => {
      setCurrentTestName(testsArr[0].testName);
   }, [])

   if (currentTestName) return (
      <>
         <div className="px-4 sm:container pt-24 lg:pt-32">
            <div className="w-full relative pt-24 lg:pt-32 pb-16 lg:pb-24">
               <TopBtns
                  username={username}
                  formname={formname}
               />

               {
                  testsData[currentTestName as keyof typeof testsData].testSubTitle &&
                  <div className="relative">
                     <p className="text-base lg:text-lg leading-6 mb-6 mr-6">
                        {testsData[currentTestName as keyof typeof testsData].testSubTitle}
                     </p>
                     <div className="absolute w-2.5 lg:w-3 h-2.5 lg:h-3 bg-white rounded-full right-0 top-1/2 -translate-y-1/2" />
                  </div>
               }

               {
                  (currentTestName === 'ناهنجاری ها' || currentTestName === 'ارزیابی پویا')
                     ?
                     <TestTabs key={currentTestName} />
                     :
                     <div className={testsData[currentTestName as keyof typeof testsData].testClassName}>
                        {
                           generateTestInputs({
                              formData: data?.[currentTestName],
                              testPattern: testsData[currentTestName as keyof typeof testsData].testPattern,
                              testData: testsData[currentTestName as keyof typeof testsData].testData,
                           }).map((input: any) => input)
                        }
                     </div>
               }

               <BottomBtns testsArr={testsArr} />
            </div>
         </div>

         <MessageModal />
      </>
   )
}

export default Tests