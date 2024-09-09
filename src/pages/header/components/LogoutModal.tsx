import PLogout from "../../../api/common/PLogout";

type LogoutModalProps = {
   setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

function LogoutModal({ setShowModal }: LogoutModalProps) {
   const { mutate } = PLogout();

   return (
      <div className="modal">
         <div>
            <button
               type="button"
               onClick={() => setShowModal(false)}
               className="flex items-center justify-center size-11 border-2 border-yellow bg-primary text-yellow rounded-full mb-2 mr-4"
            >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="w-5">
                  <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>

            <div className="bg-primary rounded-[32px] border-2 border-white text-sm p-8">
               <p className="text-center mb-4 max-w-60">آیا برای خروج از حساب کاربری خود مطمئن هستید؟</p>

               <div className="w-full flex gap-20 justify-center">
                  <button
                     type="button"
                     className="text-secondary underline underline-offset-[6px]"
                     onClick={() => mutate()}
                  >
                     بله
                  </button>
                  <button
                     type="button"
                     className="text-red underline underline-offset-[6px]"
                     onClick={() => setShowModal(false)}
                  >
                     خیر
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LogoutModal;