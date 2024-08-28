import { NavLink } from "react-router-dom";

type ProfileBtnProps = {
   role: string | undefined
}

type SetStyleFuncProps = {
   isActive: boolean
}

function ProfileBtn({ role }: ProfileBtnProps) {
   return (
      <NavLink
         to={`/${role}/dashboard`}
         className={({ isActive }: SetStyleFuncProps) => (
            `
            flex items-center justify-center gap-1 md:gap-2 navlink
            ${isActive ? "font-Estedad-Black before:opacity-100" : ""}
            `
         )}
         children={({ isActive }) => (
            <>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16" fill="none" className="w-4 lg:w-5 font-bold">
                  <path d="M0.6 12.6667C0.6 13.3169 0.678785 13.7612 0.83562 14.082C0.981353 14.3801 1.21835 14.6201 1.65032 14.8165C2.1019 15.0218 2.7542 15.1727 3.7001 15.2682C4.64025 15.3632 5.82952 15.4 7.33333 15.4C8.83715 15.4 10.0264 15.3632 10.9666 15.2682C11.9125 15.1727 12.5648 15.0218 13.0163 14.8165C13.4483 14.6201 13.6853 14.3801 13.831 14.082C13.9879 13.7612 14.0667 13.3169 14.0667 12.6667C14.0667 12.0164 13.9879 11.5721 13.831 11.2513C13.6853 10.9533 13.4483 10.7132 13.0163 10.5168C12.5648 10.3116 11.9125 10.1607 10.9666 10.0651C10.0264 9.97014 8.83715 9.93333 7.33333 9.93333C5.82952 9.93333 4.64025 9.97014 3.7001 10.0651C2.7542 10.1607 2.1019 10.3116 1.65032 10.5168C1.21835 10.7132 0.981353 10.9533 0.83562 11.2513C0.678785 11.5721 0.6 12.0164 0.6 12.6667Z" stroke="currentColor" strokeWidth={`${isActive ? '2' : '1.2'}`} strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="4" r="3.4" transform="matrix(-1 0 0 1 11.3334 0)" stroke="currentColor" strokeWidth={`${isActive ? '2' : '1.2'}`} />
               </svg>
               پروفایل
            </>
         )}
      />
   )
}

export default ProfileBtn