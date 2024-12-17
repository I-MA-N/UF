import MEMBERS_DATA from "../../data/MembersData";
import Title from "../common/Title";
import Card from "./components/Card";

function Members() {
   return (
      <div>
         <Title text='اعضای تیم:' />
         <div className='flex gap-8 justify-center flex-wrap'>
            {
               MEMBERS_DATA.map(member => (
                  <Card
                     name={member.name}
                     role={member.role}
                     imgAddress={member.imgAddress}
                     description={member.description}
                     email={member.email}
                  />
               ))
            }
         </div>
      </div>
   );
};

export default Members;