import Title from "../common/Title";
import BlockquoteIcon from "./components/BlockquoteIcon";

function AboutText() {
   return (
      <div>
         <Title text='درباره ما:' />
         
         <blockquote className="text-sm lg:text-lg text-justify">
            <BlockquoteIcon />
            
            <p className='my-1 lg:my-2'>
               در {" "}
               <span className='font-bold'>اوج تناسب اندام هوشمندانه (مجبا)</span>،
               هدف ما ارتقای تندرستی و رسیدن شما به {" "}
               <span className='font-bold'>اوج آمادگی</span> است.
               با بهره‌گیری از هوش مصنوعی، سیستم‌های ارزیابی پیشرفته و طراحی برنامه‌های تمرینی و اصلاحی، به شما کمک می‌کنیم تا به بهترین نسخه خود تبدیل شوید.
               <br />
               از سال 1390، این پروژه توسط آقای {" "}
               <span className='italic'>دکتر مجتبی بابایی خورزوقی</span> پایه‌گذاری شده
               و تاکنون بیش از 8000 تمرین تخصصی جمع‌آوری و سیستم‌های نوینی برای بهبود سلامت فیزیکی افراد طراحی شده است.
            </p>
            
            <BlockquoteIcon reverse />
         </blockquote>
      </div>
   );
};

export default AboutText;