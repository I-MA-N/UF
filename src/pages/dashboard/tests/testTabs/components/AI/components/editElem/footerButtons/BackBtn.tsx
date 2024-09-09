import usePhotoStore from "../../../../../../store/photoStore";

function BackBtn() {
   const removePhoto = usePhotoStore(state => state.removePhoto);

   return (
      <button
         type="button"
         onClick={() => removePhoto()}
         className="h-full flex items-center gap-2 px-8 text-sm border rounded-full bg-primary"
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 10" fill="none" className="size-4">
            <path d="M10.0001 0.833496L14.1667 5.00016M14.1667 5.00016H0.833415M14.1667 5.00016L10.0001 9.16683" stroke="#E4F4FD" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
         برگشت
      </button>
   );
};

export default BackBtn;