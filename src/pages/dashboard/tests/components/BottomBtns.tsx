import { Tab, Tabs, tabsClasses } from "@mui/material";
import { TestObj } from "../../../../types/TestsTypes";
import { FieldValues, UseFormSetValue } from "react-hook-form";

type BottomBtnsProps = {
   testsArr: TestObj[],
   page: string,
   setValue: UseFormSetValue<FieldValues>
}

function BottomBtns({ testsArr, page, setValue }: BottomBtnsProps) {
   return (
      <Tabs
         value={page}
         variant="scrollable"
         scrollButtons
         allowScrollButtonsMobile
         indicatorColor="secondary"
         className="fixed bottom-4 right-4 left-4 bg-primary"
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
                  onClick={() => setValue("nextPage", test.testName)}
               />
            ))
         }
      </Tabs>
   );
};

export default BottomBtns;