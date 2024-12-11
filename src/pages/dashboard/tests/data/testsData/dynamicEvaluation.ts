import SectionNames from "../../../../../types/SectionNames";
import HandsUp_C from "../AIformulas/dynamicEvaluation/HandsUp_C";
import HandsUp_P from "../AIformulas/dynamicEvaluation/HandsUp_P";
import HandsOut_C from "../AIformulas/dynamicEvaluation/HandsOut_C";
import HandsOut_P from "../AIformulas/dynamicEvaluation/HandsOut_P";
import HandsRotate_C from "../AIformulas/dynamicEvaluation/HandsRotate_C";
import HandsRotate_P from "../AIformulas/dynamicEvaluation/HandsRotate_P";
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
import WalkingSide_C from "../AIformulas/dynamicEvaluation/WalkingSide_C";
import WalkingSide_P from "../AIformulas/dynamicEvaluation/WalkingSide_P";

const dynamicEvaluation = [
   [
      {
         name: 'squatFront' as SectionNames,
         nameFA: 'اسکات قدامی',
         questions: [
            {
               number: 1,
               serverID: 'اسکات قدامی حرکت زانوها به خارج',
               title: 'حرکت زانوها به خارج',
               src: 'img-2.png',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: آسیب تاندون کشکک(زانوی پرندگان)، سندرم درد کشککی رانی، آسیب ACL، التهاب تاندون و نوار ایلیوتیبیال',
            },
            {
               number: 2,
               serverID: 'اسکات قدامی حرکت زانوها به داخل',
               title: 'حرکت زانوها به داخل',
               src: 'img-4.png',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: آسیب تاندون کشکک(زانوی پرندگان)، سندرم درد کشککی رانی، آسیب ACL، التهاب تاندون و نوار ایلیوتیبیال',
            },
            {
               number: 3,
               serverID: 'اسکات قدامی چرخش به خارج پاها',
               title: 'چرخش پاها به خارج',
               src: 'img-5.png',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)',
            },
            {
               number: 4,
               serverID: 'اسکات قدامی صاف شدن پاها',
               title: 'چرخش پاها به داخل',
               src: 'img-3.png',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)',
            },
         ],
         photoFn: SquatFront_P,
         cropFn: SquatFront_C,
      },
      {
         name: 'squatBack' as SectionNames,
         nameFA: 'اسکات خلفی',
         questions: [
            {
               number: 5,
               serverID: 'اسکات خلفی انتقال نامتقارن ',
               title: 'انتقال نامتقارن',
               src: 'img-11.png',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: استرین همسترینگ، چهارسر و کشاله، کمردرد، درد مفصل خاجی خاصره ای',
            },
            {
               number: 6,
               serverID: 'اسکات خلفی بلند شدن پاشنه',
               title: 'بلند شدن پاشنه',
               src: 'img-12.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضله نعلی و کم فعالی عضله ساقی قدامی',
            },
            {
               number: 7,
               serverID: 'اسکات خلفی صاف شدن پا',
               title: 'صاف شدن پا',
               src: 'img-13.png',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)',
            },
         ],
         photoFn: SquatBack_P,
         cropFn: SquatBack_C,
      },
      {
         name: 'squatSide' as SectionNames,
         nameFA: 'اسکات جانبی',
         questions: [
            {
               number: 8,
               serverID: 'اسکات جانبی خمیدگی به جلو',
               title: 'خمیدگی به جلو',
               src: 'img-8.png',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: استرین همسترینگ، چهارسر و کشاله، کمردرد',
            },
            {
               number: 9,
               serverID: 'اسکات جانبی دست ها در جلو',
               title: 'دست ها در جلو',
               src: 'img-9.png',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: سردرد، التهاب تاندون دوسربازویی، آسیب های شانه',
            },
            {
               number: 10,
               serverID: 'اسکات جانبی کمر صاف',
               title: 'کمر صاف',
               src: 'img-7.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات، خم کننده ران، راست کننده ستون فقرات، پشتی بزرگ و کم فعالیتی در عضلاتی سرینی بزرگ، همسترینگ، پایدار کننده های مرکزی تنه',
            },
            {
               number: 11,
               serverID: 'اسکات جانبی گود شدن کمر',
               title: 'کمر گود',
               src: 'img-10.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات، خم کننده ران، راست کننده ستون فقرات، پشتی بزرگ و کم فعالیتی در عضلاتی سرینی بزرگ، همسترینگ، پایدار کننده های مرکزی تنه',
            },
         ],
         photoFn: SquatSide_P,
         cropFn: SquatSide_C,
      },
   ],
   [
      {
         name: 'squatOneFoot' as SectionNames,
         nameFA: 'اسکات تک پا',
         questions: [
            {
               number: 12,
               serverID: 'اسکات تک پا چرخش خارجی تنه',
               title: 'چرخش خارجی تنه',
               src: 'img-20.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مایل داخلی، مایل خارجی، گلابی شکل',
            },
            {
               number: 13,
               serverID: 'اسکات تک پا چرخش داخلی تنه',
               title: 'چرخش داخلی تنه',
               src: 'img-21.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مایل داخلی، مایل خارجی، کشنده پهن نیام، عضلات نزدیک کننده',
            },
            {
               number: 14,
               serverID: 'اسکات تک پا سقوط ران',
               title: 'سقوط ران',
               src: 'img-22.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات نزدیک کننده(سمت موافق) و کم فعالی عضلات سرینی میانی، مربع کمری',
            },
            {
               number: 15,
               serverID: 'اسکات تک پا بالا آمدن ران',
               title: 'بالا آمدن ران',
               src: 'img-24.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مربع کمری(سمت مقابل پای تکیه)، کشنده ی پهن نیام / سرینی کوچک(سمت موافق پای تکیه)',
            },
            {
               number: 16,
               serverID: 'اسکات تک پا حرکت زانو به داخل',
               title: 'حرکت زانو به داخل',
               src: 'img-23.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات نزدیک کننده، دو سررانی(سر کوتاه)، کشنده ی پهن نیام، دوقولی خارجی، پهن خارجی',
            },
         ],
         photoFn: SquatOneFoot_P,
         cropFn: SquatOneFoot_C,
      },
   ],
   [
      {
         name: 'swimSide' as SectionNames,
         nameFA: 'شنا',
         questions: [
            {
               number: 17,
               serverID: 'شنا گود شدن کمر',
               title: 'کمر گود',
               src: 'img-35.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات راست کننده ی ستون فقرات، خم کننده های ران و کم فعالی عضلات پایدار کننده های ناحیه ثبات مرکزی تنه، سرینی بزرگ',
            },
            {
               number: 18,
               serverID: 'شنا صاف شدن کمر',
               title: 'کمر صاف',
               src: 'img-36.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات راست شکمی، مایل خارجی و کم فعالی عضلات پایدار کننده های ناحیه مرکزی تنه ',
            },
            {
               number: 19,
               serverID: 'شنا بالا آمدن شانه',
               title: 'بالا آمدن شانه',
               src: 'img-37.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزنقه ی فوقانی، گوشه ای، جناغی-چنبری-پستانی و کم فعالی عضلات ذوزنقه میانی و تحتانی',
            },
            {
               number: 20,
               serverID: 'شنا هایپراکستنشن گردن',
               title: 'هایپراکستنشن گردن',
               src: 'img-39.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذورنقه ی فوقانی، جناغی-چنبری-پستانی، گوشه ای، و کم فعالی عضلات خم کننده های عمقی گردن',
            },
            {
               number: 21,
               serverID: 'شنا بالی شدن کتف',
               title: 'بالی شدن کتف',
               src: 'img-38.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات سینه ای کوچک و کم فعالی عضلات دندان های قدامی، ذوزنقه ی میانی و تحتانی',
            },
         ],
         photoFn: SwimSide_P,
         cropFn: SwimSide_C,
      },
   ],
   [
      {
         name: 'handsOut' as SectionNames,
         nameFA: 'دور شدن دست ها',
         questions: [
            {
               number: 22,
               serverID: 'دور شدن دست ها بالا آمدن شانه',
               title: 'بالا آمدن شانه',
               src: 'img-29.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزتقه ای فوقانی و گوشه ای و کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه میانی و تحتانی',
            },
            {
               number: 23,
               serverID: 'دور شدن دست ها خم شدن آرنج ها',
               title: 'خم شدن آرنج ها',
               src: 'img-31.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات دوسربازو(سر دراز) و احتمال کم فعالی عضلات سه سربازو(سر دراز) و روتیتورکاف',
            },
            {
               number: 24,
               serverID: 'دور شدن دست ها پروتکشن شانه',
               title: 'پروتکشن شانه',
               src: 'img-30.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات سینه ای بزرگ/کوچک و کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه یمیانی و تحتانی و کم تحرکی کپسول خلفی',
            },
         ],
         photoFn: HandsOut_P,
         cropFn: HandsOut_C,
      },
      {
         name: 'handsUp' as SectionNames,
         nameFA: 'خم شدن دست ها',
         questions: [
            {
               number: 25,
               serverID: 'خم شدن دست ها خم شدن آرنج',
               title: 'خم شدن آرنج ها',
               src: 'img-34.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات دوسربازو(سردراز)، پشتی بزرگ، گرد بزرگ و سینه ای بزرگ و احتمال کم فعالی عضلات سه سر بازو(سردراز) و روتیتورکاف',
            },
            {
               number: 26,
               serverID: 'خم شدن دست ها بالاآمدن شانه',
               title: 'بالا آمدن شانه',
               src: 'img-32.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزتقه ای فوقانی و گوشه ای و کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه یمیانی و تحتانی',
            },
            {
               number: 27,
               serverID: 'خم شدن دست ها گود شدن کمر',
               title: 'کمر گود',
               src: 'img-33.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات راست کننده ستون فقرات، پشتی بزرگ و سینه ای بزرگ و کوچک، و احتمال کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه ی میانی و تحتانی',
            },
         ],
         photoFn: HandsUp_P,
         cropFn: HandsUp_C,
      },
      {
         name: 'handsRotate' as SectionNames,
         nameFA: 'چرخش دست ها',
         questions: [
            {
               number: 28,
               serverID: 'چرخش دست ها بالاآمدن شانه ها',
               title: 'بالا آمدن شانه ها',
               src: 'img-26.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزنقه ی فوقانی و گوشه ای و احتمال کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه میانی و تحتانی',
            },
            {
               number: 29,
               serverID: 'چرخش دست ها پروترکشن شانه ها',
               title: 'پروترکشن شانه ها',
               src: 'img-27.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات سینه ای بزرگ/کوچک، و کم تحرکی کپسول خلفی- و احتمال کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه ی میانی/تحتانی',
            },
            {
               number: 30,
               serverID: 'چرخش داخلی دست ها فاصله از دیوار',
               title: 'چرخش داخلی دست ها فاصله از دیوار',
               src: 'img-28.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات گرد کوچک و تحت خاری و احتمال کم تحرکی کپسول خلفی و کم فعالی عضلات تحت کتفی و گرد بزرگ',
            },
            {
               number: 31,
               serverID: 'چرخش خارجی دست ها فاصله از دیوار ',
               title: 'چرخش خارجی دست ها فاصله از دیوار',
               src: 'img-25.png',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات تحت کتفی، سینه ای بزرگ، گرد بزرگ و پشتی بزرگ، و کم فعالی عضلات گرد کوچک و تحت خاری',
            },
         ],
         photoFn: HandsRotate_P,
         cropFn: HandsRotate_C,
      },
   ],
   [
      {
         name: 'walkingFront' as SectionNames,
         nameFA: 'راه رفتن قدامی',
         questions: [
            {
               number: 32,
               serverID: 'راه رفتن صاف شدن پاها و چرخش زانو به داخل',
               title: 'چرخش زانوها به داخل',
               src: 'img-1.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات اداکتورها، دوسررانی(سرکوتاه)، کشنده پهن نیام، دوقلوی خارجی، چهارسر خارجی و احتمال کم فعالی عضلات همسترینگ میانی، دوقلو میانی، سرینی میانی/بزرگ، ساقی قدامی، ساقی خلفی',
            },
         ],
         photoFn: WalkingFront_P,
         cropFn: WalkingFront_C,
      },
      {
         name: 'walkingBack' as SectionNames,
         nameFA: 'راه رفتن خلفی',
         questions: [
            {
               number: 33,
               serverID: 'راه رفتن بالا آمدن ران',
               title: 'بالا آمدن ران',
               src: 'img-17.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مایل خارجی، عضلات مربع کمری(سمت مقابل پای تکیه)، کشنده پهن نیام، سرینی کوچک(سمت موافق پای تکیه) و احتمال کم فعالی عضلات نزدیک کننده(سمت موافق) و سرینی میانی(سمت موافق)',
            },
            {
               number: 34,
               serverID: 'راه رفتن صاف شدن و چرخش به خارج پاها',
               title: 'چرخش پاها به خارج',
               src: 'img-19.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات نازک نئی ها، دوقلوی خارجی، دوسررانی(سرکوتاه)، کشنده پهن نیام، نعلی و احتمال کم فعالی عضلات ساقی قدامی، ساقی خلفی، دوقلوی داخلی، سرینی میانی/بزرگ، راست داخلی، خیاطه، رکبی، همسترینگ داخلی',
            },
            {
               number: 35,
               serverID: 'راه رفتن چرخش بیش از حد لگن',
               title: 'چرخش بیش از حد لگن',
               src: 'img-18.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مایل خارجی، عضلات نزدیک کننده، همسترینگ و احتمال کم فعالی عضلات سرینی بزرگ و میانی، پایدار کننده های تاحیه مرکزی بدن',
            },
         ],
         photoFn: WalkingBack_P,
         cropFn: WalkingBack_C,
      },
      {
         name: 'walkingSide' as SectionNames,
         nameFA: 'راه رفتن جانبی',
         questions: [
            {
               number: 36,
               serverID: 'راه رفتن سر به جلو',
               title: 'سر به جلو',
               src: 'img-14.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزنقه ای فوقانی، گوشه ای، جناغی-چنبری-پستانی و احتمال کم فعالی عضلات خم کننده های عمقی گردن',
            },
            {
               number: 37,
               serverID: 'راه رفتن شانه ها گرد می شود',
               title: 'شانه گرد',
               src: 'img-15.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات سینه ای ها و پشتی بزرگ و احتمال کم فعالی عضلات ذوزنقه ی میانی و تحتانی و روتیتورکاف',
            },
            {
               number: 38,
               serverID: 'راه رفتن گود شدن کمر',
               title: 'کمر گود',
               src: 'img-16.png',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات خم کننده های ران، راست کننده ی ستون فقرات و پشتی بزرگ و احتمال کم فعالی عضلات سرینی بزرگ و میانی، پایدار کننده های ناحیه مرکزی تنه و همسترینگ',
            },
         ],
         photoFn: WalkingSide_P,
         cropFn: WalkingSide_C,
      },
   ],
]

export type dynamicEvaluationType = typeof dynamicEvaluation;
export default dynamicEvaluation;