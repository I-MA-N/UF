import SectionNames from "../../../../../types/SectionNames";
import Back_C from "../AIformulas/staticEvaluation/Back_C";
import Back_P from "../AIformulas/staticEvaluation/Back_P";
import Front_C from "../AIformulas/staticEvaluation/Front_C";
import Front_P from "../AIformulas/staticEvaluation/Front_P";
import Side_C from "../AIformulas/staticEvaluation/Side_C";
import Side_P from "../AIformulas/staticEvaluation/Side_P";

const staticEvaluation = [
   [
      {
         name: "front" as SectionNames,
         nameFA: 'نمای قدامی',
         questions: [
            {
               id: 1,
               title: 'گردن کج',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/1-5.png', '/staticEvaluation/1-3.png', '/staticEvaluation/1-1.png'],
               direction: 'horizental'
            },
            {
               id: 2,
               title: 'شانه نابرابر',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/2-5.png', '/staticEvaluation/2-3.png', '/staticEvaluation/2-1.png'],
               direction: 'horizental'
            },
            {
               id: 3,
               title: 'انحراف جانبی لگن',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/3-5.png', '/staticEvaluation/3-3.png', '/staticEvaluation/3-1.png'],
               direction: 'horizental'
            },
            {
               id: 4,
               title: 'زانو پرانتزی - راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/4-5.png', '/staticEvaluation/4-3.png', '/staticEvaluation/4-1.png'],
               direction: 'vertical'
            },
            {
               id: 5,
               title: 'زانو ضربدری - راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/5-5.png', '/staticEvaluation/5-3.png', '/staticEvaluation/5-1.png'],
               direction: 'horizental'
            },
            {
               id: 6,
               title: 'زانو پرانتزی - چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/4-5.png', '/staticEvaluation/4-3.png', '/staticEvaluation/4-1.png'],
               direction: 'vertical'
            },
            {
               id: 7,
               title: 'زانو ضربدری - چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/5-5.png', '/staticEvaluation/5-3.png', '/staticEvaluation/5-1.png'],
               direction: 'vertical'
            },
            {
               id: 8,
               title: 'چرخش خارجی پا - راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/8-5.png', '/staticEvaluation/8-3.png', '/staticEvaluation/8-1.png'],
               direction: 'horizental'
            },
            {
               id: 9,
               title: 'چرخش داخلی پا - راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/9-5.png', '/staticEvaluation/9-3.png', '/staticEvaluation/9-1.png'],
               direction: 'horizental'
            },
            {
               id: 10,
               title: 'چرخش خارجی پا - چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/8-5.png', '/staticEvaluation/8-3.png', '/staticEvaluation/8-1.png'],
               direction: 'vertical'
            },
            {
               id: 11,
               title: 'چرخش داخلی پا - چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/9-5.png', '/staticEvaluation/9-3.png', '/staticEvaluation/9-1.png'],
               direction: 'vertical'
            },
            {
               id: 12,
               title: 'سینه فرو رفته',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/1-5.png', '/staticEvaluation/1-3.png', '/staticEvaluation/1-1.png'],
               direction: 'vertical'
            },
            {
               id: 13,
               title: 'سینه کبوتری',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/1-5.png', '/staticEvaluation/1-3.png', '/staticEvaluation/1-1.png'],
               direction: 'vertical'
            },
            {
               id: 14,
               title: 'بدشکلی انگشتان دست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/1-5.png', '/staticEvaluation/1-3.png', '/staticEvaluation/1-1.png'],
               direction: 'vertical'
            },
            {
               id: 15,
               title: 'بدشکلی انگشتان پا',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/1-5.png', '/staticEvaluation/1-3.png', '/staticEvaluation/1-1.png'],
               direction: 'vertical'
            },
            {
               id: 16,
               title: 'کف پای صاف',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/1-5.png', '/staticEvaluation/1-3.png', '/staticEvaluation/1-1.png'],
               direction: 'vertical'
            },
            {
               id: 17,
               title: 'کف پای گود',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/1-5.png', '/staticEvaluation/1-3.png', '/staticEvaluation/1-1.png'],
               direction: 'vertical'
            },
         ],
         photoFn: Front_P,
         cropFn: Front_C,
         zipFile: undefined as string | null | undefined,
      },
      {
         name: "back" as SectionNames,
         nameFA: 'نمای خلفی',
         questions: [
            {
               id: 18,
               title: 'چرخش داخلی مچ پا - راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/20-5.png', '/staticEvaluation/20-3.png', '/staticEvaluation/20-1.png'],
               direction: 'vertical'
            },
            {
               id: 19,
               title: 'چرخش خارجی مچ پا - راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/21-5.png', '/staticEvaluation/21-3.png', '/staticEvaluation/21-1.png'],
               direction: 'vertical'
            },
            {
               id: 20,
               title: 'چرخش داخلی مچ پا - چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/20-5.png', '/staticEvaluation/20-3.png', '/staticEvaluation/20-1.png'],
               direction: 'vertical'
            },
            {
               id: 21,
               title: 'چرخش خارجی مچ پا - چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/21-5.png', '/staticEvaluation/21-3.png', '/staticEvaluation/21-1.png'],
               direction: 'vertical'
            },
            {
               id: 22,
               title: 'انحراف جانبی ستون فقرات',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/18-5.png', '/staticEvaluation/18-3.png', '/staticEvaluation/18-1.png'],
               direction: 'horizental'
            },
            {
               id: 23,
               title: 'کتف بالدار',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/19-5.png', '/staticEvaluation/19-3.png', '/staticEvaluation/19-1.png'],
               direction: 'vertical'
            },
         ],
         photoFn: Back_P,
         cropFn: Back_C,
         zipFile: undefined as string | null | undefined,
      },
      {
         name: "side" as SectionNames,
         nameFA: 'نمای جانبی',
         questions: [
            {
               id: 24,
               title: 'سر به جلو',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/24-5.png', '/staticEvaluation/24-3.png', '/staticEvaluation/24-1.png'],
               direction: 'vertical'
            },
            {
               id: 25,
               title: 'شانه گرد',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/25-5.png', '/staticEvaluation/25-3.png', '/staticEvaluation/25-1.png'],
               direction: 'vertical'
            },
            {
               id: 26,
               title: 'پشت گرد',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/26-5.png', '/staticEvaluation/26-3.png', '/staticEvaluation/26-1.png'],
               direction: 'vertical'
            },
            {
               id: 27,
               title: 'پشت صاف',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/27-5.png', '/staticEvaluation/27-3.png', '/staticEvaluation/27-1.png'],
               direction: 'vertical'
            },
            {
               id: 28,
               title: 'گود کمر',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/28-5.png', '/staticEvaluation/28-3.png', '/staticEvaluation/28-1.png'],
               direction: 'vertical'
            },
            {
               id: 29,
               title: 'صاف کمر',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/29-5.png', '/staticEvaluation/29-3.png', '/staticEvaluation/29-1.png'],
               direction: 'vertical'
            },
            {
               id: 30,
               title: 'زانوی عقب رفته',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/32-5.png', '/staticEvaluation/32-3.png', '/staticEvaluation/32-1.png'],
               direction: 'vertical'
            },
            {
               id: 31,
               title: 'زانوی خمیده',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/33-5.png', '/staticEvaluation/33-3.png', '/staticEvaluation/33-1.png'],
               direction: 'vertical'
            },
            {
               id: 32,
               title: 'پشت تابدار',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/31-5.png', '/staticEvaluation/31-3.png', '/staticEvaluation/31-1.png'],
               direction: 'vertical'
            },
            {
               id: 33,
               title: 'شکم برآمده',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/30-5.png', '/staticEvaluation/30-3.png', '/staticEvaluation/30-1.png'],
               direction: 'vertical'
            },
         ],
         photoFn: Side_P,
         cropFn: Side_C,
         zipFile: undefined as string | null | undefined,
      },
   ]
]

export type staticEvaluationType = typeof staticEvaluation;
export default staticEvaluation;