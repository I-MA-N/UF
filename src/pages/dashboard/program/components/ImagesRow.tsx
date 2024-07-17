import Exercise from "../../../../types/Exercise";

type ImagesRowProps = {
   row: Pick<Exercise, "name" | "images">,
   type: 'Fitness' | 'Corrective',
   rowId: number
}

function ImagesRow({ row, rowId }: ImagesRowProps) {
   const baseUrl = `${import.meta.env.VITE_ENDPOINT}/static`;

   return (
      <tr>
         <td>{rowId}</td>
         <td className='p-1'>
            <span className='inline-block mb-1'>{row.name}</span>

            <div className='flex flex-wrap items-center justify-center gap-1'>
               {
                  row.images.map((src, index) => (
                     <img
                        key={index}
                        src={`${baseUrl}${src}`} 
                        className='w-[120px]' 
                        alt={`${row.name} Image`} 
                     />
                  ))
               }
            </div>
         </td>
      </tr>
   );
};

export default ImagesRow;