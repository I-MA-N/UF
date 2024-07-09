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
         <td></td>
         <td>{row.beat}</td>
         <td>{row.rest}</td>
         <td></td>
      </tr>
   )
};

export default TextsRow;