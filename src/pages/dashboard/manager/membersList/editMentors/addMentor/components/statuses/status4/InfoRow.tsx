type InfoRowProps = {
   icon: React.ReactNode,
   text: string,
   info: string
}

function InfoRow({ icon, text, info }: InfoRowProps) {
   return (
      <div className="flex gap-3 items-center">
         {icon}

         <div className="text-xs lg:text-sm flex-grow">
            <p className="font-Estedad-ExtraLight">{text}</p>

            <p className="mt-1">{info || '\u00A0'}</p>
         </div>
      </div>
   );
};

export default InfoRow;