function FMSAvg(usersData: any) {
   const resultArr = [
      {
         name: 'اسکات کامل',
         shortName: 'اسکات...',
         value: 0,
         src: '/images/FMS/1.png',
      },
      {
         name: 'عبور از مانع',
         shortName: 'عبور از...',
         value: 0,
         src: '/images/FMS/2.png',
      },
      {
         name: 'لانچ خطی',
         shortName: 'لانچ خطی',
         value: 0,
         src: '/images/FMS/3.png',
      },
      {
         name: 'تحرک پذیری شانه ها',
         shortName: 'تحرک پذیری...',
         value: 0,
         src: '/images/FMS/4.png',
      },
      {
         name: 'بالا آوردن فعال پا',
         shortName: 'بالا...',
         value: 0,
         src: '/images/FMS/5.png',
      },
      {
         name: 'شنای سوئدی',
         shortName: 'شنای...',
         value: 0,
         src: '/images/FMS/6.png',
      },
      {
         name: 'ثبات چرخشی',
         shortName: 'ثبات چرخشی',
         value: 0,
         src: '/images/FMS/7.png',
      },
   ]

   const sumObj = {
      'اسکات کامل': 0,
      'عبور از مانع راست': 0,
      'عبور از مانع چپ': 0,
      'لانچ خطی راست': 0,
      'لانچ خطی چپ': 0,
      'تحرک پذیری شانه ها راست': 0,
      'تحرک پذیری شانه ها چپ': 0,
      'بالا آوردن فعال پا راست': 0,
      'بالا آوردن فعال پا چپ': 0,
      'شنای سوئدی': 0,
      'ثبات چرخشی راست': 0,
      'ثبات چرخشی چپ': 0,
   }
   
   usersData.forEach((userData: any) => {
      const testData = userData['عملکردی وضعیت بدنی'];
      
      Object.keys(sumObj).forEach(key => {
         sumObj[key as keyof typeof sumObj] += testData[key] as number
      })

   })
   resultArr.forEach(resultObj => {

      const sameKeys = Object.entries(sumObj).filter(([key]) => key.includes(resultObj.name));
      const minValue = Math.min(...sameKeys.map(obj => obj[1] as number));
      resultObj.value += minValue;

   })

   let finalScore = 0;
   resultArr.forEach(result => {
      result.value = Number((result.value / usersData.length).toFixed(2));
      finalScore += result.value;
   })

   return {
      resultArr,
      finalScore
   };
}

export type dataFMSAvgType = ReturnType<typeof FMSAvg>;
export default FMSAvg;