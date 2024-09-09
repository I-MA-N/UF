import SectionNames from "../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../store/AIStore";

type AddImageBtnProps = {
   sectionName: SectionNames,
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>
}

function AddImageBtn({ sectionName, setIsAIMethod }: AddImageBtnProps) {
   const setNameFromManualTab = useAIStore(state => state.setNameFromManualTab);

   return (
      <button
         type="button"
         className="px-4 h-8 mx-auto my-4 flex items-center gap-2 bg-white text-primary text-xs rounded-[32px]"
         onClick={() => {
            setNameFromManualTab(sectionName);
            setIsAIMethod(true);
         }}
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className="size-4">
            <path d="M0.500005 10.1633C0.500005 13.4406 0.913729 15.1732 2.04746 16.1522C2.61831 16.6451 3.41709 16.9872 4.55963 17.2025C5.70422 17.4182 7.15591 17.5 9 17.5C10.8431 17.5 12.2942 17.4135 13.438 17.1921C14.5796 16.9712 15.3791 16.6226 15.951 16.1246C17.0871 15.1354 17.5 13.3998 17.5 10.1633C17.5 8.05287 17.4949 6.24296 17.1 4.95324C16.9068 4.32231 16.633 3.86366 16.2604 3.56013C15.8938 3.26149 15.3805 3.07145 14.625 3.07145C13.7363 3.07145 13.1159 2.90568 12.7096 2.54234C12.2963 2.17266 12.2096 1.68753 12.1615 1.35789C12.1539 1.30581 12.1474 1.25862 12.1414 1.2149C12.1261 1.10286 12.1139 1.01353 12.0936 0.922753C12.0676 0.806546 12.0378 0.739806 12.0062 0.696405C11.9673 0.643114 11.8366 0.500039 11.25 0.500045L11.25 0.500045L6.75 0.50002C6.16339 0.500013 6.03269 0.643086 5.99381 0.696398C5.96215 0.739808 5.93234 0.806555 5.90634 0.922765C5.88604 1.01354 5.87381 1.10287 5.85847 1.2149C5.85248 1.25863 5.84602 1.30582 5.83842 1.35791C5.79033 1.68755 5.70353 2.17268 5.2902 2.54235C4.88395 2.90567 4.26352 3.07145 3.37482 3.07145C2.61649 3.07145 2.10241 3.25775 1.7363 3.55094C1.36513 3.84818 1.09229 4.29829 0.899631 4.9227C0.505184 6.20109 0.500005 8.00961 0.500005 10.1626L0.500005 10.1633Z" stroke="#083C5A" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="0.75" cy="0.75" r="0.75" transform="matrix(-1 0 0 1 14.25 5.25)" fill="#083C5A" />
            <circle cx="3.75" cy="3.75" r="3.25" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 12.75 13.5)" stroke="#083C5A" />
         </svg>
         گرفتن عکس
      </button>
   );
};

export default AddImageBtn;