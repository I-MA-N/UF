import findInputTitle from "./utils/findInputTitle";

type IncompleteInputsListProps = {
   incompleteInputs: string[] | undefined
}

function IncompleteInputsList({ incompleteInputs }: IncompleteInputsListProps) {
   if (incompleteInputs) return (
      <div className="grid grid-cols-3 lg:grid-cols-4 mt-6 text-xs lg:text-sm">
         {
            incompleteInputs.map(serverID => {
               const foundTitle = findInputTitle(serverID);

               return (
                  <p className="flex justify-center items-center text-center border p-2">{foundTitle}</p>
               )
            })
         }
      </div>
   );
};

export default IncompleteInputsList;