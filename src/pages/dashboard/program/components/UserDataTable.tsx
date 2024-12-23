type UserDataTableProps = {
   isError: boolean,
   name: string | undefined,
   gender: string | undefined
}

function UserDataTable({ isError, name, gender }: UserDataTableProps) {
   return (
      <div className="relative p-2 bg-white text-primary text-sm">
         <span className="absolute top-2 right-2 hidden print:block">یوفیت</span>

         {
            isError ?
               <span>دریافت اطلاعات عمومی کاربر با مشکل مواجه شد.</span>
               :
               <>
                  <div className="flex gap-1 items-center justify-center mb-4">
                     <span>جنسیت:</span>
                     <span>{gender || 'در پروفایل این کاربر پر نشده است.'}</span>
                  </div>

                  <div className="flex gap-1 items-center justify-center">
                     <span>نام و نام خانوادگی:</span>
                     <span>{name || 'در پروفایل این کاربر پر نشده است.'}</span>
                  </div>
               </>
         }

         <a
            href="https://mojba.ir"
            className="absolute top-2 left-2 underline decoration-primary hidden print:block"
         >
            mojba.ir
         </a>
      </div>
   );
};

export default UserDataTable;