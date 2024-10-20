import { useEffect, useRef, useState } from "react";
import SearchBtn from "./SearchBtn";

type TopElemsProps = {
   orgNames: string[],
   orgSelected: string,
   setSelectedOrgs: React.Dispatch<React.SetStateAction<string[]>>,
}

function TopElems({ orgNames, orgSelected, setSelectedOrgs }: TopElemsProps) {
   const [isSearching, setIsSearching] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (isSearching) inputRef.current?.select();
      if (!isSearching) setSelectedOrgs(orgNames);
   }, [isSearching])

   return (
      <div className="flex items-end h-12 lg:h-14 overflow-x-hidden shadow">
         <div className={`size-full lg:text-lg border-b ${isSearching ? "border-secondary" : "border-white"} transition-all`}>
            {
               isSearching ?
                  <input
                     ref={inputRef}
                     type="text"
                     dir="ltr"
                     className="size-full bg-transparent outline-none text-center placeholder:text-xs lg:placeholder:text-sm"
                     placeholder="جستجوی نام سازمان"
                     defaultValue={orgSelected}
                     onChange={e => {
                        setSelectedOrgs(() => (
                           orgNames.filter(orgName => (
                              orgName.toLowerCase().includes(e.target.value.toLowerCase())
                           ))
                        ))
                     }}
                  />
                  :
                  <div className="size-full flex items-center justify-center">
                     {orgSelected}
                  </div>
            }
         </div>

         <SearchBtn
            isSearching={isSearching}
            setIsSearching={setIsSearching}
         />
      </div>
   );
};

export default TopElems;