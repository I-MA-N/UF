import DAYS from "../constants/days/DAYS";

type ImagesHeaderProps = {
   index: number,
   length: number
}

function ImagesHeader({ index, length }: ImagesHeaderProps) {
   return (
      <tr className="table-header">
         <th>شماره</th>
         <th>
            <div className='flex items-center justify-center gap-1'>
               <span>روز {DAYS[index as keyof typeof DAYS]}</span>
               <div className='w-2 h-0.5 bg-white' />
               <span>{length} حرکت</span>
            </div>
         </th>
      </tr>
   );
};

export default ImagesHeader;