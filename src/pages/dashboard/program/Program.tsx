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

type ProgramProps = {
   programData: Exercise[][],
   username: string
}

function Program({ programData, username }: ProgramProps) {
   const { data, isError, isPending } = GUserData(username);

   if (isPending) return <Loading fillScreen />;

   let textsCounter = 0;
   let imagesCounter = 0;

   return (
      <div className='pt-24 lg:pt-32 pb-16 lg:pb-24 px-4 sm:container print:max-w-none print:p-0'>
         <TopInfo />

         <div className='overflow-x-auto mt-14 lg:mt-16 print:mt-0 px-px'>
            <section className="print-area">
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
         </div>
      </div>
   )
}

export default Program