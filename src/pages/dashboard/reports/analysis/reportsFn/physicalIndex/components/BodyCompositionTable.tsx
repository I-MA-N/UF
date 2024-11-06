import { useCallback } from "react";
import { bodyCompositionType } from "../bodyCompositionData";

type BodyCompositionTableProps = {
   data: bodyCompositionType | null | undefined
}

function BodyCompositionTable({ data }: BodyCompositionTableProps) {
   const generateValue = useCallback((value: number | undefined) => {
      if (value !== undefined) return value.toFixed(2);

      return '-';
   }, [])

   return (
      <div>
         <h2 className="mb-2 text-center text-sm lg:text-lg">ترکیبات بدنی</h2>
         <table className="w-full text-center border border-white" cellPadding="6px">
            <thead>
               <tr>
                  <th>نوع بافت </th>
                  <th> وزن بر اساس وضعیت موجود(kg) </th>
                  <th> کمبود وزن بر اساس وضعیت موجود(kg) </th>
                  <th> وزن بر اساس وضعیت ایده آل(kg) </th>
                  <th> کاهش وزن بر اساس وضعیت ایده آل(kg) </th>
                  <th> پیشنهادات </th>
               </tr>
            </thead>
            <tbody dir="ltr">
               <tr>
                  <td>عضله</td>

                  <td>{generateValue(data?.availableMuscle)}</td>
                  <td>{generateValue(data?.muscleLack)}</td>
                  <td>{generateValue(data?.bestMuscle)}</td>
                  <td>{generateValue(data?.reduceBestMuscle)}</td>

                  <td>برای افزایش عضلات بدن تمرینات قدرتی انجام دهید</td>
               </tr>

               <tr>
                  <td>چربی ضروری</td>

                  <td>{generateValue(data?.essentialFat)}</td>
                  <td rowSpan={2}>
                     {generateValue(data?.excessFat)} <br /> {data?.excessFat !== undefined ? 'اضافی' : ''}
                  </td>
                  <td>{generateValue(data?.bestFat)}</td>
                  <td rowSpan={2}>{generateValue(data?.reduceBestFat)}</td>

                  <td rowSpan={2}> برای کاهش چربی های بدن تمرینات هوازی انجام دهید</td>
               </tr>

               <tr>
                  <td>چربی ذخیره</td>

                  <td>{generateValue(data?.fatStorage)}</td>
                  <td>{generateValue(data?.bestFatStorage)}</td>
               </tr>

               <tr>
                  <td>استخوان</td>

                  <td>{generateValue(data?.availableBone)}</td>
                  <td>{generateValue(data?.boneLack)}</td>
                  <td>{generateValue(data?.bestBone)}</td>
                  <td>{generateValue(data?.reduceBestBone)}</td>

                  <td> برای افزایش تراکم استخوانها تمرینات پلایومتریک انجام دهید</td>
               </tr>

               <tr>
                  <td>غیره(آب، احشا و ...)</td>

                  <td>{generateValue(data?.availableOtherThings)}</td>
                  <td>{generateValue(data?.otherThingsLack)}</td>
                  <td>{generateValue(data?.bestOtherThings)}</td>
                  <td>{generateValue(data?.reduceBestOtherThings)}</td>

                  <td> برای افزایش آب بدن، مصرف آب را بیشتر کنید</td>
               </tr>
            </tbody>
         </table>

         <div className="ml-auto">
            <p className="mt-2 text-[10px] lg:text-xs leading-4 text-yellow">
               <span className="font-bold"> تمرینات قدرتی: </span> نوعی از تمرینات بدنی است که با تمرکز بر انقباض عضلات باعث افزایش قدرت و استقامت و اندازه عضلات میشود.
               که به چندین گروه تمرینات با وزن بدن، تمرینات با کش و تمرینات با وزنه قابل تقسیم بندی میباشد.
            </p>
            <p className="my-2 text-[10px] lg:text-xs leading-4 text-yellow">
               <span className="font-bold"> تمرینات هوازی: </span> به هر نوع فعالیت موزون و منظم که میزان ضربان قلب شما را تا حد کالری سوزی و چربی سوزی افزایش میدهد. مانند: دویدن و...
            </p>
            <p className="text-[10px] lg:text-xs leading-4 text-yellow">
               <span className="font-bold"> تمرینات پلایومتریک: </span> این نوع تمرینات بر پایه حرکات سرعتی ، قدرتی، پرشی و بهبود عملکرد عصبی-عضلانی است. مانند: پرش روی جعبه و...
            </p>
         </div>
      </div>
   );
};

export default BodyCompositionTable;