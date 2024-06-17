type UserDataTableProps = {
   name: string,
   BMI: string,
   age: string
}

function UserDataTable({ name, BMI, age }: UserDataTableProps) {
   return (
      <div className="p-2 bg-white text-primary text-sm">
         <table className="mx-auto text-center" cellPadding={4}>
            <thead>
               <tr>
                  <th>سن</th>
                  <th className="px-8">نام نام خانوادگی</th>
                  <th>BMI</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>{age}</td>
                  <td className="px-8">{name}</td>
                  <td>{BMI}</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default UserDataTable;