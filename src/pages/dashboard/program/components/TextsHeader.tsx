import DAYS from "../constants/days/DAYS";

type TextsHeaderProps = {
   index: number,
   length: number
}

function TextsHeader({ index, length }: TextsHeaderProps) {
   return (
      <>
         <tr className="table-header">
            <th colSpan={8}>
               <div className='flex items-center justify-center gap-1'>
                  <span>روز {DAYS[index as keyof typeof DAYS]}</span>
                  <div className='w-2 h-0.5 bg-white' />
                  <span>{length} حرکت</span>
               </div>
            </th>
         </tr>
         <tr className="table-header">
            <th>شماره</th>
            <th>تمرین</th>
            <th>تکرار</th>
            <th>ست</th>
            <th>شدت</th>
            <th>ضرب آهنگ</th>
            <th>استراحت</th>
            <th>توضیحات</th>
         </tr>
      </>
   );
};

export default TextsHeader;