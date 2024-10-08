import SectionNames from "../../../../../types/SectionNames";
import LegRaisingLeftSide_C from "../AIformulas/FMS/LegRaisingLeftSide_C";
import LegRaisingLeftSide_P from "../AIformulas/FMS/LegRaisingLeftSide_P";
import LegRaisingRightSide_C from "../AIformulas/FMS/LegRaisingRightSide_C";
import LegRaisingRightSide_P from "../AIformulas/FMS/LegRaisingRightSide_P";
import LungingLeftFront_C from "../AIformulas/FMS/LungingLeftFront_C";
import LungingLeftFront_P from "../AIformulas/FMS/LungingLeftFront_P";
import LungingRightFront_C from "../AIformulas/FMS/LungingRightFront_C";
import LungingRightFront_P from "../AIformulas/FMS/LungingRightFront_P";
import PushUpSide_C from "../AIformulas/FMS/PushUpSide_C";
import PushUpSide_P from "../AIformulas/FMS/PushUpSide_P";
import ReachingLeftBack_C from "../AIformulas/FMS/ReachingLeftBack_C";
import ReachingLeftBack_P from "../AIformulas/FMS/ReachingLeftBack_P";
import ReachingRightBack_C from "../AIformulas/FMS/ReachingRightBack_C";
import ReachingRightBack_P from "../AIformulas/FMS/ReachingRightBack_P";
import RotaryStabilityLeftSide_C from "../AIformulas/FMS/RotaryStabilityLeftSide_C";
import RotaryStabilityLeftSide_P from "../AIformulas/FMS/RotaryStabilityLeftSide_P";
import RotaryStabilityRightSide_C from "../AIformulas/FMS/RotaryStabilityRightSide_C";
import RotaryStabilityRightSide_P from "../AIformulas/FMS/RotaryStabilityRightSide_P";
import SquattingFront_C from "../AIformulas/FMS/SquattingFront_C";
import SquattingFront_P from "../AIformulas/FMS/SquattingFront_P";
import SteppingLeftFront_C from "../AIformulas/FMS/SteppingLeftFront_C";
import SteppingLeftFront_P from "../AIformulas/FMS/SteppingLeftFront_P";
import SteppingRightFront_C from "../AIformulas/FMS/SteppingRightFront_C";
import SteppingRightFront_P from "../AIformulas/FMS/SteppingRightFront_P";

const FMS = [
   [
      {
         name: 'squattingFront' as SectionNames,
         nameFA: 'اسکات کامل قدامی',
         questions: [
            {
               id: 1,
               title: 'اسکات کامل',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/1.png'],
               direction: 'vertical'
            },
         ],
         photoFn: SquattingFront_P,
         cropFn: SquattingFront_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'steppingRightFront' as SectionNames,
         nameFA: 'عبور از مانع راست قدامی',
         questions: [
            {
               id: 2,
               title: 'عبور از مانع راست',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/2.png'],
               direction: 'vertical'
            },
         ],
         photoFn: SteppingRightFront_P,
         cropFn: SteppingRightFront_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'steppingLeftFront' as SectionNames,
         nameFA: 'عبور از مانع چپ قدامی',
         questions: [
            {
               id: 3,
               title: 'عبور از مانع چپ',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/3.png'],
               direction: 'vertical'
            },
         ],
         photoFn: SteppingLeftFront_P,
         cropFn: SteppingLeftFront_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'lungingRightFront' as SectionNames,
         nameFA: 'لانچ خطی راست قدامی',
         questions: [
            {
               id: 4,
               title: 'لانچ خطی راست',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/4.png'],
               direction: 'vertical'
            },
         ],
         photoFn: LungingRightFront_P,
         cropFn: LungingRightFront_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'lungingLeftFront' as SectionNames,
         nameFA: 'لانچ خطی چپ قدامی',
         questions: [
            {
               id: 5,
               title: 'لانچ خطی چپ',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/5.png'],
               direction: 'vertical'
            },
         ],
         photoFn: LungingLeftFront_P,
         cropFn: LungingLeftFront_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'reachingRightBack' as SectionNames,
         nameFA: 'تحرک پذیری شانه ها راست خلفی',
         questions: [
            {
               id: 6,
               title: 'تحرک پذیری شانه ها راست',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/6.png'],
               direction: 'vertical'
            },
         ],
         photoFn: ReachingRightBack_P,
         cropFn: ReachingRightBack_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'reachingLeftBack' as SectionNames,
         nameFA: 'تحرک پذیری شانه ها چپ خلفی',
         questions: [
            {
               id: 7,
               title: 'تحرک پذیری شانه ها چپ',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/7.png'],
               direction: 'vertical'
            },
         ],
         photoFn: ReachingLeftBack_P,
         cropFn: ReachingLeftBack_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'legRaisingRightSide' as SectionNames,
         nameFA: 'بالا آوردن فعال پا راست جانبی',
         questions: [
            {
               id: 8,
               title: 'بالا آوردن فعال پا راست',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/8.png'],
               direction: 'horizental'
            },
         ],
         photoFn: LegRaisingRightSide_P,
         cropFn: LegRaisingRightSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'legRaisingLeftSide' as SectionNames,
         nameFA: 'بالا آوردن فعال پا چپ جانبی',
         questions: [
            {
               id: 9,
               title: 'بالا آوردن فعال پا چپ',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/9.png'],
               direction: 'horizental'
            },
         ],
         photoFn: LegRaisingLeftSide_P,
         cropFn: LegRaisingLeftSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'pushUpSide' as SectionNames,
         nameFA: 'شنای سوئدی جانبی',
         questions: [
            {
               id: 10,
               title: 'شنای سوئدی',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/10.png'],
               direction: 'horizental'
            },
         ],
         photoFn: PushUpSide_P,
         cropFn: PushUpSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'rotaryStabilityRightSide' as SectionNames,
         nameFA: 'ثبات چرخشی راست جانبی',
         questions: [
            {
               id: 11,
               title: 'ثبات چرخشی راست',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/11.png'],
               direction: 'horizental'
            },
         ],
         photoFn: RotaryStabilityRightSide_P,
         cropFn: RotaryStabilityRightSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
   [
      {
         name: 'rotaryStabilityLeftSide' as SectionNames,
         nameFA: 'ثبات چرخشی چپ جانبی',
         questions: [
            {
               id: 12,
               title: 'ثبات چرخشی چپ',
               keys: [3, 2, 1, 0],
               values: [3, 2, 1, 0],
               images: ['/FMS/12.png'],
               direction: 'horizental'
            },
         ],
         photoFn: RotaryStabilityLeftSide_P,
         cropFn: RotaryStabilityLeftSide_C,
         zipFile: undefined as string | null | undefined,
         shouldAIShow: true,
      }
   ],
]

export type FMSType = typeof FMS;
export default FMS;