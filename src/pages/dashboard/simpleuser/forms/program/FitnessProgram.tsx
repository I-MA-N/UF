import './css/main.css';

function FitnessProgram() {
   return (
      <section className="program_section">
         <div className="information">
            <div className="logo_container">
               <img src="./src/images/logo.jpg" style={{ width: '100px' }} alt="logo-img" />
               <div>
                  <p style={{ margin: '6px 0',  }}>
                     مرکز تندرستی و حرکات اصلاحی تن افرا
                  </p>
                  <p style={{fontSize: '12px'}}>
                     بلوار نصر خیابان جهانگردی نبش کوچه ۱۱
                  </p>
               </div>
            </div>
            <div>
               <div className="information_contianer">
                  <div className="information_texts">
                     <p>سن</p>
                     <p>37</p>
                  </div>
                  <div className="information_texts">
                     <p>نام و نام خانوادگی</p>
                     <p>جناب آقای امیر اخوان</p>
                  </div>
                  <div className="information_texts">
                     <p>BMI</p>
                     <p>28</p>
                  </div>
               </div>
            </div>
         </div>

         <div id="table-container-text">
            <table>
               <thead>
                  <tr>
                     <th colSpan={7}>روز اول</th>
                  </tr>
                  <tr>
                     <th>تمرین</th>
                     <th>تکرار</th>
                     <th>ست</th>
                     <th>شدت</th>
                     <th>ضرب آهنگ</th>
                     <th>استراحت</th>
                     <th>توضیحات</th>
                  </tr>
               </thead>
               <tbody>


                  <tr>
                     <td>RUSSIAN TWIST 03</td>
                     <td>12_20</td>
                     <td>1_5</td>
                     <td>70-80%</td>
                     <td>آرام</td>
                     <td>0_90 ثانیه</td>
                     <td>سوپرست</td>
                  </tr>


                  <tr>
                     <td>پلانک 45 درجه</td>
                     <td>12_20</td>
                     <td>1_5</td>
                     <td>70-80%</td>
                     <td>آرام</td>
                     <td>0_90 ثانیه</td>
                     <td>سوپرست</td>
                  </tr>


                  <tr>
                     <td>HAND WALK-OUT 01</td>
                     <td>12_20</td>
                     <td>1_5</td>
                     <td>70-80%</td>
                     <td>آرام</td>
                     <td>0_90 ثانیه</td>
                     <td>سوپرست</td>
                  </tr>


                  <tr>
                     <td>HAND WALK-OUT 04</td>
                     <td>12_20</td>
                     <td>1_4</td>
                     <td>70-80%</td>
                     <td>آرام</td>
                     <td>0_90 ثانیه</td>
                     <td>سوپرست</td>
                  </tr>


                  <tr>
                     <td>Partial Tandem - Cervical Flexion + Extension</td>
                     <td>12_20     6_10 تک پا</td>
                     <td>1_3</td>
                     <td>70-80%</td>
                     <td>آرام</td>
                     <td>0_90 ثانیه</td>
                     <td>سوپرست</td>
                  </tr>


                  <tr>
                     <td>لانچ به طرفین همره پرس سرشانه</td>
                     <td>12_20</td>
                     <td>1_3</td>
                     <td>70-80%</td>
                     <td>آرام</td>
                     <td>0_90 ثانیه</td>
                     <td>سوپرست</td>
                  </tr>


                  <tr>
                     <td>لت با دستان نزدیک به هم</td>
                     <td>12_20</td>
                     <td>1_3</td>
                     <td>70-80%</td>
                     <td>آرام</td>
                     <td>0_90 ثانیه</td>
                     <td>سوپرست</td>
                  </tr>


                  <tr>
                     <td>HAMSTRING STRETCH 04</td>
                     <td>1</td>
                     <td>1_3</td>
                     <td>70-80%</td>
                     <td>30ثانیه</td>
                     <td>0_90 ثانیه</td>
                     <td>سوپرست</td>
                  </tr>

               </tbody>
            </table>
         </div>

         <div id="table-container">

            <div id="table-header">
               روز اول
            </div>
            <div id="table-body">


               <div className="tbl-row">

                  <div className="texts-container">
                     <span className="row-title">
                        <span>تمرین</span>
                        <span>RUSSIAN TWIST 03</span>
                     </span>
                     <div className="row-title">
                        <span className="row-title">
                           <span>تکرار</span>
                           <span>12_20</span>
                        </span>
                        <span className="row-title">
                           <span>شدت</span>
                           <span>70-80%</span>
                        </span>
                     </div>
                     <div className="row-title">
                        <span className="row-title">
                           <span>ست</span>
                           <span>1_5</span>
                        </span>
                        <span className="row-title">
                           <span>ضرب آهنگ</span>
                           <span>آرام</span>
                        </span>
                     </div>
                     <span className="row-title">
                        <span>استراحت</span>
                        <span>0_90 ثانیه</span>
                     </span>
                     <span className="row-title">
                        <span>توضیحات</span>
                        <span>سوپر ست</span>
                     </span>
                  </div>


                  <div className="images-container">

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Cardio\Beginner\RUSSIAN TWIST 03.jpg" alt="exercise-pic" />
                     </div>

                  </div>

               </div>

               <div className="tbl-row">

                  <div className="texts-container">
                     <span className="row-title">
                        <span>تمرین</span>
                        <span>پلانک 45 درجه</span>
                     </span>
                     <div className="row-title">
                        <span className="row-title">
                           <span>تکرار</span>
                           <span>12_20</span>
                        </span>
                        <span className="row-title">
                           <span>شدت</span>
                           <span>70-80%</span>
                        </span>
                     </div>
                     <div className="row-title">
                        <span className="row-title">
                           <span>ست</span>
                           <span>1_5</span>
                        </span>
                        <span className="row-title">
                           <span>ضرب آهنگ</span>
                           <span>آرام</span>
                        </span>
                     </div>
                     <span className="row-title">
                        <span>استراحت</span>
                        <span>0_90 ثانیه</span>
                     </span>
                     <span className="row-title">
                        <span>توضیحات</span>
                        <span>سوپر ست</span>
                     </span>
                  </div>


                  <div className="images-container">

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Cardio\Beginner\پلانک 45 درجه.jpg" alt="exercise-pic" />
                     </div>

                  </div>

               </div>


               <div className="tbl-row">

                  <div className="texts-container">
                     <span className="row-title">
                        <span>تمرین</span>
                        <span>HAND WALK-OUT 01</span>
                     </span>
                     <div className="row-title">
                        <span className="row-title">
                           <span>تکرار</span>
                           <span>12_20</span>
                        </span>
                        <span className="row-title">
                           <span>شدت</span>
                           <span>70-80%</span>
                        </span>
                     </div>
                     <div className="row-title">
                        <span className="row-title">
                           <span>ست</span>
                           <span>1_5</span>
                        </span>
                        <span className="row-title">
                           <span>ضرب آهنگ</span>
                           <span>آرام</span>
                        </span>
                     </div>
                     <span className="row-title">
                        <span>استراحت</span>
                        <span>0_90 ثانیه</span>
                     </span>
                     <span className="row-title">
                        <span>توضیحات</span>
                        <span>سوپر ست</span>
                     </span>
                  </div>


                  <div className="images-container">

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Cardio\Beginner\HAND WALK-OUT 01.jpg" alt="exercise-pic" />
                     </div>

                  </div>

               </div>


               <div className="tbl-row">

                  <div className="texts-container">
                     <span className="row-title">
                        <span>تمرین</span>
                        <span>HAND WALK-OUT 04</span>
                     </span>
                     <div className="row-title">
                        <span className="row-title">
                           <span>تکرار</span>
                           <span>12_20</span>
                        </span>
                        <span className="row-title">
                           <span>شدت</span>
                           <span>70-80%</span>
                        </span>
                     </div>
                     <div className="row-title">
                        <span className="row-title">
                           <span>ست</span>
                           <span>1_4</span>
                        </span>
                        <span className="row-title">
                           <span>ضرب آهنگ</span>
                           <span>آرام</span>
                        </span>
                     </div>
                     <span className="row-title">
                        <span>استراحت</span>
                        <span>0_90 ثانیه</span>
                     </span>
                     <span className="row-title">
                        <span>توضیحات</span>
                        <span>سوپر ست</span>
                     </span>
                  </div>


                  <div className="images-container">

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Core\Beginner\HAND WALK-OUT 04.jpg" alt="exercise-pic" />
                     </div>

                  </div>

               </div>


               <div className="tbl-row">

                  <div className="texts-container">
                     <span className="row-title">
                        <span>تمرین</span>
                        <span>Partial Tandem - Cervical Flexion + Extension</span>
                     </span>
                     <div className="row-title">
                        <span className="row-title">
                           <span>تکرار</span>
                           <span>12_20     6_10 تک پا</span>
                        </span>
                        <span className="row-title">
                           <span>شدت</span>
                           <span>70-80%</span>
                        </span>
                     </div>
                     <div className="row-title">
                        <span className="row-title">
                           <span>ست</span>
                           <span>1_3</span>
                        </span>
                        <span className="row-title">
                           <span>ضرب آهنگ</span>
                           <span>آرام</span>
                        </span>
                     </div>
                     <span className="row-title">
                        <span>استراحت</span>
                        <span>0_90 ثانیه</span>
                     </span>
                     <span className="row-title">
                        <span>توضیحات</span>
                        <span>سوپر ست</span>
                     </span>
                  </div>


                  <div className="images-container">

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Balance\Beginner\Partial Tandem - Cervical Flexion + Extension_1.jpg" alt="exercise-pic" />
                     </div>

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Balance\Beginner\Partial Tandem - Cervical Flexion + Extension_2.jpg" alt="exercise-pic" />
                     </div>

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Balance\Beginner\Partial Tandem - Cervical Flexion + Extension_3.jpg" alt="exercise-pic" />
                     </div>

                  </div>

               </div>


               <div className="tbl-row">

                  <div className="texts-container">
                     <span className="row-title">
                        <span>تمرین</span>
                        <span>لانچ به طرفین همره پرس سرشانه</span>
                     </span>
                     <div className="row-title">
                        <span className="row-title">
                           <span>تکرار</span>
                           <span>12_20</span>
                        </span>
                        <span className="row-title">
                           <span>شدت</span>
                           <span>70-80%</span>
                        </span>
                     </div>
                     <div className="row-title">
                        <span className="row-title">
                           <span>ست</span>
                           <span>1_3</span>
                        </span>
                        <span className="row-title">
                           <span>ضرب آهنگ</span>
                           <span>آرام</span>
                        </span>
                     </div>
                     <span className="row-title">
                        <span>استراحت</span>
                        <span>0_90 ثانیه</span>
                     </span>
                     <span className="row-title">
                        <span>توضیحات</span>
                        <span>سوپر ست</span>
                     </span>
                  </div>


                  <div className="images-container">

                     <div id="vertical-img">
                        <img src="..\Fitness_Backup\Whole body\Beginner\لانچ به طرفین همره پرس سرشانه_01.jpg" alt="exercise-pic" />
                     </div>

                     <div id="vertical-img">
                        <img src="..\Fitness_Backup\Whole body\Beginner\لانچ به طرفین همره پرس سرشانه_02.jpg" alt="exercise-pic" />
                     </div>

                  </div>

               </div>


               <div className="tbl-row">

                  <div className="texts-container">
                     <span className="row-title">
                        <span>تمرین</span>
                        <span>لت با دستان نزدیک به هم</span>
                     </span>
                     <div className="row-title">
                        <span className="row-title">
                           <span>تکرار</span>
                           <span>12_20</span>
                        </span>
                        <span className="row-title">
                           <span>شدت</span>
                           <span>70-80%</span>
                        </span>
                     </div>
                     <div className="row-title">
                        <span className="row-title">
                           <span>ست</span>
                           <span>1_3</span>
                        </span>
                        <span className="row-title">
                           <span>ضرب آهنگ</span>
                           <span>آرام</span>
                        </span>
                     </div>
                     <span className="row-title">
                        <span>استراحت</span>
                        <span>0_90 ثانیه</span>
                     </span>
                     <span className="row-title">
                        <span>توضیحات</span>
                        <span>سوپر ست</span>
                     </span>
                  </div>


                  <div className="images-container">

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Strengthing\Beginner\لت با دستان نزدیک به هم_01.jpg" alt="exercise-pic" />
                     </div>

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Strengthing\Beginner\لت با دستان نزدیک به هم_02.jpg" alt="exercise-pic" />
                     </div>

                  </div>

               </div>


               <div className="tbl-row">

                  <div className="texts-container">
                     <span className="row-title">
                        <span>تمرین</span>
                        <span>HAMSTRING STRETCH 04</span>
                     </span>
                     <div className="row-title">
                        <span className="row-title">
                           <span>تکرار</span>
                           <span>1</span>
                        </span>
                        <span className="row-title">
                           <span>شدت</span>
                           <span>70-80%</span>
                        </span>
                     </div>
                     <div className="row-title">
                        <span className="row-title">
                           <span>ست</span>
                           <span>1_3</span>
                        </span>
                        <span className="row-title">
                           <span>ضرب آهنگ</span>
                           <span>30ثانیه</span>
                        </span>
                     </div>
                     <span className="row-title">
                        <span>استراحت</span>
                        <span>0_90 ثانیه</span>
                     </span>
                     <span className="row-title">
                        <span>توضیحات</span>
                        <span>سوپر ست</span>
                     </span>
                  </div>


                  <div className="images-container">

                     <div id="horizental-img">
                        <img src="..\Fitness_Backup\Stretching\Beginner\HAMSTRING STRETCH 04.jpg" alt="exercise-pic" />
                     </div>

                  </div>

               </div>

            </div>
         </div>

      </section>
   )
}

export default FitnessProgram