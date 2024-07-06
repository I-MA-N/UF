import Btn from "../../../../../common/Btn";

type MentorModalPropsType = {
   mentorSelected: string,
   setMentorSelected: React.Dispatch<React.SetStateAction<string>>,
   setMentorModal: React.Dispatch<React.SetStateAction<boolean>>,
   mentorNames: string[],
}

function MentorModal({ mentorSelected, setMentorSelected, setMentorModal, mentorNames }: MentorModalPropsType) {
   const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setMentorSelected((e.target as HTMLButtonElement).textContent!);
      setMentorModal(false);
   }

   return (
      <div className="modal">
         <button onClick={() => setMentorModal(false)} className="flex gap-0.5 items-center mb-4.5 bg-primary text-yellow lg:text-lg py-2 px-4 lg:px-5 rounded-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="w-4 lg:w-5">
               <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            خروج
         </button>
         <div className="w-[300px] lg:w-96 bg-white text-primary text-xs lg:text-sm rounded-[32px]">
            <Btn
               text={mentorSelected}
               type="button"
               icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" fill="none" className="w-3.5">
                  <path d="M0.999999 7L7 1L13 7" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>}
               className="w-full shadow"
               onClick={clickHandler}
            />
            <div className="mt-3.5">
               {
                  mentorNames.map(mentorName => (
                     <button key={mentorName} className="org-modal-item" onClick={clickHandler}>{mentorName}</button>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default MentorModal