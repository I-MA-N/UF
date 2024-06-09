import { dataPhysicalIndexType } from "../reportsData/physicalIndexData"
import img from "./reportsImages/physicalndex/mainInfo.png"

function physicalIndexJsx(data: dataPhysicalIndexType, statusBody: any) {
   return (
      <>
         <h2 className="text-center">شاخص های بدنی</h2>
         <div className="w-full flex gap-6 my-2">
            <table className="w-full text-xs/6 text-center border border-white" cellPadding="6px">
               <tbody>
                  <tr>
                     <td>دور گردن</td>
                     <td>{statusBody['دور گردن']}</td>
                     <th rowSpan={8} className="w-[180px] p-0.5 bg-[#fff]">
                        <img src={img} className="w-full" alt="report-img" />
                     </th>
                  </tr>
                  <tr>
                     <td>عرض شانه</td>
                     <td>{statusBody['عرض شانه']}</td>
                  </tr>
                  <tr>
                     <td>دور سینه</td>
                     <td>{statusBody['دور سینه']}</td>
                  </tr>
                  <tr>
                     <td>دور کمر</td>
                     <td>{statusBody['دور کمر']}</td>
                  </tr>
                  <tr>
                     <td>دور باسن</td>
                     <td>{statusBody['دور باسن']}</td>
                  </tr>
                  <tr>
                     <td>دور بازو</td>
                     <td>{statusBody['دور بازو']}</td>
                  </tr>
                  <tr>
                     <td>دور ران</td>
                     <td>{statusBody['دور ران']}</td>
                  </tr>
               </tbody>
            </table>
            <div className="w-full flex flex-col gap-2">
               <table className="w-full h-full text-xs/6 text-center border border-white" cellPadding="6px">
                  <thead>
                     <tr>
                        <th>نوع شاخص </th>
                        <th> جواب </th>
                        <th> نتیجه </th>
                        <th> دامنه طبیعی </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>وزن ایده آل </td>
                        <td>{data.bestWeight.toFixed(2)} </td>
                        <td>{data.weightMinusBestWeightResult} </td>
                        <td>{data.minWeightPeriod.toFixed(2)} _ {data.maxWeightPeriod.toFixed(2)} </td>
                     </tr>
                     <tr>
                        <td>BMI </td>
                        <td>{data.BMI.toFixed(2)} </td>
                        <td>{data.BMIResult} </td>
                        <td>{data.minBMI.toFixed(2)} _ {data.maxBMI.toFixed(2)} </td>
                     </tr>
                     <tr>
                        <td>WHR </td>
                        <td>{data.WHR.toFixed(2)} </td>
                        <td>{data.WHRResult} </td>
                        <td> کمتر از {data.WHRPeriod.toFixed(2)} </td>
                     </tr>
                     <tr>
                        <td>درصد چربی</td>
                        <td>{data.fatPercentage.toFixed(2)} </td>
                        <td>{data.fatPercentageResult} </td>
                        <td>{data.fatPercentagePeriod} </td>
                     </tr>
                  </tbody>
               </table>
               <p className="text-[10px] leading-4 text-yellow">
                  BMI = نسبت کمر به لگن |
                  WHR = شاخص توده بدن
               </p>
            </div>
         </div>

         <h2 className="mb-2 mt-6 text-center">ترکیبات بدنی</h2>
         <table className="text-xs/6 text-center border border-white" cellPadding="6px">
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
            </tbody>
         </table>
         <div className="ml-auto">
            <p className="mt-2 text-[10px] leading-4 text-yellow">
               <span className="font-bold"> تمرینات قدرتی: </span> نوعی از تمرینات بدنی است که با تمرکز بر انقباض عضلات باعث افزایش قدرت و استقامت و اندازه عضلات میشود.
               که به چندین گروه تمرینات با وزن بدن، تمرینات با کش و تمرینات با وزنه قابل تقسیم بندی میباشد.
            </p>
            <p className="my-2 text-[10px] leading-4 text-yellow">
               <span className="font-bold"> تمرینات هوازی: </span> به هر نوع فعالیت موزون و منظم که میزان ضربان قلب شما را تا حد کالری سوزی و چربی سوزی افزایش میدهد. مانند: دویدن و...
            </p>
            <p className="text-[10px] leading-4 text-yellow">
               <span className="font-bold"> تمرینات پلایومتریک: </span> این نوع تمرینات بر پایه حرکات سرعتی ، قدرتی، پرشی و بهبود عملکرد عصبی-عضلانی است. مانند: پرش روی جعبه و...
            </p>
         </div>
      </>
   )
}

export default physicalIndexJsx