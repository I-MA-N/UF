import GenderStrings from "../../../../../../types/GenderStrings";
import OrgMemberData from "../../../../../../types/OrgMemberData";

function filterUsersData(usersData: OrgMemberData[], testNamesNeeded: string[], gender: GenderStrings) {
   if (gender === "whole") {
      return usersData.filter(userData => {
         const filteredTestNames = testNamesNeeded.filter(testName => testName in userData.formData);

         if (filteredTestNames.length === testNamesNeeded.length) return true;
         return false;
      })
   }

   return usersData.filter(userData => {
      const filteredTestNames = testNamesNeeded.filter(testName => testName in userData.formData);
      const userGender = userData.userData.gender;

      if (filteredTestNames.length === testNamesNeeded.length && userGender === gender) return true;
      return false;
   })
}

export default filterUsersData;