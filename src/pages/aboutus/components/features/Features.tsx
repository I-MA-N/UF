import FEATURES_DATA from "../../data/FeaturesData";
import Title from "../common/Title";
import FeatureRow from "./components/FeatureRow";

function Features() {
   return (
      <div>
         <Title text='ویژگی های وبسایت:' />

         <div className='flex flex-col gap-4 text-sm lg:text-lg'>
            {
               FEATURES_DATA.map(feature => (
                  <FeatureRow
                     text={feature}
                  />
               ))
            }
         </div>
      </div>
   );
};

export default Features;