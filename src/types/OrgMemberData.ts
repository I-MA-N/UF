import FormDataType from "./FormDataType"

type MemberPersonalData = {
   age: number,
   gender: 'male' | 'female'
}

type MemberFormData = {
   formData: FormDataType
}

type OrgMemberData = {
   userData: MemberPersonalData
} & MemberFormData;

export default OrgMemberData;