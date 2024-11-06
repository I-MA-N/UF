import { useCallback, useState } from "react";
import HeaderSection from "../../../../common/components/headerSection/HeaderSection";
import GenderModal from "./GenderModal";
import GenderStrings from "../../../../../../types/GenderStrings";

type GenderButtonProps = {
   gender: GenderStrings,
   setGender: React.Dispatch<React.SetStateAction<GenderStrings>>
}

function GenderButton({ gender, setGender }: GenderButtonProps) {
   const [showModal, setShowModal] = useState(false);

   const clickHandler = useCallback(() => {
      setShowModal(true);
   }, [])

   return (
      <>
         <HeaderSection.ActionBtn
            hidden={false}
            text={
               gender === 'whole' ? 'مجموع' : 
               gender === 'male' ? 'آقایان' : 
               'بانوان'
            }
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22" fill="none" className="size-full">
               <path d="M12 21L17 16M17 16L1 16M17 16L12 11" stroke="#E4F4FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M6 11L1 6M1 6L17 6M1 6L6 1" stroke="#E4F4FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            clickHandler={clickHandler}
         />

         {
            showModal &&
            <GenderModal
               gender={gender}
               setGender={setGender}
               setShowModal={setShowModal}
            />
         }
      </>
   );
};

export default GenderButton;