import { useNavigate } from "react-router-dom";

type ExitModalProps = {
   setShowExitModal: React.Dispatch<React.SetStateAction<boolean>>,
}

function ExitModal({ setShowExitModal }: ExitModalProps) {
   const navigate = useNavigate();

   return (
      <div className="modal">
         <div className="w-[298px] xs:w-80 bg-white text-primary rounded-[32px] p-12 text-sm/7">
            <span className="inline-block mx-auto text-primary text-center">آیا از خروج مطمئنید؟ (اگر ذخیره نکرده باشید، تغییرات شما اعمال نمی شود)</span>
            <div className="flex items-center justify-center gap-16 mt-4">
               <button
                  className="text-secondary"
                  onClick={() => navigate(-1)}
               >
                  بله
               </button>
               <button
                  className="text-yellow"
                  onClick={() => setShowExitModal(false)}
               >
                  خیر
               </button>
            </div>
         </div>
      </div>
   );
};

export default ExitModal;