function getInputKey(
   isDynamicEvaluation: boolean,
   sectionNameFA: string,
   inputTitle: string
) {
   if (isDynamicEvaluation) {
      return `${sectionNameFA} ${inputTitle}`;
   }

   return inputTitle;
}

export default getInputKey;