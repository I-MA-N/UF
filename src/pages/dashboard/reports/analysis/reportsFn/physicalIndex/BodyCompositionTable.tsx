import { dataBodyCompositionType } from "./bodyCompositionData";

type BodyCompositionProps = {
   data: dataBodyCompositionType | null
}

function BodyCompositionTable({ data }: BodyCompositionProps) {
   return (
      <div>
         <h2 className="mb-2 mt-8 text-center text-sm lg:text-lg">ترکیبات بدنی</h2>
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
               {
                  data ?
                     <>
                        <tr>
                           <td>عضله </td>
                           <td>{data.availableMuscle.toFixed(2)} </td>
                           <td>{data.muscleLack.toFixed(2)} </td>
                           <td>{data.bestMuscle.toFixed(2)} </td>
                           <td>{data.reduceBestMuscle.toFixed(2)} </td>
                           <td> برای افزایش عضلات بدن تمرینات قدرتی انجام دهید </td>
                        </tr>

                        <tr>
                           <td>چربی ضروری </td>
                           <td>{data.essentialFat.toFixed(2)} </td>
                           <td rowSpan={2}> {data.excessFat.toFixed(2)} <br /> اضافی </td>
                           <td>{data.bestFat.toFixed(2)} </td>
                           <td rowSpan={2}>{data.reduceBestFat.toFixed(2)} </td>
                           <td rowSpan={2}> برای کاهش چربی های بدن تمرینات هوازی انجام دهید </td>
                        </tr>
                        <tr>
                           <td>چربی ذخیره </td>
                           <td>{data.fatStorage.toFixed(2)} </td>
                           <td>{data.bestFatStorage.toFixed(2)} </td>
                        </tr>

                        <tr>
                           <td>استخوان </td>
                           <td>{data.availableBone.toFixed(2)} </td>
                           <td>{data.boneLack.toFixed(2)} </td>
                           <td>{data.bestBone.toFixed(2)} </td>
                           <td>{data.reduceBestBone.toFixed(2)} </td>
                           <td> برای افزایش تراکم استخوانها تمرینات پلایومتریک انجام دهید </td>
                        </tr>

                        <tr>
                           <td>غیره(آب، احشا و ...) </td>
                           <td>{data.availableOtherThings.toFixed(2)} </td>
                           <td>{data.otherThingsLack.toFixed(2)} </td>
                           <td>{data.bestOtherThings.toFixed(2)} </td>
                           <td>{data.reduceBestOtherThings.toFixed(2)} </td>
                           <td> برای افزایش آب بدن، مصرف آب را بیشتر کنید </td>
                        </tr>
                     </>
                     :
                     <tr>
                        <td colSpan={6} className="py-4 text-yellow">داده ها برای این گزارش کافی نمی باشد</td>
                     </tr>
               }
            </tbody>
         </table>
         {
            data &&
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
         }
      </div>
   );
};

export default BodyCompositionTable;