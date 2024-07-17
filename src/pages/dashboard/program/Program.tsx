import './css/program.css';
import TopInfo from "./components/TopInfo"
import UserDataTable from "./components/UserDataTable"
import TextsRow from './components/TextsRow';
import ImagesRow from './components/ImagesRow';
import Exercise from '../../../types/Exercise';
import TextsHeader from './components/TextsHeader';
import ImagesHeader from './components/ImagesHeader';
import GUserData from '../../../api/common/GUserData';
import Loading from '../../common/Loading';
import { useEffect } from 'react';

type ProgramProps = {
   programData: Exercise[][],
   username: string
}

function Program({ programData, username }: ProgramProps) {
   const { data, isError, isPending } = GUserData(username);

   useEffect(() => {
      const nav = document.getElementsByTagName("nav")[0];
      nav.style.position = "absolute";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.transform = "none";

      return () => {
         nav.style.position = "";
         nav.style.left = "";
         nav.style.right = "";
         nav.style.transform = "";
      }
   }, [])

   if (isPending) return <Loading />;

   let textsCounter = 0;
   let imagesCounter = 0;
   
   return (
      <section className="program-section">
         <TopInfo />

         <UserDataTable isError={isError} name={data?.name} age={data?.age} />

         {
            programData.map((day, index) => (
               <div key={index} className='mt-6'>
                  {/* Table Only Texts */}
                  <table className="mx-auto text-center w-full" cellPadding={8}>
                     <TextsHeader index={index} length={day.length} />

                     <tbody>
                        {
                           day.map(exercise => {
                              textsCounter++;
                              return <TextsRow row={exercise} key={textsCounter} rowId={textsCounter} />
                           })
                        }
                     </tbody>
                  </table>

                  {/* Table Only Pictures */}
                  <table className="mx-auto text-center w-full" cellPadding={8}>
                     <ImagesHeader index={index} length={day.length} />

                     <tbody>
                        {
                           day.map(exercise => {
                              imagesCounter++;
                              return <ImagesRow row={exercise} key={`${imagesCounter}-image`} rowId={imagesCounter} type='Fitness' />;
                           })
                        }
                     </tbody>
                  </table>
               </div>
            ))
         }

      </section>
   )
}

export default Program