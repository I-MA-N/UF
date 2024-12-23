import { useEffect, useState } from "react"
import GUserData from '../../../../../../api/common/GUserData'
import Modal from '../../../../../common/Modal'
import Loading from '../../../../../common/Loading'
import UserModal from "./UserModal"

type UserModalFirstLoadProps = {
   username: string,
   setUsername: React.Dispatch<React.SetStateAction<string | null>>,
   orgSelected: string
}

function UserModalFirstLoad({ username, setUsername, orgSelected }: UserModalFirstLoadProps) {
   const [showModal, setShowModal] = useState(true);
   const { data, isError, isPending } = GUserData(username);

   useEffect(() => {
      if (!showModal) setUsername(null);
   }, [showModal])

   return (
      <>
         <Modal>
            <Modal.Header>
               <Modal.CloseBtn setShowModal={setShowModal} />
               <Modal.Title text='پروفایل کاربر' />
            </Modal.Header>

            <Modal.Body className='!p-0'>
               {
                  isPending &&
                  <div className="py-16">
                     <Loading />
                  </div>
               }

               {
                  isError &&
                  <div className="flex flex-col items-center gap-4 text-yellow py-12">
                     <p className="max-w-48 text-center text-sm lg:text-base">
                        دریافت اطلاعات کاربر با مشکل مواجه شد.
                     </p>
                     <svg className="size-4 lg:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z" fill="currentColor" />
                     </svg>
                  </div>
               }

               {
                  data &&
                  <UserModal
                     data={data}
                     orgName={orgSelected}
                  />
               }
            </Modal.Body>
         </Modal>
      </>
   )
}

export default UserModalFirstLoad