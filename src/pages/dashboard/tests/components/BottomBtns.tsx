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
      <div className="w-full px-4 sm:container fixed z-20 bottom-4 left-1/2 -translate-x-1/2 bg-primary">
         <Tabs
            value={page}
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
                     onClick={() => setValue("nextPage", test.testName)}
                     className="!text-sm lg:!text-base"
                  />
               ))
            }
         </Tabs>
      </div>
   );
};

export default BottomBtns;