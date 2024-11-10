import { useEffect, useRef, useState } from "react";
import SearchBtn from "./SearchBtn";

type TopElemsProps = {
   items: string[],
   selectedItem: string,
   setFilteredItems: React.Dispatch<React.SetStateAction<string[]>>,
   inputPlaceholder: string
}

function TopElems({ items, selectedItem, setFilteredItems, inputPlaceholder }: TopElemsProps) {
   const [isSearching, setIsSearching] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      if (isSearching) inputRef.current?.select();
      if (!isSearching) setFilteredItems(items);
   }, [isSearching])

   return (
      <div className="flex items-end h-12 lg:h-14 shadow-lg">
         <div
            className={`size-full lg:text-lg border-b lg:border-b-2 ${isSearching ? "border-secondary" : "border-primary"} transition-all`}
            onClick={() => setIsSearching(true)}
         >
            {
               isSearching ?
                  <input
                     ref={inputRef}
                     type="text"
                     dir="ltr"
                     className="size-full bg-transparent outline-none text-center placeholder:text-xs lg:placeholder:text-sm"
                     placeholder={inputPlaceholder}
                     defaultValue={selectedItem}
                     onChange={e => {
                        setFilteredItems(() => (
                           items.filter(orgName => (
                              orgName.toLowerCase().includes(e.target.value.toLowerCase())
                           ))
                        ))
                     }}
                  />
                  :
                  <div className="size-full flex items-center justify-center">
                     {selectedItem}
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