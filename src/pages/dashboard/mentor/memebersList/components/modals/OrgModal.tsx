import { useState } from "react";
import TopElems from "./orgModal/TopElems";

type OrgModalProps = {
   orgSelected: string,
   setOrgSelected: React.Dispatch<React.SetStateAction<string>>,
   setOrgModal: React.Dispatch<React.SetStateAction<boolean>>,
   orgNames: string[],
}

function OrgModal({ orgSelected, setOrgSelected, setOrgModal, orgNames }: OrgModalProps) {
   const [selectedOrgs, setSelectedOrgs] = useState(orgNames);

   return (
      <div className="modal">
         <button onClick={() => setOrgModal(false)} className="flex gap-0.5 items-center mb-4.5 bg-primary text-yellow lg:text-lg py-2 px-4 lg:px-5 rounded-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="w-4 lg:w-5">
               <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            خروج
         </button>
         
         <div className="w-[300px] lg:w-96 bg-white text-primary rounded-[32px] relative">
            <TopElems
               orgNames={orgNames}
               orgSelected={orgSelected}
               setSelectedOrgs={setSelectedOrgs}
            />

            <div className="flex flex-col items-center mt-3.5 max-h-60 overflow-y-scroll divide-y divide-primary">
               {
                  selectedOrgs.map(orgName => (
                     <button
                        key={orgName}
                        className="w-[150px] py-3.5 hover:bg-secondary hover:text-white text-sm lg:text-base break-words"
                        onClick={e => {
                           setOrgSelected(e.currentTarget.innerText);
                           setOrgModal(false);
                        }}
                     >
                        {orgName}
                     </button>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default OrgModal