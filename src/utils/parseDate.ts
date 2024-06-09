function parseDate(stringDate: string, option?: Intl.DateTimeFormatOptions){
   const timestamp = Date.parse(stringDate);
   const date = new Intl.DateTimeFormat('fa-IR', option).format(timestamp);
   return date;
}

export default parseDate;