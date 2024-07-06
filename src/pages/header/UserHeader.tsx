import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom"
import ProfileBtn from "./ProfileBtn";
import GUserData from "../../api/common/GUserData";
import UserDataProvider from "../authentication/UserDataProvider";
import { useEffect } from "react";

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
            <div className="flex justify-between lg:justify-end lg:flex-row-reverse items-center lg:gap-10 h-11 lg:h-14 rounded-full bg-secondary px-9 lg:px-16">
               <NavLink to={`/${data?.role}/home`} className={({ isActive }: SetStyleFuncProps) => isActive ? 'font-Estedad-Black before:opacity-100 navlink' : ' navlink'}>
                  یوفیت
               </NavLink>
               <NavLink to={`/${data?.role}/aboutus`} className={({ isActive }: SetStyleFuncProps) => isActive ? 'font-Estedad-Black before:opacity-100 navlink' : ' navlink'}>
                  درباره ما
               </NavLink>
               <ProfileBtn role={data?.role} />
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