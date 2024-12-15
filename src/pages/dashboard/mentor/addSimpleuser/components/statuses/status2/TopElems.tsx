type TopElemsProps = {
   addUserError: boolean,
   setInfoError: boolean
}

function TopElems({ addUserError, setInfoError }: TopElemsProps) {
   return (
      <>
         <p className="text-xs lg:text-sm mx-auto text-center text-yellow">
            نام کاربری در سازمان وجود ندارد! می توانید کاربر جدیدی اضافه کنید.
         </p>

         {
            addUserError &&
            <p className="text-xs lg:text-sm text-center text-red min-h-4 my-4">
               مشکلی در اضافه کردن کاربر به وجود آمده است!
            </p>
         }
         {
            setInfoError &&
            <p className="text-xs lg:text-sm text-center text-red min-h-4 my-4">
               مشکلی در اعمال اطلاعات کاربر به وجود آمده است!
            </p>
         }
      </>
   );
};

export default TopElems;