import { useNavigate } from "react-router-dom";
import Btn from "../../../common/Btn";

function TopInfo() {
   const navigate = useNavigate();

   return (
      <div className="print:hidden mb-10">
         <p className='text-sm lg:text-base text-yellow text-center'>
            نکته: گزینه
            <span className='font-Estedad-Black mx-1'>save as pdf</span>
            را انتخاب و همچنین گزینه
            <span className='font-Estedad-Black mx-1'>background graphics</span>
            را تیک بزنید تا بهترین حالت پی دی اف را بتوانید دانلود کنید.
         </p>

         <div className='flex items-center justify-between mt-4'>
            <button
               className="relative w-64 lg:w-80 h-14 flex items-center justify-center bg-transparent text-white text-sm lg:text-base rounded-[48px] border-2 border-white"
               onClick={() => navigate(-1)}
            >
               <span className="text-yellow">برگشت</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className="w-4.5 lg:w-5 absolute left-6 top-1/2 -translate-y-1/2">
                  <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>
            <Btn
               text='دانلود PDF'
               type='button'
               icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" fill="none" className='w-5'>
                  <path d="M17 10L12 15M12 15L7 10M12 15L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M5 5.296C5 4.62866 4.36871 4.13099 3.74865 4.37771C0.806956 5.54824 0 7.98146 0 12.7057C0 20.3595 2.118 21.9999 12 21.9999C21.882 21.9999 24 20.3595 24 12.7057C24 7.98146 23.193 5.54824 20.2514 4.37771C19.6313 4.13099 19 4.62866 19 5.296C19 5.74846 19.3009 6.13662 19.714 6.32119C20.0273 6.46119 20.2776 6.61212 20.4811 6.7697C21.4189 7.49607 22 8.88206 22 12.7057C22 16.5294 21.4189 17.9154 20.4811 18.6418C19.9576 19.0472 19.1238 19.4087 17.7047 19.653C16.2861 19.8972 14.436 19.9999 12 19.9999C9.56404 19.9999 7.71385 19.8972 6.2953 19.653C4.87622 19.4087 4.04241 19.0472 3.51891 18.6418C2.58107 17.9154 2 16.5294 2 12.7057C2 8.88206 2.58107 7.49607 3.51891 6.7697C3.72237 6.61212 3.97269 6.46119 4.28602 6.32119C4.69912 6.13662 5 5.74846 5 5.296Z" fill="currentColor" />
               </svg>}
               onClick={() => window.print()}
            />
         </div>
      </div>
   );
};

export default TopInfo;