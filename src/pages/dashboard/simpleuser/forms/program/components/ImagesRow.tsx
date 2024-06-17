import Exercise from "../../../../../../types/Exercise";

type ImagesRowProps = {
   row: Pick<Exercise, "id" | "name" | "images"> & {
      type: 'Fitness' | 'Corrective'
   }
}

function ImagesRow({ row }: ImagesRowProps) {
   const baseUrl = `${import.meta.env.VITE_ENDPOINT}/static/${row.type}`;

   return (
      <tr key={row.id} id={row.name}>
         <td className='p-1'>
            <span className='inline-block mb-1 text-base'>{row.name}</span>

            <div className='flex items-center justify-center gap-1'>
               {
                  row.images.map(src => (
                     <img 
                        src={`${baseUrl}/${src}`} 
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