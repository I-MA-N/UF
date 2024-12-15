type TopElemsProps = {
   addMentorError: boolean,
   setInfoError: boolean
}

function TopElems({ addMentorError, setInfoError }: TopElemsProps) {
   return (
      <>
         <p className="text-xs lg:text-sm mx-auto text-center text-yellow">
            نام کاربری قابل استفاده است! می توانید مربی جدید را اضافه کنید
         </p>

         {
            addMentorError &&
            <p className="text-xs lg:text-sm text-center text-red min-h-4 my-4">
               اضافه کردن مربی با مشکل مواجه شد!
            </p>
         }
         
         {
            setInfoError &&
            <p className="text-xs lg:text-sm text-center text-red min-h-4 my-4">
               در اعمال اطلاعات برای مربی مورد نظر مشکل ایجاد شده
            </p>
         }
      </>
   );
};

export default TopElems;