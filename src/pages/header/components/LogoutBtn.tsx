type LogoutBtnProps = {
   setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

function LogoutBtn({ setShowModal }: LogoutBtnProps) {
   return (
      <>
         <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-1 md:gap-2 navlink"
         >
            خروج
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16" fill="none" className="w-4 lg:w-5">
               <path d="M0.55 7.99999C0.55 9.56002 0.591495 10.6752 0.726329 11.5065C0.859803 12.3294 1.07685 12.8199 1.38932 13.1714C1.70782 13.5297 2.17801 13.8038 2.94381 14.0899C3.51234 14.3022 4.19605 14.5051 5.04565 14.7573C5.35115 14.848 5.6781 14.945 6.02885 15.0511C7.29701 15.4349 8.21719 15.5219 8.88651 15.3965C9.52414 15.2771 9.96455 14.9602 10.2937 14.4305C10.6395 13.8742 10.8711 13.0667 11.0101 11.9694C11.1482 10.8791 11.1891 9.55535 11.1891 7.99999C11.1891 6.44463 11.1482 5.12089 11.0101 4.03055C10.8711 2.93332 10.6395 2.12575 10.2937 1.56948C9.96455 1.03981 9.52414 0.722935 8.88651 0.603494C8.21718 0.478115 7.29701 0.565126 6.02885 0.948834C5.67814 1.05495 5.35123 1.15197 5.04576 1.24263C4.19611 1.4948 3.51237 1.69773 2.94381 1.9101C2.17801 2.19614 1.70782 2.47027 1.38932 2.82855C1.07685 3.18005 0.859804 3.67056 0.726329 4.49348C0.591495 5.32479 0.55 6.43996 0.55 7.99999Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               <ellipse cx="0.652174" cy="0.64" rx="0.652174" ry="0.64" transform="matrix(-1 0 0 1 9.13049 7.46814)" fill="currentColor" />
               <path d="M11.0869 13.76C14.3478 13.76 14.3478 12.9818 14.3478 8.10357C14.3478 3.22532 14.3478 2.23999 11.0869 2.23999" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </button>
      </>
   )
}

export default LogoutBtn;