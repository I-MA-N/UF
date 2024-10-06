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
            },
            {
               id: 2,
               title: 'شانه نابرابر',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 3,
               title: 'انحراف جانبی لگن',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 4,
               title: 'زانو راست پرانتزی',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 5,
               title: 'زانو راست ضربدری',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 6,
               title: 'زانو چپ پرانتزی',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 7,
               title: 'زانو چپ ضربدری',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 8,
               title: 'چرخش خارجی پا راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 9,
               title: 'چرخش داخلی پا راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 10,
               title: 'چرخش خارجی پا چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 11,
               title: 'چرخش داخلی پا چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 12,
               title: 'سینه فرو رفته',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 13,
               title: 'سینه کبوتری',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 14,
               title: 'بدشکلی انگشتان دست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 15,
               title: 'بدشکلی انگشتان پا',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 16,
               title: 'کف پای صاف',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 17,
               title: 'کف پای گود',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
         ],
         photoFn: Front_P,
         cropFn: Front_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
      {
         name: "back" as SectionNames,
         nameFA: 'نمای خلفی',
         questions: [
            {
               id: 18,
               title: 'انحراف جانبی ستون فقرات',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 19,
               title: 'کتف بالدار',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 20,
               title: 'چرخش داخلی مچ پا راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 21,
               title: 'چرخش خارجی مچ پا راست',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 22,
               title: 'چرخش داخلی مچ پا چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 23,
               title: 'چرخش خارجی مچ پا چپ',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
         ],
         photoFn: Back_P,
         cropFn: Back_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
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
            },
            {
               id: 25,
               title: 'شانه گرد',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 26,
               title: 'پشت گرد',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 27,
               title: 'پشت صاف',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 28,
               title: 'گود کمر',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 29,
               title: 'صاف کمر',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 30,
               title: 'شکم برآمده',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 31,
               title: 'پشت تابدار',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 32,
               title: 'زانوی عقب رفته',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
            {
               id: 33,
               title: 'زانوی خمیده',
               keys: [5, 3, 1],
               values: ['طبیعی', 'خفیف', 'شدید'],
            },
         ],
         photoFn: Side_P,
         cropFn: Side_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
   ]
]

export type staticEvaluationType = typeof staticEvaluation;
export default staticEvaluation;