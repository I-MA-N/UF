import Btn from "../../../../common/Btn";

type OrgModalProps = {
   orgSelected: string,
   setOrgSelected: React.Dispatch<React.SetStateAction<string>>,
   setOrgModal: React.Dispatch<React.SetStateAction<boolean>>,
   orgsName: string[],
}

function OrgModal({ orgSelected, setOrgSelected, setOrgModal, orgsName }: OrgModalProps) {
   const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setOrgSelected((e.target as HTMLButtonElement).textContent!);
      setOrgModal(false);
   }

   return (
      <div className="modal">
         <button onClick={() => setOrgModal(false)} className="flex gap-0.5 items-center mb-4.5 bg-primary text-yellow py-2 px-4 rounded-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            خروج
         </button>
         <div className="w-[300px] bg-white text-primary text-xs rounded-[32px] overflow-hidden">
            <Btn
               text={orgSelected}
               type="button"
               icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" fill="none" className="w-3.5">
                  <path d="M0.999999 7L7 1L13 7" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>}
               className="w-full shadow"
               onClick={clickHandler}
            />
            <div className="mt-3.5">
               {
                  orgsName.map(orgName => (
                     <button key={orgName} className="org-modal-item" onClick={clickHandler}>{orgName}</button>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default OrgModal