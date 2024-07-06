import { NavLink, Outlet, useNavigate } from "react-router-dom"
import checkAuthentication from "../authentication/checkAuthentication";
import { useEffect } from "react";

type SetStyleFuncProps = {
    isActive: boolean
}

function Header() {
    const role = checkAuthentication();
    const navigate = useNavigate();

    useEffect(() => {
        if (role) {
            navigate(`/${role}/home`)
        }
    }, [role])

    return (
        <>
            <nav className="container fixed left-1/2 -translate-x-1/2 mt-5 text-green z-[5] print:hidden">
                <div className="flex justify-between lg:justify-start items-center lg:gap-10 h-11 lg:h-14 rounded-full bg-secondary px-9 lg:px-16">
                    <NavLink to="/" className={({ isActive }: SetStyleFuncProps) => isActive ? 'font-Estedad-Black before:opacity-100 navlink' : ' navlink'}>
                        یوفیت
                    </NavLink>
                    <NavLink to="/aboutus" className={({ isActive }: SetStyleFuncProps) => isActive ? 'font-Estedad-Black before:opacity-100 navlink' : ' navlink'}>
                        درباره ما
                    </NavLink>
                    <NavLink to="/login" className={({ isActive }: SetStyleFuncProps) => isActive ? 'font-Estedad-Black before:opacity-100 navlink' : ' navlink'}>
                        ورود
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Header