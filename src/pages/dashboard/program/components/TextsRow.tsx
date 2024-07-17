import Exercise from "../../../../types/Exercise";

type TextsRowProps = {
   row: Omit<Exercise, "images">,
   rowId: number
}

function TextsRow({ row, rowId }: TextsRowProps) {
   return (
      <tr>
         <td>{rowId}</td>
         <td>{row.name}</td>
         <td>{row.repeat}</td>
         <td>{row.set}</td>
         <td>70-80%</td>
         <td>{row.beat}</td>
         <td>{row.rest}</td>
         <td>سوپرست</td>
      </tr>
   )
};

export default TextsRow;