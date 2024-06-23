type ListElemntProps = {
   users: any,
   setSimpleUserData: React.Dispatch<any>
}

function ListElement({ users, setSimpleUserData }: ListElemntProps) {
   return (
      users?.map((user: any) => (
         <li
            key={user.username}
            className="flex items-center justify-between h-9 text-[10px] bg-white text-primary cursor-pointer"
            onClick={() => setSimpleUserData(user)}
         >
            <div className="flex justify-between items-center px-1.5 flex-grow">
               <p className="line-clamp-1 mx-auto">{user.name || user.email}</p>
               <p className="text-xs">|</p>
               <p className="line-clamp-1 mx-auto">{user.username}</p>
            </div>
            <div className="w-px bg-primary h-full" />
            <div className="flex justify-center items-center gap-1.5 px-2.5">
               <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" className={user.age && user.name && user.phone && 'text-secondary'}>
                  <path d="M0.5 9.5C0.5 9.98492 0.558599 10.3097 0.67083 10.5406C0.773806 10.7525 0.940969 10.9245 1.25323 11.0673C1.58195 11.2176 2.06134 11.33 2.76424 11.4014C3.46237 11.4724 4.34682 11.5 5.46746 11.5C6.58809 11.5 7.47254 11.4724 8.17067 11.4014C8.87357 11.33 9.35296 11.2176 9.68168 11.0673C9.99394 10.9245 10.1611 10.7525 10.2641 10.5406C10.3763 10.3097 10.4349 9.98492 10.4349 9.5C10.4349 9.01508 10.3763 8.69032 10.2641 8.45941C10.1611 8.24754 9.99394 8.07547 9.68168 7.93269C9.35296 7.78238 8.87357 7.66998 8.17067 7.59855C7.47254 7.52761 6.58809 7.5 5.46746 7.5C4.34682 7.5 3.46237 7.52761 2.76424 7.59855C2.06134 7.66998 1.58195 7.78238 1.25323 7.93269C0.940969 8.07547 0.773806 8.24754 0.67083 8.45941C0.558599 8.69032 0.5 9.01508 0.5 9.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.98521 3C2.98521 4.38351 4.09934 5.5 5.46746 5.5C6.83557 5.5 7.94971 4.38351 7.94971 3C7.94971 1.61649 6.83557 0.5 5.46746 0.5C4.09934 0.5 2.98521 1.61649 2.98521 3Z" stroke="currentColor" />
                  <path d="M9.44385 5.25L10.1894 6L12.1776 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
         </li>
      ))
   );
};

export default ListElement;