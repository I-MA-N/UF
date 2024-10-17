import SectionNames from "../../../../../types/SectionNames";
import HandsBendSide_C from "../AIformulas/dynamicEvaluation/HandsBendSide_C";
import HandsBendSide_P from "../AIformulas/dynamicEvaluation/HandsBendSide_P";
import HandsOutSide_C from "../AIformulas/dynamicEvaluation/HandsOutSide_C";
import HandsOutSide_P from "../AIformulas/dynamicEvaluation/HandsOutSide_P";
import HandsRotate_C from "../AIformulas/dynamicEvaluation/HandsRotateSide_C";
import HandsRotate_P from "../AIformulas/dynamicEvaluation/HandsRotateSide_P";
import SquatBack_C from "../AIformulas/dynamicEvaluation/SquatBack_C";
import SquatBack_P from "../AIformulas/dynamicEvaluation/SquatBack_P";
import SquatFront_C from "../AIformulas/dynamicEvaluation/SquatFront_C";
import SquatFront_P from "../AIformulas/dynamicEvaluation/SquatFront_P";
import SquatOneFoot_C from "../AIformulas/dynamicEvaluation/SquatOneFoot_C";
import SquatOneFoot_P from "../AIformulas/dynamicEvaluation/SquatOneFoot_P";
import SquatSide_C from "../AIformulas/dynamicEvaluation/SquatSide_C";
import SquatSide_P from "../AIformulas/dynamicEvaluation/SquatSide_P";
import SwimSide_C from "../AIformulas/dynamicEvaluation/SwimSide_C";
import SwimSide_P from "../AIformulas/dynamicEvaluation/SwimSide_P";
import WalkingBack_C from "../AIformulas/dynamicEvaluation/WalkingBack_C";
import WalkingBack_P from "../AIformulas/dynamicEvaluation/WalkingBack_P";
import WalkingFront_C from "../AIformulas/dynamicEvaluation/WalkingFront_C";
import WalkingFront_P from "../AIformulas/dynamicEvaluation/WalkingFront_P";
import WalkingFront_V from "../AIformulas/dynamicEvaluation/WalkingFront_V";
import WalkingSide_C from "../AIformulas/dynamicEvaluation/WalkingSide_C";
import WalkingSide_P from "../AIformulas/dynamicEvaluation/WalkingSide_P";

const dynamicEvaluation = [
   [
      {
         name: 'squatFront' as SectionNames,
         nameFA: 'اسکات قدامی',
         questions: [
            {
               id: 1,
               src: 'img-2.png',
               title: 'حرکت زانو به خارج راست',
               direction: 'vertical'
            },
            {
               id: 2,
               src: 'img-2.png',
               title: 'حرکت زانو به خارج چپ',
               direction: 'vertical'
            },
            {
               id: 3,
               src: 'img-4.png',
               title: 'حرکت زانو به داخل راست',
               direction: 'vertical'
            },
            {
               id: 4,
               src: 'img-4.png',
               title: 'حرکت زانو به داخل چپ',
               direction: 'vertical'
            },
            {
               id: 5,
               src: 'img-5.png',
               title: 'چرخش پا به خارج راست',
               direction: 'vertical'
            },
            {
               id: 6,
               src: 'img-5.png',
               title: 'چرخش پا به خارج چپ',
               direction: 'vertical'
            },
            {
               id: 7,
               src: 'img-3.png',
               title: 'چرخش پا به داخل راست',
               direction: 'vertical'
            },
            {
               id: 8,
               src: 'img-3.png',
               title: 'چرخش پا به داخل چپ',
               direction: 'vertical'
            },
         ],
         photoFn: SquatFront_P,
         videoFn: WalkingFront_V,
         cropFn: SquatFront_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
      {
         name: 'squatBack' as SectionNames,
         nameFA: 'اسکات خلفی',
         questions: [
            {
               id: 9,
               src: 'img-11.png',
               title: 'انتقال نامتقارن',
               direction: 'vertical'
            },
            {
               id: 10,
               src: 'img-12.png',
               title: 'بلند شدن پاشنه راست',
               direction: 'vertical'
            },
            {
               id: 11,
               src: 'img-12.png',
               title: 'بلند شدن پاشنه چپ',
               direction: 'vertical'
            },
            {
               id: 12,
               src: 'img-13.png',
               title: 'چرخش پا به خارج راست',
               direction: 'vertical'
            },
            {
               id: 13,
               src: 'img-13.png',
               title: 'چرخش پا به خارج چپ',
               direction: 'vertical'
            },
         ],
         photoFn: SquatBack_P,
         videoFn: WalkingFront_V,
         cropFn: SquatBack_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
      {
         name: 'squatSide' as SectionNames,
         nameFA: 'اسکات جانبی',
         questions: [
            {
               id: 14,
               src: 'img-8.png',
               title: 'خمیدگی به جلو',
               direction: 'vertical'
            },
            {
               id: 15,
               src: 'img-9.png',
               title: 'دست ها در جلو',
               direction: 'vertical'
            },
            {
               id: 16,
               src: 'img-7.png',
               title: 'کمر صاف',
               direction: 'vertical'
            },
            {
               id: 17,
               src: 'img-10.png',
               title: 'گود شدن کمر',
               direction: 'vertical'
            },
         ],
         photoFn: SquatSide_P,
         videoFn: WalkingFront_V,
         cropFn: SquatSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
   ],
   [
      {
         name: 'squatOneFoot' as SectionNames,
         nameFA: 'اسکات تک پا',
         questions: [
            {
               id: 18,
               src: 'img-20.png',
               title: 'چرخش خارجی تنه',
               direction: 'vertical'
            },
            {
               id: 19,
               src: 'img-21.png',
               title: 'چرخش داخلی تنه',
               direction: 'vertical'
            },
            {
               id: 20,
               src: 'img-22.png',
               title: 'سقوط ران',
               direction: 'vertical'
            },
            {
               id: 21,
               src: 'img-24.png',
               title: 'بالا آمدن ران',
               direction: 'vertical'
            },
            {
               id: 22,
               src: 'img-23.png',
               title: 'حرکت زانو به داخل',
               direction: 'vertical'
            },
         ],
         photoFn: SquatOneFoot_P,
         videoFn: WalkingFront_V,
         cropFn: SquatOneFoot_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
   ],
   [
      {
         name: 'swimSide' as SectionNames,
         nameFA: 'شنا',
         questions: [
            {
               id: 23,
               src: 'img-35.png',
               title: 'گود شدن  کمر',
               direction: 'horizental'
            },
            {
               id: 24,
               src: 'img-36.png',
               title: 'صاف شدن کمر',
               direction: 'horizental'
            },
            {
               id: 25,
               src: 'img-37.png',
               title: 'بالا آمدن شانه',
               direction: 'horizental'
            },
            {
               id: 26,
               src: 'img-38.png',
               title: 'بالی شدن کتف',
               direction: 'horizental'
            },
            {
               id: 27,
               src: 'img-39.png',
               title: 'هایپراکستنشن گردن',
               direction: 'horizental'
            },
         ],
         photoFn: SwimSide_P,
         videoFn: WalkingFront_V,
         cropFn: SwimSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
   ],
   [
      {
         name: 'handsOutSide' as SectionNames,
         nameFA: 'دور شدن دست ها',
         questions: [
            {
               id: 28,
               src: 'img-29.png',
               title: 'بالاآمدن شانه',
               direction: 'horizental'
            },
            {
               id: 29,
               src: 'img-30.png',
               title: 'پروتکشن شانه',
               direction: 'horizental'
            },
            {
               id: 30,
               src: 'img-31.png',
               title: 'خم شدن آرنج راست',
               direction: 'horizental'
            },
            {
               id: 31,
               src: 'img-31.png',
               title: 'خم شدن آرنج چپ',
               direction: 'horizental'
            },
         ],
         photoFn: HandsOutSide_P,
         videoFn: WalkingFront_V,
         cropFn: HandsOutSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
      {
         name: 'handsBendSide' as SectionNames,
         nameFA: 'بالا آوردن دست ها',
         questions: [
            {
               id: 32,
               src: 'img-32.png',
               title: 'بالا آمدن  شانه',
               direction: 'horizental'
            },
            {
               id: 33,
               src: 'img-33.png',
               title: 'گودشدن کمر',
               direction: 'horizental'
            },
            {
               id: 34,
               src: 'img-34.png',
               title: 'خم شدن آرنج ها راست',
               direction: 'horizental'
            },
            {
               id: 35,
               src: 'img-34.png',
               title: 'خم شدن آرنج ها چپ',
               direction: 'horizental'
            },
         ],
         photoFn: HandsBendSide_P,
         videoFn: WalkingFront_V,
         cropFn: HandsBendSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
      {
         name: 'handsRotateSide' as SectionNames,
         nameFA: 'چرخش دست ها',
         questions: [
            {
               id: 36,
               src: 'img-26.png',
               title: 'چرخش دست ها بالاآمدن شانه ها',
               direction: 'horizental'
            },
            {
               id: 37,
               src: 'img-27.png',
               title: 'چرخش دست ها پروترکشن شانه ها',
               direction: 'horizental'
            },
            {
               id: 38,
               src: 'img-28.png',
               title: 'چرخش داخلی دست ها فاصله از دیوار',
               direction: 'horizental'
            },
            {
               id: 39,
               src: 'img-25.png',
               title: 'چرخش خارجی دست ها فاصله از دیوار',
               direction: 'horizental'
            },
         ],
         photoFn: HandsRotate_P,
         videoFn: WalkingFront_V,
         cropFn: HandsRotate_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: false,
      },
   ],
   [
      {
         name: 'walkingFront' as SectionNames,
         nameFA: 'راه رفتن قدامی',
         questions: [
            {
               id: 40,
               src: 'img-1.png',
               title: 'چرخش به داخل یا خارج زانو راست',
               direction: 'vertical'
            },
            {
               id: 41,
               src: 'img-1.png',
               title: 'چرخش به داخل یا خارج زانو چپ',
               direction: 'vertical'
            },
         ],
         photoFn: WalkingFront_P,
         videoFn: WalkingFront_V,
         cropFn: WalkingFront_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
      {
         name: 'walkingBack' as SectionNames,
         nameFA: 'راه رفتن خلفی',
         questions: [
            {
               id: 42,
               src: 'img-17.png',
               title: 'بالاآمدن ران',
               direction: 'vertical'
            },
            {
               id: 43,
               src: 'img-18.png',
               title: 'چرخش بیش از حد لگن',
               direction: 'vertical'
            },
            {
               id: 44,
               src: 'img-19.png',
               title: 'چرخش داخلی یا خارجی پا راست',
               direction: 'vertical'
            },
            {
               id: 45,
               src: 'img-19.png',
               title: 'چرخش داخلی یا خارجی پا چپ',
               direction: 'vertical'
            },
         ],
         photoFn: WalkingBack_P,
         videoFn: WalkingFront_V,
         cropFn: WalkingBack_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
      {
         name: 'walkingSide' as SectionNames,
         nameFA: 'راه رفتن جانبی',
         questions: [
            {
               id: 46,
               src: 'img-14.png',
               title: 'سر به جلو میرود',
               direction: 'vertical'
            },
            {
               id: 47,
               src: 'img-15.png',
               title: 'شانه ها گرد می شود',
               direction: 'vertical'
            },
            {
               id: 48,
               src: 'img-16.png',
               title: 'کمر گود می شود',
               direction: 'vertical'
            },
         ],
         photoFn: WalkingSide_P,
         videoFn: WalkingFront_V,
         cropFn: WalkingSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      },
   ],
]

export type dynamicEvaluationType = typeof dynamicEvaluation;
export default dynamicEvaluation;