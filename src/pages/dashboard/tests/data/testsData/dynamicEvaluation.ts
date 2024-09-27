import SectionNames from "../../../../../types/SectionNames";
import HandsBend_P from "../AIformulas/dynamicEvaluation/HandsBend_P";
import HandsOut_P from "../AIformulas/dynamicEvaluation/HandsOut_P";
import HandsRotate_P from "../AIformulas/dynamicEvaluation/HandsRotate_P";
import SquatBack_P from "../AIformulas/dynamicEvaluation/SquatBack_P";
import SquatFront_P from "../AIformulas/dynamicEvaluation/SquatFront_P";
import SquatOneFoot_P from "../AIformulas/dynamicEvaluation/SquatOneFoot_P";
import SquatSide_P from "../AIformulas/dynamicEvaluation/SquatSide_P";
import SwimSide_P from "../AIformulas/dynamicEvaluation/SwimSide_P";
import WalkingBack_P from "../AIformulas/dynamicEvaluation/WalkingBack_P";
import WalkingFront_P from "../AIformulas/dynamicEvaluation/WalkingFront_P";
import WalkingFront_V from "../AIformulas/dynamicEvaluation/WalkingFront_V";
import WalkingSide_P from "../AIformulas/dynamicEvaluation/WalkingSide_P";

const dynamicEvaluation = [
   {
      name: 'squatFront' as SectionNames,
      nameFA: 'اسکات قدامی',
      questions: [
         {
            id: 8,
            src: '/images/dynamicEvaluation/img-2.png',
            title: 'حرکت زانوها به خارج',
            direction: 'vertical'
         },
         {
            id: 9,
            src: '/images/dynamicEvaluation/img-4.png',
            title: 'حرکت زانوها به داخل',
            direction: 'vertical'
         },
         {
            id: 10,
            src: '/images/dynamicEvaluation/img-3.png',
            title: 'صاف شدن پاها',
            direction: 'vertical'
         },
         {
            id: 11,
            src: '/images/dynamicEvaluation/img-5.png',
            title: 'چرخش پاها به خارج',
            direction: 'vertical'
         },
      ],
      photoFn: SquatFront_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
   {
      name: 'squatBack' as SectionNames,
      nameFA: 'اسکات خلفی',
      questions: [
         {
            id: 16,
            src: '/images/dynamicEvaluation/img-11.png',
            title: 'انتقال نامتقارن',
            direction: 'vertical'
         },
         {
            id: 17,
            src: '/images/dynamicEvaluation/img-12.png',
            title: 'بلند شدن پاشنه',
            direction: 'vertical'
         },
         {
            id: 18,
            src: '/images/dynamicEvaluation/img-13.png',
            title: 'صاف شدن پا',
            direction: 'vertical'
         },
      ],
      photoFn: SquatBack_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
   {
      name: 'squatSide' as SectionNames,
      nameFA: 'اسکات جانبی',
      questions: [
         {
            id: 12,
            src: '/images/dynamicEvaluation/img-8.png',
            title: 'خمیدگی به جلو',
            direction: 'vertical'
         },
         {
            id: 13,
            src: '/images/dynamicEvaluation/img-9.png',
            title: 'دست ها در جلو',
            direction: 'vertical'
         },
         {
            id: 14,
            src: '/images/dynamicEvaluation/img-7.png',
            title: 'کمر صاف',
            direction: 'vertical'
         },
         {
            id: 15,
            src: '/images/dynamicEvaluation/img-10.png',
            title: 'گود شدن کمر',
            direction: 'vertical'
         },
      ],
      photoFn: SquatSide_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
   {
      name: 'squatOneFoot' as SectionNames,
      nameFA: 'اسکات تک پا',
      questions: [
         {
            id: 19,
            src: '/images/dynamicEvaluation/img-20.png',
            title: 'چرخش خارجی تنه',
            direction: 'vertical'
         },
         {
            id: 20,
            src: '/images/dynamicEvaluation/img-21.png',
            title: 'چرخش داخلی تنه',
            direction: 'vertical'
         },
         {
            id: 21,
            src: '/images/dynamicEvaluation/img-22.png',
            title: 'سقوط ران',
            direction: 'vertical'
         },
         {
            id: 22,
            src: '/images/dynamicEvaluation/img-24.png',
            title: 'بالا آمدن ران',
            direction: 'vertical'
         },
         {
            id: 23,
            src: '/images/dynamicEvaluation/img-23.png',
            title: 'حرکت زانو به داخل',
            direction: 'vertical'
         },
      ],
      photoFn: SquatOneFoot_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
   {
      name: 'swimSide' as SectionNames,
      nameFA: 'شنا',
      questions: [
         {
            id: 34,
            src: '/images/dynamicEvaluation/img-35.png',
            title: 'گود شدن  کمر',
            direction: 'horizental'
         },
         {
            id: 35,
            src: '/images/dynamicEvaluation/img-36.png',
            title: 'صاف شدن کمر',
            direction: 'horizental'
         },
         {
            id: 36,
            src: '/images/dynamicEvaluation/img-37.png',
            title: 'بالا آمدن شانه',
            direction: 'horizental'
         },
         {
            id: 37,
            src: '/images/dynamicEvaluation/img-38.png',
            title: 'بالی شدن کتف',
            direction: 'horizental'
         },
         {
            id: 38,
            src: '/images/dynamicEvaluation/img-39.png',
            title: 'هایپراکستنشن گردن',
            direction: 'horizental'
         },
      ],
      photoFn: SwimSide_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
   {
      name: 'handsOut' as SectionNames,
      nameFA: 'دور شدن دست ها',
      questions: [
         {
            id: 28,
            src: '/images/dynamicEvaluation/img-29.png',
            title: 'بالاآمدن شانه',
            direction: 'horizental'
         },
         {
            id: 29,
            src: '/images/dynamicEvaluation/img-30.png',
            title: 'پروتکشن شانه',
            direction: 'horizental'
         },
         {
            id: 30,
            src: '/images/dynamicEvaluation/img-31.png',
            title: 'خم شدن آرنج ها',
            direction: 'horizental'
         },
      ],
      photoFn: HandsOut_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: false,
   },
   {
      name: 'handsBend' as SectionNames,
      nameFA: 'خم شدن دست ها',
      questions: [
         {
            id: 31,
            src: '/images/dynamicEvaluation/img-32.png',
            title: 'بالا آمدن  شانه',
            direction: 'horizental'
         },
         {
            id: 32,
            src: '/images/dynamicEvaluation/img-33.png',
            title: 'گودشدن کمر',
            direction: 'horizental'
         },
         {
            id: 33,
            src: '/images/dynamicEvaluation/img-34.png',
            title: 'خم شدن آرنج',
            direction: 'horizental'
         },
      ],
      photoFn: HandsBend_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: false,
   },
   {
      name: 'handsRotate' as SectionNames,
      nameFA: 'چرخش دست ها',
      questions: [
         {
            id: 24,
            src: '/images/dynamicEvaluation/img-26.png',
            title: 'چرخش دست ها بالاآمدن شانه ها',
            direction: 'horizental'
         },
         {
            id: 25,
            src: '/images/dynamicEvaluation/img-27.png',
            title: 'چرخش دست ها پروترکشن شانه ها',
            direction: 'horizental'
         },
         {
            id: 26,
            src: '/images/dynamicEvaluation/img-28.png',
            title: 'چرخش داخلی دست ها فاصله از دیوار',
            direction: 'horizental'
         },
         {
            id: 27,
            src: '/images/dynamicEvaluation/img-25.png',
            title: 'چرخش خارجی دست ها فاصله از دیوار',
            direction: 'horizental'
         },
      ],
      photoFn: HandsRotate_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: false,
   },
   {
      name: 'walkingFront' as SectionNames,
      nameFA: 'راه رفتن قدامی',
      questions: [
         {
            id: 1,
            src: '/images/dynamicEvaluation/img-1.png',
            title: 'صاف شدن پاها و زانو به داخل',
            direction: 'vertical'
         },
      ],
      photoFn: WalkingFront_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
   {
      name: 'walkingBack' as SectionNames,
      nameFA: 'راه رفتن خلفی',
      questions: [
         {
            id: 2,
            src: '/images/dynamicEvaluation/img-17.png',
            title: 'بالاآمدن ران',
            direction: 'vertical'
         },
         {
            id: 3,
            src: '/images/dynamicEvaluation/img-18.png',
            title: 'چرخش بیش از حد لگن',
            direction: 'vertical'
         },
         {
            id: 4,
            src: '/images/dynamicEvaluation/img-19.png',
            title: 'صاف شدن و چرخش به خارج پاها',
            direction: 'vertical'
         },
      ],
      photoFn: WalkingBack_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
   {
      name: 'walkingSide' as SectionNames,
      nameFA: 'راه رفتن جانبی',
      questions: [
         {
            id: 5,
            src: '/images/dynamicEvaluation/img-14.png',
            title: 'سر به جلو میرود',
            direction: 'vertical'
         },
         {
            id: 6,
            src: '/images/dynamicEvaluation/img-15.png',
            title: 'شانه ها گرد می شود',
            direction: 'vertical'
         },
         {
            id: 7,
            src: '/images/dynamicEvaluation/img-16.png',
            title: 'کمر گود می شود',
            direction: 'vertical'
         },
      ],
      photoFn: WalkingSide_P,
      videoFn: WalkingFront_V,
      zipFile: undefined as string | null | undefined,
      shouldAIShow: true,
   },
]

export type dynamicEvaluationType = typeof dynamicEvaluation;
export default dynamicEvaluation;