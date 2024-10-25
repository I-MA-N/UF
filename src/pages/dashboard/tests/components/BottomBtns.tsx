import { Tab, Tabs, tabsClasses } from "@mui/material";
import { TestObj } from "../../../../types/TestsTypes";
import useAIStore from "../store/AIStore";
import useFormDataStore from "../store/formDataStore";

type BottomBtnsProps = {
   testsArr: TestObj[],
}

function BottomBtns({ testsArr }: BottomBtnsProps) {
   const { currentTestName, setCurrentTestName } = useFormDataStore(state => ({ currentTestName: state.currentTestName, setCurrentTestName: state.setCurrentTestName }));
   const updateTestsData = useAIStore(state => state.updateTestsData);

   const clickHandler = (testName: string) => {
      updateTestsData(currentTestName!, testName);
      setCurrentTestName(testName);
   };

   return (
      <div className="w-full px-4 sm:container fixed z-20 bottom-4 left-1/2 -translate-x-1/2 bg-primary">
         <Tabs
            value={currentTestName}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            indicatorColor="secondary"
            sx={{
               [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
               },
               [`& .MuiTab-root.Mui-selected`]: { color: "#4CB648", },
            }}
         >
            {
               testsArr.map(test => (
                  <Tab
                     key={test.id + test.testName}
                     value={test.testName}
                     label={test.testName}
                     type="submit"
                     href=""
                     onClick={() => clickHandler(test.testName)}
                     className="!text-sm lg:!text-base"
                  />
               ))
            }
         </Tabs>
      </div>
   );
};

export default BottomBtns;