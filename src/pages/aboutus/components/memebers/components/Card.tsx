import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

type CardProps = {
   name: string,
   role: string,
   imgAddress: string,
   description: string,
   email: string
}

function Card({ name, role, imgAddress, description, email }: CardProps) {
   return (
      <div id={name} className="bg-white text-primary w-full max-w-[480px] rounded-[48px] p-8 xs:p-10 lg:p-12">
         <CardHeader
            imgAddress={imgAddress}
            name={name}
            role={role}
         />

         <CardBody
            description={description}
         />

         <CardFooter
            email={email}
         />
      </div>
   );
};

export default Card;