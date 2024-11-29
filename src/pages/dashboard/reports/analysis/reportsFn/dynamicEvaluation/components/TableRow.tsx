import { FormDataInputType } from "../../../../../../../types/FormDataType";

type TableRowProps = {
   title: string,
   image: string,
   imgDirection: string,
   description: string,
   inputData: FormDataInputType
}

function TableRow({ title, image, imgDirection, description, inputData }: TableRowProps) {
   return (
      <>
         <td className="relative p-2">
            {title}
            {
               inputData?.isLastValueByAI &&
               <div className="absolute top-1 right-1 lg:top-2 lg:right-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className="size-4 lg:size-5">
                     <path d="M9 11C9 11.5948 9.03318 12.0045 9.09752 12.294C9.15934 12.5722 9.23587 12.6745 9.28067 12.7193C9.32547 12.7641 9.42779 12.8407 9.70596 12.9025C9.99547 12.9668 10.4052 13 11 13C11.5948 13 12.0045 12.9668 12.294 12.9025C12.5722 12.8407 12.6745 12.7641 12.7193 12.7193C12.7641 12.6745 12.8407 12.5722 12.9025 12.294C12.9668 12.0045 13 11.5948 13 11C13 10.4052 12.9668 9.99547 12.9025 9.70596C12.8407 9.42779 12.7641 9.32547 12.7193 9.28067C12.6745 9.23587 12.5722 9.15934 12.294 9.09752C12.0045 9.03318 11.5948 9 11 9C10.4052 9 9.99547 9.03318 9.70596 9.09752C9.42779 9.15934 9.32547 9.23587 9.28067 9.28067C9.23587 9.32547 9.15934 9.42779 9.09752 9.70596C9.03318 9.99547 9 10.4052 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M9 0C9.55229 0 10 0.447715 10 1V3L9.99993 3.01234C10.3192 3.00393 10.6524 3 11 3C11.3476 3 11.6808 3.00393 12.0001 3.01234L12 3V1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1V3C14 3.05033 13.9963 3.0998 13.9891 3.14814C17.1839 3.54286 18.4571 4.81613 18.8519 8.0109C18.9002 8.00372 18.9497 8 19 8H21C21.5523 8 22 8.44771 22 9C22 9.55229 21.5523 10 21 10H19L18.9877 9.99992C18.9961 10.3192 19 10.6524 19 11C19 11.3476 18.9961 11.6808 18.9877 12.0001L19 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H19C18.9497 14 18.9002 13.9963 18.8519 13.9891C18.4571 17.1839 17.1839 18.4571 13.9891 18.8519C13.9963 18.9002 14 18.9497 14 19V21C14 21.5523 13.5523 22 13 22C12.4477 22 12 21.5523 12 21V19L12.0001 18.9877C11.6808 18.9961 11.3476 19 11 19C10.6524 19 10.3192 18.9961 9.99992 18.9877L10 19V21C10 21.5523 9.55229 22 9 22C8.44771 22 8 21.5523 8 21V19C8 18.9497 8.00372 18.9002 8.0109 18.8519C4.81613 18.4571 3.54286 17.1839 3.14813 13.9891C3.0998 13.9963 3.05033 14 3 14H1C0.447715 14 0 13.5523 0 13C0 12.4477 0.447715 12 1 12H3C3.00412 12 3.00824 12 3.01234 12.0001C3.00393 11.6808 3 11.3476 3 11C3 10.6524 3.00393 10.3192 3.01234 9.99992C3.00824 9.99997 3.00412 10 3 10H1C0.447715 10 0 9.55228 0 9C0 8.44771 0.447715 8 1 8H3C3.05033 8 3.0998 8.00372 3.14813 8.0109C3.54286 4.81613 4.81612 3.54286 8.0109 3.14814C8.00372 3.0998 8 3.05033 8 3V1C8 0.447715 8.44771 0 9 0ZM5.27593 14.5954C5.08841 13.7517 5 12.6014 5 11C5 9.39865 5.08841 8.24832 5.27593 7.40458C5.4584 6.58356 5.70706 6.18037 5.94371 5.94371C6.18037 5.70706 6.58356 5.4584 7.40459 5.27593C8.24833 5.08841 9.39865 5 11 5C12.6014 5 13.7517 5.08841 14.5954 5.27593C15.4164 5.4584 15.8196 5.70706 16.0563 5.94371C16.2929 6.18037 16.5416 6.58356 16.7241 7.40458C16.9116 8.24832 17 9.39865 17 11C17 12.6014 16.9116 13.7517 16.7241 14.5954C16.5416 15.4164 16.2929 15.8196 16.0563 16.0563C15.8196 16.2929 15.4164 16.5416 14.5954 16.7241C13.7517 16.9116 12.6014 17 11 17C9.39865 17 8.24833 16.9116 7.40459 16.7241C6.58356 16.5416 6.18037 16.2929 5.94371 16.0563C5.70706 15.8196 5.4584 15.4164 5.27593 14.5954Z" fill="currentColor" />
                  </svg>
               </div>
            }
         </td>

         <td className="p-2 text-[11px]/5 lg:text-sm/7">
            {
               inputData?.value === undefined ?
                  '-'
                  :
                  <p>
                     {
                        inputData?.value === "1"
                           ?
                           description
                           :
                           "طبیعی"
                     }
                  </p>
            }
         </td>

         <td className="p-1">
            {
               inputData?.value === undefined ?
                  '-'
                  :
                  <div className="relative size-fit mx-auto rounded-2xl overflow-hidden">
                     <img
                        alt="report-img"
                        src={`images/testsImages/dynamicEvaluation/${image}`}
                        className={imgDirection === 'vertical' ? 'w-24' : 'h-20'}
                     />
                     {
                        inputData?.value === "1" &&
                        <div
                           className="absolute top-0 left-0 flex items-center justify-center size-full bg-red/40 text-primary"
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-4 lg:w-6">
                              <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289L11 12.5858L9.20711 10.7929C8.81658 10.4024 8.18342 10.4024 7.79289 10.7929C7.40237 11.1834 7.40237 11.8166 7.79289 12.2071L10.2929 14.7071C10.6834 15.0976 11.3166 15.0976 11.7071 14.7071L16.7071 9.70711Z" fill="currentColor" />
                              <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </div>
                     }
                  </div>
            }
         </td>
      </>
   );
};

export default TableRow;