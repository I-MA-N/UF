import './css/corrective.css';
import Btn from '../../../../common/Btn';
import img from './test.png';
import img2 from './test2.png';
import img3 from './test3.png';

function CorrectiveProgram() {
   return (
      <section className="program-section">
         <div className='flex items-center justify-between mb-4 print:hidden'>
            <span className='text-sm text-yellow text-justify max-w-80'>
               نکته: گزینه
               <span className='font-Estedad-Black mx-1'>save as pdf</span>
               را انتخاب و همچنین گزینه
               <span className='font-Estedad-Black mx-1'>background graphics</span>
               را تیک بزنید تا بهترین حالت پی دی اف را بتوانید دانلود کنید
            </span>
            <Btn
               text='دانلود پی دی اف'
               type='button'
               icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" fill="none" className='w-5'>
                  <path d="M17 10L12 15M12 15L7 10M12 15L12 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M5 5.296C5 4.62866 4.36871 4.13099 3.74865 4.37771C0.806956 5.54824 0 7.98146 0 12.7057C0 20.3595 2.118 21.9999 12 21.9999C21.882 21.9999 24 20.3595 24 12.7057C24 7.98146 23.193 5.54824 20.2514 4.37771C19.6313 4.13099 19 4.62866 19 5.296C19 5.74846 19.3009 6.13662 19.714 6.32119C20.0273 6.46119 20.2776 6.61212 20.4811 6.7697C21.4189 7.49607 22 8.88206 22 12.7057C22 16.5294 21.4189 17.9154 20.4811 18.6418C19.9576 19.0472 19.1238 19.4087 17.7047 19.653C16.2861 19.8972 14.436 19.9999 12 19.9999C9.56404 19.9999 7.71385 19.8972 6.2953 19.653C4.87622 19.4087 4.04241 19.0472 3.51891 18.6418C2.58107 17.9154 2 16.5294 2 12.7057C2 8.88206 2.58107 7.49607 3.51891 6.7697C3.72237 6.61212 3.97269 6.46119 4.28602 6.32119C4.69912 6.13662 5 5.74846 5 5.296Z" fill="currentColor" />
               </svg>}
               onClick={() =>  window.print()}
            />
         </div>

         <div className="p-2 bg-white text-primary text-sm">
            <table className="mx-auto text-center" cellPadding={4}>
               <thead>
                  <tr>
                     <th>سن</th>
                     <th className="px-8">نام نام خانوادگی</th>
                     <th>BMI</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>37</td>
                     <td className="px-8">جناب آقای امیر اخوان</td>
                     <td>28</td>
                  </tr>
               </tbody>
            </table>
         </div>

         <table className="mx-auto text-center w-full text-sm mt-8" cellPadding={8}>
            <thead className="bg-secondary text-white">
               <tr>
                  <th colSpan={8}>روز اول</th>
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
               <tr>
                  <td>Partial Tandem - Cervical Flexion + Extension</td>
                  <td>12_20 6_10 تک پا</td>
                  <td>1_3</td>
                  <td>70-80%</td>
                  <td>آرام</td>
                  <td>0_90 ثانیه</td>
                  <td>سوپرست</td>
                  <td>
                     <a href="#Partial Tandem - Cervical Flexion + Extension">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 24" fill="none" className='w-5 mx-auto text-white'>
                           <path d="M16.9165 20.0122L1.03705 10.8442C1.55296 10.1399 2.16727 9.51112 2.86255 8.97762C3.82338 8.24034 4.92002 7.69954 6.08986 7.38608C7.25969 7.07263 8.47981 6.99266 9.68055 7.15074C10.8813 7.30882 12.0391 7.70185 13.088 8.30741C14.1368 8.91296 15.0561 9.71916 15.7934 10.68C16.5307 11.6408 17.0715 12.7375 17.3849 13.9073C17.6984 15.0771 17.7784 16.2973 17.6203 17.498C17.5059 18.3669 17.2685 19.2133 16.9165 20.0122Z" stroke="currentColor" strokeWidth="2" />
                           <path d="M10.9017 1.08301L20.3554 6.54112C20.1023 6.83867 19.8179 7.10939 19.5065 7.34832C18.9284 7.79193 18.2686 8.11732 17.5647 8.30592C16.8609 8.49452 16.1267 8.54264 15.4043 8.44752C14.6818 8.35241 13.9851 8.11593 13.3541 7.75158C12.723 7.38723 12.1699 6.90215 11.7263 6.32403C11.2827 5.74591 10.9573 5.08608 10.7687 4.38221C10.5801 3.67834 10.5319 2.94422 10.6271 2.22175C10.6783 1.83261 10.7705 1.45096 10.9017 1.08301ZM10.8218 1.037C10.8218 1.03699 10.822 1.03705 10.8223 1.03722L10.8218 1.037Z" stroke="currentColor" strokeWidth="2" />
                           <path d="M4 23L8.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </a>
                  </td>
               </tr>
            </tbody>
         </table>

         <table className="mx-auto text-center w-full text-sm mt-8" cellPadding={8}>
            <tbody>
               <tr id='Partial Tandem - Cervical Flexion + Extension'>
                  <td className='p-1'>
                     <span className='inline-block mb-1 text-base'>Partial Tandem - Cervical Flexion + Extension</span>

                     <div className='flex items-center justify-center gap-1'>
                        <img src={img} className='w-[120px]' alt="test-img" />
                        <img src={img} className='w-[120px]' alt="test-img" />
                        <img src={img3} className='w-[120px]' alt="test-img" />
                        <img src={img3} className='w-[120px]' alt="test-img" />
                        <img src={img3} className='w-[120px]' alt="test-img" />
                        <img src={img3} className='w-[120px]' alt="test-img" />
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </section>
   )
}

export default CorrectiveProgram