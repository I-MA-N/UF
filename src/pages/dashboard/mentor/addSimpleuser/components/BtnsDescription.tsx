import { useNavigate } from "react-router-dom";
import Btn from "../../../../common/Btn"
import PrevBtn from "../../../../common/PrevBtn"

function BtnsDescription({ userStatus }: { userStatus: any }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-4 items-center mt-12">
        <Btn
          text="مرحله بعد"
          type="submit"
          icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
            <path d="M10.625 1L15 5.375M15 5.375H1M15 5.375L10.625 9.75" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>}
          className="pr-3"
          isDisabled={userStatus?.status === 'belongs another org' || userStatus?.status === 'not simpleuser'}
        />
        <PrevBtn type="button" onClick={() => navigate("/mentor/dashboard/memberslist", { replace: true })} />
      </div>
      <p className="text-xs text-center mt-4 font-Estedad-ExtraLight">
        <span className="text-yellow">توجه: </span>
        این اطلاعات برای ایجاد کاربر و ارتباط مجدد با او ضروری است
      </p>
    </>
  )
}

export default BtnsDescription