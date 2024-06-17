import './css/program.css';
import DAYS from './constants/days/DAYS'
import { useUserDataContext } from "../../../../authentication/UserDataProvider"
import TopInfo from "./components/TopInfo"
import UserDataTable from "./components/UserDataTable"
import TextsRow from './components/TextsRow';
import ImagesRow from './components/ImagesRow';

function FitnessProgram() {
   const userData = useUserDataContext();

   // Create new component ProgramLoadFirst, act like ReportsLoadFirst/TestsLoadFirst

   // Data gotten from server should be convert
   // to "Exercise" type in "types" folder,
   // should get data from phase first & put them
   // to proper key value pairs

   return (
      <section className="program-section">
         <TopInfo />
         <UserDataTable name={userData.name} BMI="28" age="34" />

         {/* Table Only Texts */}
         <table className="mx-auto text-center w-full text-sm mt-8" cellPadding={8}>
            <thead className="bg-secondary text-white">
               <tr>
                  <th colSpan={8}>روز {DAYS[0]}</th>
               </tr>
               <tr>
                  <th>تمرین</th>
                  <th>تکرار</th>
                  <th>ست</th>
                  <th>شدت</th>
                  <th>ضرب آهنگ</th>
                  <th>استراحت</th>
                  <th>توضیحات</th>
                  <th>عکس ها</th>
               </tr>
            </thead>
            <tbody className='text-xs'>
               <TextsRow
                  row={{
                     id: 1,
                     name: 'پرش دمبل با شراگ',
                     repeat: "12_20",
                     set: "1_5",
                     beat: "آرام",
                     rest: "0_90 ثانیه"
                  }}
               />
            </tbody>
         </table>

         {/* Table Only Pictures */}
         <table className="mx-auto text-center w-full text-sm mt-8" cellPadding={8}>
            <thead className="bg-secondary text-white">
               <tr>
                  <th >روز {DAYS[0]}</th>
               </tr>
            </thead>
            <tbody>
               <ImagesRow
                  row={{
                     id: 1,
                     name: 'پرش دمبل با شراگ',
                     images: ['Whole body/Beginner/پرش دمبل با شراگ_01.jpg', 'Whole body/Beginner/پرش دمبل با شراگ_02.jpg'],
                     type: 'Fitness'
                  }}
               />
            </tbody>
         </table>
      </section>
   )
}

export default FitnessProgram