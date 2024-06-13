import { useState } from "react"
import { Link } from "react-router-dom";
import PLogout from "../../api/common/PLogout";

type ProfileBtnProps = {
   role: string | undefined
}

function ProfileBtn({ role }: ProfileBtnProps) {
   const [showBox, setShowBox] = useState(false);
   const { mutate } = PLogout();

   return (
      <div
         onClick={() => setShowBox(prevValue => !prevValue)}
         className="relative cursor-pointer"
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none" className="w-4.5 md:w-5 lg:w-6">
            <path d="M1.35 14.75C1.35 15.486 1.4389 15.9993 1.6227 16.3752C1.79539 16.7284 2.07621 17.0098 2.57558 17.2368C3.09456 17.4727 3.83785 17.6436 4.90508 17.7514C5.96655 17.8586 7.30747 17.9 9 17.9C10.6925 17.9 12.0334 17.8586 13.0949 17.7514C14.1622 17.6436 14.9054 17.4727 15.4244 17.2368C15.9238 17.0098 16.2046 16.7284 16.3773 16.3752C16.5611 15.9993 16.65 15.486 16.65 14.75C16.65 14.014 16.5611 13.5007 16.3773 13.1248C16.2046 12.7716 15.9238 12.4902 15.4244 12.2632C14.9054 12.0273 14.1622 11.8564 13.0949 11.7486C12.0334 11.6414 10.6925 11.6 9 11.6C7.30747 11.6 5.96655 11.6414 4.90508 11.7486C3.83785 11.8564 3.09456 12.0273 2.57558 12.2632C2.07621 12.4902 1.79539 12.7716 1.6227 13.1248C1.4389 13.5007 1.35 14.014 1.35 14.75Z" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="4.5" cy="4.5" r="3.9" transform="matrix(-1 0 0 1 13.5 0.5)" stroke="#E4F4FD" strokeWidth="1.2" />
         </svg>
         {
            showBox &&
            <div className="profile-box">
               <button
                  onClick={() => mutate()}
                  className="flex items-center justify-center mx-auto gap-2"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16" fill="none" className="w-3.5 md:w-5">
                     <path d="M0.55 7.99999C0.55 9.56002 0.591495 10.6752 0.726329 11.5065C0.859803 12.3294 1.07685 12.8199 1.38932 13.1714C1.70782 13.5297 2.17801 13.8038 2.94381 14.0899C3.51234 14.3022 4.19605 14.5051 5.04565 14.7573C5.35115 14.848 5.6781 14.945 6.02885 15.0511C7.29701 15.4349 8.21719 15.5219 8.88651 15.3965C9.52414 15.2771 9.96455 14.9602 10.2937 14.4305C10.6395 13.8742 10.8711 13.0667 11.0101 11.9694C11.1482 10.8791 11.1891 9.55535 11.1891 7.99999C11.1891 6.44463 11.1482 5.12089 11.0101 4.03055C10.8711 2.93332 10.6395 2.12575 10.2937 1.56948C9.96455 1.03981 9.52414 0.722935 8.88651 0.603494C8.21718 0.478115 7.29701 0.565126 6.02885 0.948834C5.67814 1.05495 5.35123 1.15197 5.04576 1.24263C4.19611 1.4948 3.51237 1.69773 2.94381 1.9101C2.17801 2.19614 1.70782 2.47027 1.38932 2.82855C1.07685 3.18005 0.859804 3.67056 0.726329 4.49348C0.591495 5.32479 0.55 6.43996 0.55 7.99999Z" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     <ellipse cx="0.652174" cy="0.64" rx="0.652174" ry="0.64" transform="matrix(-1 0 0 1 9.13049 7.46814)" fill="#083C5A" />
                     <path d="M11.0869 13.76C14.3478 13.76 14.3478 12.9818 14.3478 8.10357C14.3478 3.22532 14.3478 2.23999 11.0869 2.23999" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  خروج
               </button>
               <Link to={`/${role}/dashboard`} className="flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16" fill="none" className="w-3.5 md:w-5">
                     <path d="M0.6 12.6667C0.6 13.3169 0.678785 13.7612 0.83562 14.082C0.981353 14.3801 1.21835 14.6201 1.65032 14.8165C2.1019 15.0218 2.7542 15.1727 3.7001 15.2682C4.64025 15.3632 5.82952 15.4 7.33333 15.4C8.83715 15.4 10.0264 15.3632 10.9666 15.2682C11.9125 15.1727 12.5648 15.0218 13.0163 14.8165C13.4483 14.6201 13.6853 14.3801 13.831 14.082C13.9879 13.7612 14.0667 13.3169 14.0667 12.6667C14.0667 12.0164 13.9879 11.5721 13.831 11.2513C13.6853 10.9533 13.4483 10.7132 13.0163 10.5168C12.5648 10.3116 11.9125 10.1607 10.9666 10.0651C10.0264 9.97014 8.83715 9.93333 7.33333 9.93333C5.82952 9.93333 4.64025 9.97014 3.7001 10.0651C2.7542 10.1607 2.1019 10.3116 1.65032 10.5168C1.21835 10.7132 0.981353 10.9533 0.83562 11.2513C0.678785 11.5721 0.6 12.0164 0.6 12.6667Z" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                     <circle cx="4" cy="4" r="3.4" transform="matrix(-1 0 0 1 11.3334 0)" stroke="#083C5A" strokeWidth="1.2" />
                  </svg>
                  پروفایل
               </Link>
            </div>
         }
      </div>
   )
}

export default ProfileBtn