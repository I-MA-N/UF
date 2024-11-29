import CheckBoxInput from "../components/inputs/CheckBoxInput";
import ChoiceInput from "../components/inputs/ChoiceInput";
import ChoiceInputWithImage from "../components/inputs/ChoiceInputWithImage";
import FormDataType from "../../../../types/FormDataType";
import RadioInput from "../components/inputs/RadioInput";
import TextInput from "../components/inputs/TextInput";

export type testPatternTypes = "CheckBox" | "Choice" | "ChoiceWithDivide" | "Radio" | "Text" | "ImageWithDivide" | "ChoiceImage";

type generateTestInputsPropsType = {
   formData: FormDataType[""],
   testPattern: testPatternTypes,
   testData: any,
}

function generateTestInputs({ formData, testPattern, testData }: generateTestInputsPropsType) {
   switch (testPattern) {

      case "Text":
         return Object.entries(testData).map(txt => (
            <TextInput
               key={txt[0]}
               title={txt[0]}
               placeholder={txt[1] as string}
               value={formData?.[txt[0]]?.value}
            />
         ))

      case "Radio":
         return testData.map((input: any) => (
            <RadioInput
               key={input.id}
               id={input.id}
               text1={input.text1}
               text2={input.text2}
               isChecked={formData?.["مقدار تحرک"]?.value === input.id.toString()}
            />
         ))

      case "CheckBox":
         return testData.map((title: string, index: number) => (
            <CheckBoxInput
               key={title}
               index={index + 1}
               title={title}
               value={formData?.[title]?.value}
            />
         ))

      case "Choice":
         return testData.map((input: any, index: number) => (
            <ChoiceInput
               key={index}
               index={index + 1}
               title={input.title}
               value={formData?.[input.title]?.value}
               keys={input.keys}
               values={input.values}
            />
         ))

      case "ChoiceWithDivide":
         return testData.map((section: any) => (
            <div key={section.sectionTitle}>
               <h3 className="mb-3 text-center text-sm lg:text-base">{section.sectionTitle}</h3>
               <div className="flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap">
                  {
                     section.sectionQuestions.map((input: any) => (
                        <ChoiceInput
                           index={input.id}
                           title={input.title}
                           value={formData?.[input.id]?.value}
                           keys={input.keys}
                           values={input.values}
                           inputKey={input.id}
                        />
                     ))
                  }
               </div>
            </div>
         ))

      case "ChoiceImage":
         return testData.map((input: any) => (
            <ChoiceInputWithImage
               key={input.id}
               number={input.id}
               serverID={input.title}
               title={input.title}
               keys={input.keys}
               values={input.values}
               images={input.images}
               direction={input.direction}
               value={formData?.[input.title]?.value}
               isLastValueByAI={false}
            />
         ))

      default:
         return ["تست مورد نظر یافت نشد!"];
   }
}

export default generateTestInputs