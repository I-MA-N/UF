import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import ProfileBtn from "./components/ProfileBtn";
import GUserData from "../../api/common/GUserData";
import UserDataProvider from "../authentication/UserDataProvider";
import { useEffect } from "react";
import LogoutBtn from "./components/LogoutBtn";

type SetStyleFuncProps = {
   isActive: boolean
}

function UserHeader() {
   const { data } = GUserData();
   const { pathname } = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      if (data?.role && pathname.split('/')[1] !== data.role) {
         navigate(`/${data?.role}/dashboard`)
      }
   }, [pathname, data, navigate])

   return (
      <>
         <nav className="container fixed left-1/2 -translate-x-1/2 mt-5 text-green z-[5] print:hidden">
            <div className="h-11 lg:h-14 rounded-full bg-secondary px-4 xs:px-9 lg:px-16 flex justify-between items-center">
               <div className="flex justify-between items-center gap-2 xs:gap-4 lg:gap-10">
                  <ProfileBtn role={data?.role} />
                  
                  <NavLink to={`/${data?.role}/home`} className={({ isActive }: SetStyleFuncProps) => isActive ? 'font-Estedad-Black before:opacity-100 navlink' : ' navlink'}>
                     یوفیت
                  </NavLink>
                  <NavLink to={`/${data?.role}/aboutus`} className={({ isActive }: SetStyleFuncProps) => isActive ? 'font-Estedad-Black before:opacity-100 navlink' : ' navlink'}>
                     درباره ما
                  </NavLink>
               </div>
               <LogoutBtn />
            </div>
         </nav>
         {
            data &&
            <UserDataProvider userData={data}>
               <Outlet />
            </UserDataProvider>
         }
      </>
   )
}

export default UserHeader