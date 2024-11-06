import { Link } from "react-router-dom";
import GenderStrings from "../../../../../../types/GenderStrings";

type ReportsTopBtnsProps = {
   setGender: React.Dispatch<React.SetStateAction<GenderStrings>>,
}

function ReportsTopBtns({ setGender }: ReportsTopBtnsProps) {
   return (
      <div className="flex w-full justify-between h-11 lg:h-[52px]">
         <select
            className="bg-transparent h-full rounded-full bg-white text-primary text-center text-sm lg:text-lg outline-none cursor-pointer"
            defaultValue="whole"
            onChange={e => setGender(e.target.value as GenderStrings)}
         >
            <option value="whole">مجموع</option>
            <option value="male">آقایان</option>
            <option value="female">بانوان</option>
         </select>

         <Link
            to="/simpleuser/dashboard/forms"
            className="btn w-fit h-auto p-3 gap-3"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </Link>
      </div>
   );
};

export default ReportsTopBtns;