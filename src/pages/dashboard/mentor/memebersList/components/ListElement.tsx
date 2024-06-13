type ListElementProps = {
   selectedUsers: any,
   data: any,
   setUsername: React.Dispatch<React.SetStateAction<string | null>>
}

function ListElement({ selectedUsers, data, setUsername }: ListElementProps) {
   return (
      selectedUsers ?
         selectedUsers.map((user: any) => 
            (<li
               key={user.username}
               className="flex items-center justify-between h-9 text-[10px] bg-white text-primary cursor-pointer"
               onClick={() => setUsername(user.username)}
            >
               <div className="flex justify-between items-center px-1.5 flex-grow">
                  <p className="line-clamp-1 mx-auto">{user.name || user.email}</p>
                  <p className="text-xs">|</p>
                  <p className="line-clamp-1 mx-auto">{user.username}</p>
               </div>
               <div className="w-px bg-primary h-full" />
               <div className="flex justify-center items-center gap-1.5 px-2.5">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-yellow">
                  <path d="M7 3.5H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.5 6H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 6C0.5 7.22384 0.566229 8.17317 0.730763 8.91351C0.894036 9.64817 1.14739 10.146 1.50068 10.4993C1.85397 10.8526 2.35183 11.106 3.08649 11.2692C3.82683 11.4338 4.77616 11.5 6 11.5C6.53872 11.5 7.02612 11.4872 7.46745 11.4584C9.04363 11.3556 9.94668 11.052 10.4993 10.4993C11.052 9.94668 11.3556 9.04363 11.4584 7.46745C11.4872 7.02612 11.5 6.53872 11.5 6C11.5 4.77616 11.4338 3.82683 11.2692 3.08649C11.106 2.35183 10.8526 1.85397 10.4993 1.50068C10.146 1.14739 9.64817 0.894036 8.91351 0.730763C8.17317 0.566229 7.22384 0.5 6 0.5C4.77616 0.5 3.82683 0.566229 3.08649 0.730763C2.35183 0.894036 1.85397 1.14739 1.50068 1.50068C1.14739 1.85397 0.894036 2.35183 0.730763 3.08649C0.566229 3.82683 0.5 4.77616 0.5 6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
               </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" className={user.age && user.name && user.phone && 'text-secondary'}>
                     <path d="M0.5 9.5C0.5 9.98492 0.558599 10.3097 0.67083 10.5406C0.773806 10.7525 0.940969 10.9245 1.25323 11.0673C1.58195 11.2176 2.06134 11.33 2.76424 11.4014C3.46237 11.4724 4.34682 11.5 5.46746 11.5C6.58809 11.5 7.47254 11.4724 8.17067 11.4014C8.87357 11.33 9.35296 11.2176 9.68168 11.0673C9.99394 10.9245 10.1611 10.7525 10.2641 10.5406C10.3763 10.3097 10.4349 9.98492 10.4349 9.5C10.4349 9.01508 10.3763 8.69032 10.2641 8.45941C10.1611 8.24754 9.99394 8.07547 9.68168 7.93269C9.35296 7.78238 8.87357 7.66998 8.17067 7.59855C7.47254 7.52761 6.58809 7.5 5.46746 7.5C4.34682 7.5 3.46237 7.52761 2.76424 7.59855C2.06134 7.66998 1.58195 7.78238 1.25323 7.93269C0.940969 8.07547 0.773806 8.24754 0.67083 8.45941C0.558599 8.69032 0.5 9.01508 0.5 9.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M2.98521 3C2.98521 4.38351 4.09934 5.5 5.46746 5.5C6.83557 5.5 7.94971 4.38351 7.94971 3C7.94971 1.61649 6.83557 0.5 5.46746 0.5C4.09934 0.5 2.98521 1.61649 2.98521 3Z" stroke="currentColor" />
                     <path d="M9.44385 5.25L10.1894 6L12.1776 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
            </li>))
         : data.map((user: any) => 
            (<li
               key={user.username}
               className="flex items-center justify-between h-9 text-[10px] bg-white text-primary cursor-pointer"
               onClick={() => setUsername(user.username)}
            >
               <div className="flex justify-between items-center px-1.5 flex-grow">
                  <p className="line-clamp-1 mx-auto">{user.name || user.email}</p>
                  <p className="text-xs">|</p>
                  <p className="line-clamp-1 mx-auto">{user.username}</p>
               </div>
               <div className="w-px bg-primary h-full" />
               <div className="flex justify-center items-center gap-1.5 px-2.5">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-yellow">
                  <path d="M7 3.5H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.5 6H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 6C0.5 7.22384 0.566229 8.17317 0.730763 8.91351C0.894036 9.64817 1.14739 10.146 1.50068 10.4993C1.85397 10.8526 2.35183 11.106 3.08649 11.2692C3.82683 11.4338 4.77616 11.5 6 11.5C6.53872 11.5 7.02612 11.4872 7.46745 11.4584C9.04363 11.3556 9.94668 11.052 10.4993 10.4993C11.052 9.94668 11.3556 9.04363 11.4584 7.46745C11.4872 7.02612 11.5 6.53872 11.5 6C11.5 4.77616 11.4338 3.82683 11.2692 3.08649C11.106 2.35183 10.8526 1.85397 10.4993 1.50068C10.146 1.14739 9.64817 0.894036 8.91351 0.730763C8.17317 0.566229 7.22384 0.5 6 0.5C4.77616 0.5 3.82683 0.566229 3.08649 0.730763C2.35183 0.894036 1.85397 1.14739 1.50068 1.50068C1.14739 1.85397 0.894036 2.35183 0.730763 3.08649C0.566229 3.82683 0.5 4.77616 0.5 6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
               </svg> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" className={user.age && user.name && user.phone && 'text-secondary'}>
                     <path d="M0.5 9.5C0.5 9.98492 0.558599 10.3097 0.67083 10.5406C0.773806 10.7525 0.940969 10.9245 1.25323 11.0673C1.58195 11.2176 2.06134 11.33 2.76424 11.4014C3.46237 11.4724 4.34682 11.5 5.46746 11.5C6.58809 11.5 7.47254 11.4724 8.17067 11.4014C8.87357 11.33 9.35296 11.2176 9.68168 11.0673C9.99394 10.9245 10.1611 10.7525 10.2641 10.5406C10.3763 10.3097 10.4349 9.98492 10.4349 9.5C10.4349 9.01508 10.3763 8.69032 10.2641 8.45941C10.1611 8.24754 9.99394 8.07547 9.68168 7.93269C9.35296 7.78238 8.87357 7.66998 8.17067 7.59855C7.47254 7.52761 6.58809 7.5 5.46746 7.5C4.34682 7.5 3.46237 7.52761 2.76424 7.59855C2.06134 7.66998 1.58195 7.78238 1.25323 7.93269C0.940969 8.07547 0.773806 8.24754 0.67083 8.45941C0.558599 8.69032 0.5 9.01508 0.5 9.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M2.98521 3C2.98521 4.38351 4.09934 5.5 5.46746 5.5C6.83557 5.5 7.94971 4.38351 7.94971 3C7.94971 1.61649 6.83557 0.5 5.46746 0.5C4.09934 0.5 2.98521 1.61649 2.98521 3Z" stroke="currentColor" />
                     <path d="M9.44385 5.25L10.1894 6L12.1776 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
            </li>))
   )
}

export default ListElement