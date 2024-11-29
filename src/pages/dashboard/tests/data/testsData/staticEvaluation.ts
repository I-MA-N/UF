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
               number: 1,
               serverID: 'کج گردنی یا چرخش گردن',
               title: 'گردن کج',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/1-5.png', '/staticEvaluation/1-3.png', '/staticEvaluation/1-1.png'],
               direction: 'horizental'
            },
            {
               number: 2,
               serverID: 'شانه نابرابر',
               title: 'شانه نابرابر',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/2-5.png', '/staticEvaluation/2-3.png', '/staticEvaluation/2-1.png'],
               direction: 'horizental'
            },
            {
               number: 3,
               serverID: 'انحراف جانبی لگن',
               title: 'انحراف جانبی لگن',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/3-5.png', '/staticEvaluation/3-3.png', '/staticEvaluation/3-1.png'],
               direction: 'horizental'
            },
            {
               number: 4,
               serverID: 'زانو پرانتزی',
               title: 'زانو پرانتزی',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/4-5.png', '/staticEvaluation/4-3.png', '/staticEvaluation/4-1.png'],
               direction: 'vertical'
            },
            {
               number: 7,
               serverID: 'زانو ضربدری',
               title: 'زانو ضربدری',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/5-5.png', '/staticEvaluation/5-3.png', '/staticEvaluation/5-1.png'],
               direction: 'vertical'
            },
            {
               number: 8,
               serverID: 'چرخش خارجی پا',
               title: 'چرخش خارجی پا',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/8-5.png', '/staticEvaluation/8-3.png', '/staticEvaluation/8-1.png'],
               direction: 'horizental'
            },
            {
               number: 9,
               serverID: 'چرخش داخلی پا',
               title: 'چرخش داخلی پا',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/9-5.png', '/staticEvaluation/9-3.png', '/staticEvaluation/9-1.png'],
               direction: 'horizental'
            },
            {
               number: 12,
               serverID: 'سینه فرو رفته',
               title: 'سینه فرو رفته',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/10-5.png', '/staticEvaluation/10-3.png', '/staticEvaluation/10-1.png'],
               direction: 'vertical'
            },
            {
               number: 13,
               serverID: 'سینه کبوتری',
               title: 'سینه کبوتری',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/11-5.png', '/staticEvaluation/11-3.png', '/staticEvaluation/11-1.png'],
               direction: 'vertical'
            },
            {
               number: 14,
               serverID: 'بدشکلی انگشتان دست',
               title: 'بدشکلی انگشتان دست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/12-5.png', '/staticEvaluation/12-3.png', '/staticEvaluation/12-1.png'],
               direction: 'vertical'
            },
            {
               number: 15,
               serverID: 'بدشکلی انگشتان پا',
               title: 'بدشکلی انگشتان پا',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/13-5.png', '/staticEvaluation/13-3.png', '/staticEvaluation/13-1.png'],
               direction: 'vertical'
            },
            {
               number: 16,
               serverID: 'کف پای صاف',
               title: 'کف پای صاف',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/14-5.png', '/staticEvaluation/14-3.png', '/staticEvaluation/14-1.png'],
               direction: 'vertical'
            },
            {
               number: 17,
               serverID: 'کف پای گود',
               title: 'کف پای گود',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/15-5.png', '/staticEvaluation/15-3.png', '/staticEvaluation/15-1.png'],
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
               number: 18,
               serverID: 'چرخش مچ پا به داخل',
               title: 'چرخش داخلی مچ پا',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/20-5.png', '/staticEvaluation/20-3.png', '/staticEvaluation/20-1.png'],
               direction: 'vertical'
            },
            {
               number: 19,
               serverID: 'چرخش مچ پا به خارج',
               title: 'چرخش خارجی مچ پا',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/21-5.png', '/staticEvaluation/21-3.png', '/staticEvaluation/21-1.png'],
               direction: 'vertical'
            },
            {
               number: 22,
               serverID: 'انحراف جانبی ستون فقرات',
               title: 'انحراف جانبی ستون فقرات',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/18-5.png', '/staticEvaluation/18-3.png', '/staticEvaluation/18-1.png'],
               direction: 'horizental'
            },
            {
               number: 23,
               serverID: 'کتف بالدار',
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
               number: 24,
               serverID: 'سر به جلو',
               title: 'سر به جلو',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/24-5.png', '/staticEvaluation/24-3.png', '/staticEvaluation/24-1.png'],
               direction: 'vertical'
            },
            {
               number: 25,
               serverID: 'شانه گرد',
               title: 'شانه گرد',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/25-5.png', '/staticEvaluation/25-3.png', '/staticEvaluation/25-1.png'],
               direction: 'vertical'
            },
            {
               number: 26,
               serverID: 'پشت گرد',
               title: 'پشت گرد',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/26-5.png', '/staticEvaluation/26-3.png', '/staticEvaluation/26-1.png'],
               direction: 'vertical'
            },
            {
               number: 27,
               serverID: 'پشت صاف',
               title: 'پشت صاف',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/27-5.png', '/staticEvaluation/27-3.png', '/staticEvaluation/27-1.png'],
               direction: 'vertical'
            },
            {
               number: 28,
               serverID: 'کمر گود',
               title: 'کمر گود',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/28-5.png', '/staticEvaluation/28-3.png', '/staticEvaluation/28-1.png'],
               direction: 'vertical'
            },
            {
               number: 29,
               serverID: 'کمر صاف',
               title: 'کمر صاف',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/29-5.png', '/staticEvaluation/29-3.png', '/staticEvaluation/29-1.png'],
               direction: 'vertical'
            },
            {
               number: 30,
               serverID: 'زانوی عقب رفته',
               title: 'زانوی عقب رفته',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/32-5.png', '/staticEvaluation/32-3.png', '/staticEvaluation/32-1.png'],
               direction: 'vertical'
            },
            {
               number: 31,
               serverID: 'زانوی خمیده',
               title: 'زانوی خمیده',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/33-5.png', '/staticEvaluation/33-3.png', '/staticEvaluation/33-1.png'],
               direction: 'vertical'
            },
            {
               number: 32,
               serverID: 'پشت تابدار',
               title: 'پشت تابدار',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
               images: ['/staticEvaluation/31-5.png', '/staticEvaluation/31-3.png', '/staticEvaluation/31-1.png'],
               direction: 'vertical'
            },
            {
               number: 33,
               serverID: 'برآمدگی شکم',
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