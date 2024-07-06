import { useNavigate } from "react-router-dom"
import Btn from "../../common/Btn"

type LoginBtnsProps = {
   isPending: boolean
}

function LoginBtns({ isPending }: LoginBtnsProps) {
   const navigate = useNavigate();

   return (
      <div className="flex flex-col justify-center mt-16">
         <Btn
            text={isPending ? 'در حال ورود' : 'ورود به حساب'}
            type="submit"
            className="w-full focus:bg-transparent focus:border focus:border-white focus:text-white"
         />
         <button 
            type="button" 
            className="text-xs lg:text-sm mt-3.5 pb-0.5 w-fit mx-auto border-b border-primary hover:border-white"
            onClick={() => navigate('/forgot-password')}
         >
            فراموشی رمز عبور
         </button>
      </div>
   )
}

export default LoginBtns