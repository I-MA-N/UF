import GenderStrings from "../../../../../../types/GenderStrings";

const NECESSARY_KEYS = [
   'عملکردی وضعیت بدنی',
   'کیفیت زندگی',
   'سلامت عمومی',
   'عملکرد شغلی',
   'شادکامی',
   'آمادگی بدنی',
   'رضایت شغلی',
   'آمادگی فعالیت',
   'مقدار تحرک',
   'ارزیابی پویا',
   'وضعیت بدنی',
   'ناهنجاری ها',
]

function filterUsersData(usersData: any, filterWithGender?: GenderStrings) {
   if (filterWithGender) {
      return usersData.filter((userData: any) =>
         NECESSARY_KEYS.every(key => Object.keys(userData).includes(key)) &&
         (Object.values(userData['وضعیت بدنی']).indexOf("") === -1 ? true : false) &&
         userData['gender'] === filterWithGender
      )
   }

   return usersData.filter((userData: any) =>
      NECESSARY_KEYS.every(key => Object.keys(userData).includes(key)) &&
      Object.values(userData['وضعیت بدنی']).indexOf("") === -1 ? true : false
   )
}

export default filterUsersData;