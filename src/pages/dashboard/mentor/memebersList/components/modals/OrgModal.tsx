import { useState } from "react";
import TopElems from "../../../../common/components/topElems/TopElems";
import Modal from "../../../../../common/Modal";

type OrgModalProps = {
   orgSelected: string,
   setOrgSelected: React.Dispatch<React.SetStateAction<string>>,
   setOrgModal: React.Dispatch<React.SetStateAction<boolean>>,
   orgNames: string[],
}

function OrgModal({ orgSelected, setOrgSelected, setOrgModal, orgNames }: OrgModalProps) {
   const [filteredOrgs, setFilteredOrgs] = useState(orgNames);

   return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn clickHandler={() => setOrgModal(false)} />
            <Modal.Title text="انتخاب سازمان" />
         </Modal.Header>
         <Modal.Body className="!p-0 overflow-hidden">
            <TopElems
               items={orgNames}
               selectedItem={orgSelected}
               setFilteredItems={setFilteredOrgs}
               inputPlaceholder="جستجوی نام سازمان"
            />

            <div className={`flex flex-col items-center max-h-60 overflow-y-auto divide-y divide-white ${filteredOrgs.length ? "py-0" : "py-4"}`}>
               {
                  filteredOrgs.length ?
                     filteredOrgs.map(orgName => (
                        <button
                           key={orgName}
                           className="w-full py-3.5 hover:bg-secondary hover:text-white text-sm lg:text-base break-words last:rounded-b-[32px] transition-all"
                           onClick={e => {
                              setOrgSelected(e.currentTarget.innerText);
                              setOrgModal(false);
                           }}
                        >
                           {orgName}
                        </button>
                     ))
                     :
                     <span className="text-sm lg:text-base text-yellow">سازمان مورد نظر یافت نشد.</span>
               }
            </div>
         </Modal.Body>
      </Modal>
   )
}

export default OrgModal