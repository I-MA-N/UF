import FormDataType from "../../../../../../types/FormDataType";

function FMSData(data: FormDataType[""]) {
   const FMS = {
      score: null as number | null,
      scoreResult: null as string | null,
      scoreResultColor: null as string | null
   }

   if (data) {
      FMS.score = Number(data['اسکات کامل']?.value) + Number(data['شنای سوئدی']?.value) +
         Math.min(Number(data['عبور از مانع راست']?.value), (Number(data['عبور از مانع چپ']?.value))) +
         Math.min(Number(data['لانچ خطی راست']?.value), Number(data['لانچ خطی چپ']?.value)) +
         Math.min(Number(data['تحرک پذیری شانه ها راست']?.value), Number(data['تحرک پذیری شانه ها چپ']?.value)) +
         Math.min(Number(data['بالا آوردن فعال پا راست']?.value), Number(data['بالا آوردن فعال پا چپ']?.value)) +
         Math.min(Number(data['ثبات چرخشی راست']?.value), Number(data['ثبات چرخشی چپ']?.value))
         ;

      if (FMS.score >= 16) {
         FMS.scoreResult = "وضعیت عملکردی سیستم اسکلتی عضلانی طبیعی";
         FMS.scoreResultColor = "secondary";
      } else if (FMS.score >= 12 && FMS.score <= 15) {
         FMS.scoreResult = "وضعیت عملکردی سیستم اسکلتی عضلانی تا حدی طبیعی و بهتر است الگوهای حرکتی اصلاح گردد";
         FMS.scoreResultColor = "yellow";
      } else {
         FMS.scoreResult = "وضعیت عملکردی سیستم اسکلتی عضلانی دچار مشکل و می بایست تمرینات اصلاحی و الگوهای حرکتی اصلاح گردد";
         FMS.scoreResultColor = "red";
      }

      if (Number.isNaN(FMS.score)) {
         FMS.score = null;
         FMS.scoreResult = null;
         FMS.scoreResultColor = "white";
      }
   }

   return FMS;
}

export type FMSDataType = ReturnType<typeof FMSData>;
export default FMSData;