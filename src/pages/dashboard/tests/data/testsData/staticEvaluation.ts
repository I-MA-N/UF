import SectionNames from "../../../../../types/SectionNames";
import Back_C from "../AIformulas/staticEvaluation/Back_C";
import Back_P from "../AIformulas/staticEvaluation/Back_P";
import Front_C from "../AIformulas/staticEvaluation/Front_C";
import Front_P from "../AIformulas/staticEvaluation/Front_P";
import Side_C from "../AIformulas/staticEvaluation/Side_C";
import Side_P from "../AIformulas/staticEvaluation/Side_P";

const staticEvaluation = [
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
            title: 'زانو پرانتزی',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 5,
            title: 'زانو ضربدری',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 6,
            title: 'چرخش خارجی پا',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 7,
            title: 'چرخش داخلی پا',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 8,
            title: 'سینه فرو رفته',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 9,
            title: 'سینه کبوتری',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 10,
            title: 'بدشکلی انگشتان دست',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 11,
            title: 'بدشکلی انگشتان پا',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 12,
            title: 'کف پای صاف',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 13,
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
            id: 14,
            title: 'انحراف جانبی ستون فقرات',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 15,
            title: 'کتف بالدار',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 16,
            title: 'چرخش مچ پا به داخل',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 17,
            title: 'چرخش مچ پا به خارج',
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
            id: 18,
            title: 'سر به جلو',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 19,
            title: 'شانه گرد',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 20,
            title: 'پشت گرد',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 21,
            title: 'پشت صاف',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 22,
            title: 'گود کمر',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 23,
            title: 'صاف کمر',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 24,
            title: 'شکم برآمده',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 25,
            title: 'پشت تابدار',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 26,
            title: 'زانوی عقب رفته',
            keys: [5, 3, 1],
            values: ['طبیعی', 'خفیف', 'شدید'],
         },
         {
            id: 27,
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

export type staticEvaluationType = typeof staticEvaluation;
export default staticEvaluation;