import { PropsWithChildren } from "react"

type ContainerProps = PropsWithChildren & {
   mainPadding?: boolean,
   sectionClassName?: string,
   titleClassName?: string,
   withTitle?: boolean
}

function Container({ mainPadding = true, sectionClassName, titleClassName, withTitle = true, children }: ContainerProps) {
   return (
      <main className={`container pb-12 ${mainPadding ? 'pt-32 lg:pt-36' : ''}`}>
         {
            withTitle &&
            <h1
               className={`font-Estedad-Black text-4xl lg:text-5xl text-center ${titleClassName || ''}`}
            >
               یوفیت
            </h1>
         }
         <section className={`flex flex-col justify-center items-center ${withTitle ? 'mt-12' : ''} ${sectionClassName || ''}`}>
            {children}
         </section>
      </main>
   )
}

export default Container