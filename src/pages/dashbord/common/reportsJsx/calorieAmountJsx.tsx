import { dataCalorieAmountType } from "../reportsData/calorieAmountData"
import img from "./reportsImages/calorieAmount/index.png"
import calorieImg1 from "./reportsImages/calorieAmount/calorieImg1.png"
import calorieImg2 from "./reportsImages/calorieAmount/calorieImg2.png"

function calorieAmountJsx(data: dataCalorieAmountType) {
   return (
      <>
         <h2 className="mb-2 text-center">میزان کالری روزانه</h2>
         <table className="w-full text-xs/6 text-center border border-white" cellPadding="6px">
            <tr>
               <th>
                  سوخت و ساز پایه
                  <br />
                  (کالری)
               </th>
               <th>
                  میزان انرژی مصرفی
                  <br />
                  (کالری)
               </th>
               <th>پیشنهاد</th>
               <th>
                  میزان انرژی دریافتی پیشنهادی
                  <br />
                  (کالری)
               </th>
               <th rowSpan={2} className="w-[220px] bg-[#fff]">
                  <img src={img} className="w-full" alt="report-img" />
               </th>
            </tr>
            <tr>
               <td>{data.metabolismBasic.toFixed(2)}</td>
               <td>{data.matabolismNeeded.toFixed(2)}</td>
               <td>{data.metaBolismTargetText}</td>
               <td>{data.metaBolismTarget.toFixed(2)}</td>
            </tr>
         </table>
         <div className="ml-auto mt-2 space-y-2">
            <p className="text-[10px] leading-4 text-yellow">
               اگر انرژی دریافتی برابر با انرژی مصرفی باشد وزن ثابت میماند.
            </p>
            <p className="text-[10px] leading-4 text-yellow">
               اگر انرژی دریافتی بیشتر از انرژی مصرفی باشد وزن افزایش مییابد.
            </p>
            <p className="text-[10px] leading-4 text-yellow">
               اگر انرژی دریافتی کمتر از انرژی مصرفی باشد وزن کاهش مییابد.
            </p>
            <p className="text-[10px] leading-4 text-yellow">
               اگر شما روزانه 500 کیلوکالری کمتر از نیاز مصرفی دریافت کنید، در ماه حدودا 2 کیلوگرم کاهش وزن خواهید داشت.
            </p>
            <p className="text-[10px] leading-4 text-yellow">
               اگر در طول روز ورزش انجام میدهید کالری سوزانده شده آن را بر اساس جدول پایین به میزان انرژی دریافتی اضافه کنید.
            </p>
         </div>

         <h2 className="mb-2 mt-6 text-center">میزان کالری و درشت مغذی پیشنهادی</h2>
         <table className="w-full text-xs/6 text-center border border-white" cellPadding="6px">
            <thead>
               <tr>
                  <th>وعده ها</th>
                  <th>انرژی (کالری)</th>
                  <th>کربوهیدرات (گرم)</th>
                  <th>پروتئین (گرم)</th>
                  <th>چربی (گرم)</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>صبحانه</td>
                  <td>{data.breakFast.toFixed(2)}</td>
                  <td>{data.carbohydrateBreakFast.toFixed(2)}</td>
                  <td>{data.proteinBreakFast.toFixed(2)}</td>
                  <td>{data.fatBreakFast.toFixed(2)}</td>
               </tr>
               <tr>
                  <td>ناهار</td>
                  <td>{data.lunch.toFixed(2)}</td>
                  <td>{data.carbohydrateLunch.toFixed(2)}</td>
                  <td>{data.proteinLunch.toFixed(2)}</td>
                  <td>{data.fatLunch.toFixed(2)}</td>
               </tr>
               <tr>
                  <td>شام</td>
                  <td>{data.dinner.toFixed(2)}</td>
                  <td>{data.carbohydrateDinner.toFixed(2)}</td>
                  <td>{data.proteinDinner.toFixed(2)}</td>
                  <td>{data.fatDinner.toFixed(2)}</td>
               </tr>
               <tr>
                  <td>میان وعده</td>
                  <td>{data.snack.toFixed(2)}</td>
                  <td>{data.carbohydrateSnack.toFixed(2)}</td>
                  <td>{data.proteinSnack.toFixed(2)}</td>
                  <td>{data.fatSnack.toFixed(2)}</td>
               </tr>
               <tr>
                  <td>روزانه</td>
                  <td>{data.metaBolismTarget.toFixed(2)}</td>
                  <td>{data.carbohydrateTotal.toFixed(2)}</td>
                  <td>{data.proteinTotal.toFixed(2)}</td>
                  <td>{data.fatTotal.toFixed(2)}</td>
               </tr>
            </tbody>
         </table>

         <img src={calorieImg1} className="mt-6 lg:max-w-[800px] lg:mx-auto" alt="calorie-img" />
         <img src={calorieImg2} className="lg:max-w-[800px] lg:mx-auto" alt="calorie-img" />
      </>
   )
}

export default calorieAmountJsx