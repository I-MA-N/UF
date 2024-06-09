function splitArr(str: string) {
   const array = str.split(';');
   array.pop();
   return array;
}

export default splitArr;