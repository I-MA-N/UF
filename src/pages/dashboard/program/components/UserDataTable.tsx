type UserDataTableProps = {
   isError: boolean,
   name: string | undefined,
   age: number | undefined
}

function UserDataTable({ isError, name, age }: UserDataTableProps) {
   return (
      <div className="p-2 bg-white text-primary text-sm space-y-4">
         {
            isError ? <span>دریافت اطلاعات شخصی این کاربر با مشکل مواجه شد.</span>
               : <>
                  <div className="flex gap-1 items-center justify-center">
                     <span>سن:</span>
                     <span>{age || 'در پروفایل این کاربر پر نشده است.'}</span>
                  </div>

                  <div className="flex gap-1 items-center justify-center">
                     <span>نام و نام خانوادگی:</span>
                     <span>{name || 'در پروفایل این کاربر پر نشده است.'}</span>
                  </div>
               </>
         }
      </div>
   );
};

export default UserDataTable;