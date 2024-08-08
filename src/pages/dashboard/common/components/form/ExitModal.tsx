import { Link } from "react-router-dom";

type ExitModalProps = {
   setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
   linkTo: string
}

function ExitModal({ setShowModal, linkTo }: ExitModalProps) {
   return (
      <div className="modal">
         <div className="w-[298px] xs:w-80 bg-white text-primary rounded-[32px] p-12 text-sm/7">
            <span className="inline-block mx-auto text-primary text-center">آیا از خروج مطمئنید؟ (اگر ذخیره نکرده باشید، تغییرات شما اعمال نمی شود)</span>
            <div className="flex items-center justify-center gap-16 mt-4">
               <Link
                  to={linkTo}
                  className="text-secondary"
               >
                  بله
               </Link>
               <button
                  className="text-yellow"
                  onClick={() => setShowModal(false)}
               >
                  خیر
               </button>
            </div>
         </div>
      </div>
   );
};

export default ExitModal;