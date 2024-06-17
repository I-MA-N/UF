function getFitnessType(str: string) {
   const splitedArr = str.split('/');
   return splitedArr[0]
}

export default getFitnessType;