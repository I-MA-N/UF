import { useEffect, useState } from "react";
import useFormDataStore from "../store/formDataStore";
import SaveBtn from "./saveBtn/SaveBtn";
import ExitBtn from "./exitBtn/ExitBtn";
import PFormData from "../../../../api/common/form/PFormData";
import PImage from "../../../../api/common/PImage";

type TopBtnsProps = {
   username: string,
   formname: string,
}

function TopBtns({ username, formname }: TopBtnsProps) {
   const currentTestName = useFormDataStore(state => state.currentTestName);

   const { mutateAsync: mutateFormData } = PFormData(username, formname);
   const { mutateAsync: mutateImage } = PImage(username, formname);

   const [isCircle, setIsCircle] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= 150) setIsCircle(true);
         else setIsCircle(false);
      }
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      }
   }, [])

   return (
      <div className="w-full h-12 absolute top-0 flex items-center justify-between">
         <ExitBtn isCircle={isCircle} />

         <h2 className="font-Estedad-Black max-w-28 lg:max-w-40 text-center lg:text-2xl">{currentTestName}</h2>

         <SaveBtn
            isCircle={isCircle}
            mutateFormData={mutateFormData}
            mutateImage={mutateImage}
         />
      </div>
   )
}

export default TopBtns