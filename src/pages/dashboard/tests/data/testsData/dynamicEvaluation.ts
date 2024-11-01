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
               title: 'حرکت زانوی راست به خارج',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: آسیب تاندون کشکک(زانوی پرندگان)، سندرم درد کشککی رانی، آسیب ACL، التهاب تاندون و نوار ایلیوتیبیال',
            },
            {
               id: 2,
               src: 'img-4.png',
               title: 'حرکت زانوی راست به داخل',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: آسیب تاندون کشکک(زانوی پرندگان)، سندرم درد کشککی رانی، آسیب ACL، التهاب تاندون و نوار ایلیوتیبیال',
            },
            {
               id: 3,
               src: 'img-2.png',
               title: 'حرکت زانوی چپ به خارج',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: آسیب تاندون کشکک(زانوی پرندگان)، سندرم درد کشککی رانی، آسیب ACL، التهاب تاندون و نوار ایلیوتیبیال',
            },
            {
               id: 4,
               src: 'img-4.png',
               title: 'حرکت زانوی چپ به داخل',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: آسیب تاندون کشکک(زانوی پرندگان)، سندرم درد کشککی رانی، آسیب ACL، التهاب تاندون و نوار ایلیوتیبیال',
            },
            {
               id: 5,
               src: 'img-5.png',
               title: 'چرخش پای راست به خارج',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)',
            },
            {
               id: 6,
               src: 'img-3.png',
               title: 'چرخش پای راست به داخل',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)',
            },
            {
               id: 7,
               src: 'img-5.png',
               title: 'چرخش پای چپ به خارج',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)',
            },
            {
               id: 8,
               src: 'img-3.png',
               title: 'چرخش پای چپ به داخل',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)',
            },
         ],
         photoFn: SquatFront_P,
         videoFn: WalkingFront_V,
         cropFn: SquatFront_C,
         zipFile: undefined as string | null | undefined,
      },
      {
         name: 'squatBack' as SectionNames,
         nameFA: 'اسکات خلفی',
         questions: [
            {
               id: 9,
               src: 'img-11.png',
               title: 'انتقال نامتقارن',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: استرین همسترینگ، چهارسر و کشاله، کمردرد، درد مفصل خاجی خاصره ای',
            },
            {
               id: 10,
               src: 'img-12.png',
               title: 'بلند شدن پاشنه راست',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضله نعلی و کم فعالی عضله ساقی قدامی',
            },
            {
               id: 11,
               src: 'img-12.png',
               title: 'بلند شدن پاشنه چپ',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضله نعلی و کم فعالی عضله ساقی قدامی',
            },
            {
               id: 12,
               src: 'img-13.png',
               title: 'چرخش پای راست به خارج',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)',
            },
            {
               id: 13,
               src: 'img-13.png',
               title: 'چرخش پای چپ به خارج',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: التهاب نیام کف پایی، آسیب تاندون آشیل، سندرم فشار بر درشت نی میانی، اسپرین مچ پا، آسیب تاندون کشکک(زانوی پرندگان)',
            },
         ],
         photoFn: SquatBack_P,
         videoFn: WalkingFront_V,
         cropFn: SquatBack_C,
         zipFile: undefined as string | null | undefined,
      },
      {
         name: 'squatSide' as SectionNames,
         nameFA: 'اسکات جانبی',
         questions: [
            {
               id: 14,
               src: 'img-8.png',
               title: 'خمیدگی به جلو',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: استرین همسترینگ، چهارسر و کشاله، کمردرد',
            },
            {
               id: 15,
               src: 'img-9.png',
               title: 'دست ها در جلو',
               direction: 'vertical',
               problemDescription: 'آسیب های احتمالی: سردرد، التهاب تاندون دوسربازویی، آسیب های شانه',
            },
            {
               id: 16,
               src: 'img-7.png',
               title: 'کمر صاف',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات، خم کننده ران، راست کننده ستون فقرات، پشتی بزرگ و کم فعالیتی در عضلاتی سرینی بزرگ، همسترینگ، پایدار کننده های مرکزی تنه',
            },
            {
               id: 17,
               src: 'img-10.png',
               title: 'کمر گود',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات، خم کننده ران، راست کننده ستون فقرات، پشتی بزرگ و کم فعالیتی در عضلاتی سرینی بزرگ، همسترینگ، پایدار کننده های مرکزی تنه',
            },
         ],
         photoFn: SquatSide_P,
         videoFn: WalkingFront_V,
         cropFn: SquatSide_C,
         zipFile: undefined as string | null | undefined,
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
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مایل داخلی، مایل خارجی، گلابی شکل',
            },
            {
               id: 19,
               src: 'img-21.png',
               title: 'چرخش داخلی تنه',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مایل داخلی، مایل خارجی، کشنده پهن نیام، عضلات نزدیک کننده',
            },
            {
               id: 20,
               src: 'img-22.png',
               title: 'سقوط ران',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات نزدیک کننده(سمت موافق) و کم فعالی عضلات سرینی میانی، مربع کمری',
            },
            {
               id: 21,
               src: 'img-24.png',
               title: 'بالا آمدن ران',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مربع کمری(سمت مقابل پای تکیه)، کشنده ی پهن نیام / سرینی کوچک(سمت موافق پای تکیه)',
            },
            {
               id: 22,
               src: 'img-23.png',
               title: 'حرکت زانو به داخل',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات نزدیک کننده، دو سررانی(سر کوتاه)، کشنده ی پهن نیام، دوقولی خارجی، پهن خارجی',
            },
         ],
         photoFn: SquatOneFoot_P,
         videoFn: WalkingFront_V,
         cropFn: SquatOneFoot_C,
         zipFile: undefined as string | null | undefined,
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
               title: 'کمر گود',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات راست کننده ی ستون فقرات، خم کننده های ران و کم فعالی عضلات پایدار کننده های ناحیه ثبات مرکزی تنه، سرینی بزرگ',
            },
            {
               id: 24,
               src: 'img-36.png',
               title: 'کمر صاف',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات راست شکمی، مایل خارجی و کم فعالی عضلات پایدار کننده های ناحیه مرکزی تنه ',
            },
            {
               id: 25,
               src: 'img-37.png',
               title: 'بالا آمدن شانه',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزنقه ی فوقانی، گوشه ای، جناغی-چنبری-پستانی و کم فعالی عضلات ذوزنقه میانی و تحتانی',
            },
            {
               id: 26,
               src: 'img-39.png',
               title: 'هایپراکستنشن گردن',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذورنقه ی فوقانی، جناغی-چنبری-پستانی، گوشه ای، و کم فعالی عضلات خم کننده های عمقی گردن',
            },
            {
               id: 27,
               src: 'img-38.png',
               title: 'بالی شدن کتف',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات سینه ای کوچک و کم فعالی عضلات دندان های قدامی، ذوزنقه ی میانی و تحتانی',
            },
         ],
         photoFn: SwimSide_P,
         videoFn: WalkingFront_V,
         cropFn: SwimSide_C,
         zipFile: undefined as string | null | undefined,
      },
   ],
   [
      {
         name: 'handsOut' as SectionNames,
         nameFA: 'دور شدن افقی دست ها',
         questions: [
            {
               id: 28,
               src: 'img-29.png',
               title: 'بالا آمدن شانه راست',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزتقه ای فوقانی و گوشه ای و کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه میانی و تحتانی',
            },
            {
               id: 29,
               src: 'img-29.png',
               title: 'بالا آمدن شانه چپ',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزتقه ای فوقانی و گوشه ای و کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه میانی و تحتانی',
            },
            {
               id: 30,
               src: 'img-31.png',
               title: 'خم شدن آرنج راست',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات دوسربازو(سر دراز) و احتمال کم فعالی عضلات سه سربازو(سر دراز) و روتیتورکاف',
            },
            {
               id: 31,
               src: 'img-31.png',
               title: 'خم شدن آرنج چپ',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات دوسربازو(سر دراز) و احتمال کم فعالی عضلات سه سربازو(سر دراز) و روتیتورکاف',
            },
            {
               id: 32,
               src: 'img-30.png',
               title: 'پروتکشن شانه راست',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات سینه ای بزرگ/کوچک و کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه یمیانی و تحتانی و کم تحرکی کپسول خلفی',
            },
            {
               id: 33,
               src: 'img-30.png',
               title: 'پروتکشن شانه چپ',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات سینه ای بزرگ/کوچک و کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه یمیانی و تحتانی و کم تحرکی کپسول خلفی',
            },
         ],
         photoFn: HandsOut_P,
         videoFn: WalkingFront_V,
         cropFn: HandsOut_C,
         zipFile: undefined as string | null | undefined,
      },
      {
         name: 'handsUp' as SectionNames,
         nameFA: 'بالا آوردن عمودی دست ها',
         questions: [
            {
               id: 34,
               src: 'img-34.png',
               title: 'خم شدن آرنج راست',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات دوسربازو(سردراز)، پشتی بزرگ، گرد بزرگ و سینه ای بزرگ و احتمال کم فعالی عضلات سه سر بازو(سردراز) و روتیتورکاف',
            },
            {
               id: 35,
               src: 'img-34.png',
               title: 'خم شدن آرنج چپ',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات دوسربازو(سردراز)، پشتی بزرگ، گرد بزرگ و سینه ای بزرگ و احتمال کم فعالی عضلات سه سر بازو(سردراز) و روتیتورکاف',
            },
            {
               id: 36,
               src: 'img-32.png',
               title: 'بالا آمدن شانه راست',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزتقه ای فوقانی و گوشه ای و کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه یمیانی و تحتانی',
            },
            {
               id: 37,
               src: 'img-32.png',
               title: 'بالا آمدن شانه چپ',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزتقه ای فوقانی و گوشه ای و کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه یمیانی و تحتانی',
            },
            {
               id: 38,
               src: 'img-33.png',
               title: 'کمر گود',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات راست کننده ستون فقرات، پشتی بزرگ و سینه ای بزرگ و کوچک، و احتمال کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه ی میانی و تحتانی',
            },
         ],
         photoFn: HandsUp_P,
         videoFn: WalkingFront_V,
         cropFn: HandsUp_C,
         zipFile: undefined as string | null | undefined,
      },
      {
         name: 'handsRotate' as SectionNames,
         nameFA: 'چرخش دست ها',
         questions: [
            {
               id: 39,
               src: 'img-26.png',
               title: 'بالا آمدن شانه راست',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزنقه ی فوقانی و گوشه ای و احتمال کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه میانی و تحتانی',
            },
            {
               id: 40,
               src: 'img-26.png',
               title: 'بالا آمدن شانه چپ',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزنقه ی فوقانی و گوشه ای و احتمال کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه میانی و تحتانی',
            },
            {
               id: 41,
               src: 'img-27.png',
               title: 'پروترکشن شانه ها',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات سینه ای بزرگ/کوچک، و کم تحرکی کپسول خلفی- و احتمال کم فعالی عضلات روتیتورکاف، متوازی الاضلاع و ذوزنقه ی میانی/تحتانی',
            },
            {
               id: 42,
               src: 'img-28.png',
               title: 'چرخش داخلی دست ها فاصله از دیوار',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات گرد کوچک و تحت خاری و احتمال کم تحرکی کپسول خلفی و کم فعالی عضلات تحت کتفی و گرد بزرگ',
            },
            {
               id: 43,
               src: 'img-25.png',
               title: 'چرخش خارجی دست ها فاصله از دیوار',
               direction: 'horizental',
               problemDescription: 'احتمال بیش فعالی عضلات تحت کتفی، سینه ای بزرگ، گرد بزرگ و پشتی بزرگ، و کم فعالی عضلات گرد کوچک و تحت خاری',
            },
         ],
         photoFn: HandsRotate_P,
         videoFn: WalkingFront_V,
         cropFn: HandsRotate_C,
         zipFile: undefined as string | null | undefined,
      },
   ],
   [
      {
         name: 'walkingFront' as SectionNames,
         nameFA: 'راه رفتن قدامی',
         questions: [
            {
               id: 44,
               src: 'img-1.png',
               title: 'چرخش به داخل یا خارج زانو راست',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات اداکتورها، دوسررانی(سرکوتاه)، کشنده پهن نیام، دوقلوی خارجی، چهارسر خارجی و احتمال کم فعالی عضلات همسترینگ میانی، دوقلو میانی، سرینی میانی/بزرگ، ساقی قدامی، ساقی خلفی',
            },
            {
               id: 45,
               src: 'img-1.png',
               title: 'چرخش به داخل یا خارج زانو چپ',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات اداکتورها، دوسررانی(سرکوتاه)، کشنده پهن نیام، دوقلوی خارجی، چهارسر خارجی و احتمال کم فعالی عضلات همسترینگ میانی، دوقلو میانی، سرینی میانی/بزرگ، ساقی قدامی، ساقی خلفی',
            },
         ],
         photoFn: WalkingFront_P,
         videoFn: WalkingFront_V,
         cropFn: WalkingFront_C,
         zipFile: undefined as string | null | undefined,
      },
      {
         name: 'walkingBack' as SectionNames,
         nameFA: 'راه رفتن خلفی',
         questions: [
            {
               id: 46,
               src: 'img-17.png',
               title: 'بالا آمدن ران',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مایل خارجی، عضلات مربع کمری(سمت مقابل پای تکیه)، کشنده پهن نیام، سرینی کوچک(سمت موافق پای تکیه) و احتمال کم فعالی عضلات نزدیک کننده(سمت موافق) و سرینی میانی(سمت موافق)',
            },
            {
               id: 47,
               src: 'img-19.png',
               title: 'چرخش داخلی یا خارجی پا راست',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات نازک نئی ها، دوقلوی خارجی، دوسررانی(سرکوتاه)، کشنده پهن نیام، نعلی و احتمال کم فعالی عضلات ساقی قدامی، ساقی خلفی، دوقلوی داخلی، سرینی میانی/بزرگ، راست داخلی، خیاطه، رکبی، همسترینگ داخلی',
            },
            {
               id: 48,
               src: 'img-19.png',
               title: 'چرخش داخلی یا خارجی پا چپ',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات نازک نئی ها، دوقلوی خارجی، دوسررانی(سرکوتاه)، کشنده پهن نیام، نعلی و احتمال کم فعالی عضلات ساقی قدامی، ساقی خلفی، دوقلوی داخلی، سرینی میانی/بزرگ، راست داخلی، خیاطه، رکبی، همسترینگ داخلی',
            },
            {
               id: 49,
               src: 'img-18.png',
               title: 'چرخش بیش از حد لگن',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات مایل خارجی، عضلات نزدیک کننده، همسترینگ و احتمال کم فعالی عضلات سرینی بزرگ و میانی، پایدار کننده های تاحیه مرکزی بدن',
            },
         ],
         photoFn: WalkingBack_P,
         videoFn: WalkingFront_V,
         cropFn: WalkingBack_C,
         zipFile: undefined as string | null | undefined,
      },
      {
         name: 'walkingSide' as SectionNames,
         nameFA: 'راه رفتن جانبی',
         questions: [
            {
               id: 50,
               src: 'img-14.png',
               title: 'سر به جلو',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات ذوزنقه ای فوقانی، گوشه ای، جناغی-چنبری-پستانی و احتمال کم فعالی عضلات خم کننده های عمقی گردن',
            },
            {
               id: 51,
               src: 'img-15.png',
               title: 'شانه گرد',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات سینه ای ها و پشتی بزرگ و احتمال کم فعالی عضلات ذوزنقه ی میانی و تحتانی و روتیتورکاف',
            },
            {
               id: 52,
               src: 'img-16.png',
               title: 'کمر گود',
               direction: 'vertical',
               problemDescription: 'احتمال بیش فعالی عضلات خم کننده های ران، راست کننده ی ستون فقرات و پشتی بزرگ و احتمال کم فعالی عضلات سرینی بزرگ و میانی، پایدار کننده های ناحیه مرکزی تنه و همسترینگ',
            },
         ],
         photoFn: WalkingSide_P,
         videoFn: WalkingFront_V,
         cropFn: WalkingSide_C,
         zipFile: undefined as string | null | undefined,
      },
   ],
]

export type dynamicEvaluationType = typeof dynamicEvaluation;
export default dynamicEvaluation;