import generateTestInputs from "./utils/generateTestInputs";
import testsData from "../../data/testsData";
import useFormDataStore from "../../store/formDataStore";

function NoAITestsContainer() {
   const { data, currentTestName } = useFormDataStore(state => ({ data: state.data, currentTestName: state.currentTestName! }));

   return (
      <div className={testsData[currentTestName as keyof typeof testsData].testClassName}>
         {
            generateTestInputs({
               formData: data?.[currentTestName],
               testPattern: testsData[currentTestName as keyof typeof testsData].testPattern,
               testData: testsData[currentTestName as keyof typeof testsData].testData,
            }).map((input: any) => input)
         }
      </div>
   );
};

export default NoAITestsContainer;