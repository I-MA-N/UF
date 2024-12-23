import { useState } from "react";
import TopElems from "../../../../common/components/topElems/TopElems";
import Modal from "../../../../../common/Modal";

type MentorModalPropsType = {
   mentorSelected: string,
   setMentorSelected: React.Dispatch<React.SetStateAction<string>>,
   setMentorModal: React.Dispatch<React.SetStateAction<boolean>>,
   mentorNames: string[],
}

function MentorModal({ mentorSelected, setMentorSelected, setMentorModal, mentorNames }: MentorModalPropsType) {
   const [filteredMentors, setFilteredMentors] = useState(mentorNames);

   return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn setShowModal={setMentorModal} />
            <Modal.Title text="انتخاب مربی" />
         </Modal.Header>
         <Modal.Body className="!p-0 overflow-hidden">
            <TopElems
               items={mentorNames}
               selectedItem={mentorSelected}
               setFilteredItems={setFilteredMentors}
               inputPlaceholder="جستجوی نام مربی"
            />

            <div className={`flex flex-col items-center max-h-60 overflow-y-auto divide-y divide-white ${filteredMentors.length ? "py-0" : "py-4"}`}>
               {
                  filteredMentors.length ?
                     filteredMentors.map(orgName => (
                        <button
                           key={orgName}
                           className="w-full py-3.5 hover:bg-secondary hover:text-white text-sm lg:text-base break-words last:rounded-b-[32px]"
                           onClick={e => {
                              setMentorSelected(e.currentTarget.innerText);
                              setMentorModal(false);
                           }}
                        >
                           {orgName}
                        </button>
                     )) :
                     <span className="text-sm lg:text-base text-yellow">مربی مورد نظر یافت نشد.</span>
               }
            </div>
         </Modal.Body>
      </Modal>
   )
}

export default MentorModal