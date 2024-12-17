type TitleProps = {
   text: string
}

function Title({ text }: TitleProps) {
   return (
      <h2 className='w-fit font-Estedad-Black text-xl lg:text-2xl mb-3 mx-auto relative'>
         <span
            className="inline-block w-2 h-2 bg-secondary absolute top-1/2 -translate-y-1/2 -right-3"
         />
         {text}
      </h2>
   );
};

export default Title;