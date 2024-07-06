type TopInfoProps = {
   isError: boolean
}

function TopInfo({ isError }: TopInfoProps) {
   return (
      <>
         {
            isError &&
            <p className="text-yellow text-xs mb-4">مشکلی در دریافت اطلاعات کاربران این سازمان بوجود آمده است!</p>
         }

         <h2 className="text-center text-xs lg:text-sm mb-4">
            <span>افراد تحت نظر هر مربی در لیست زیر را میتوانید مشاهده کنید.</span>
         </h2>
      </>
   );
};

export default TopInfo;