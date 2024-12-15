type AddSimpleuserFormFields = {
   username: string,
   password: string,
   email: string,
   orgName: string,
   gender: 'male' | 'female',
   phone?: string,
   firstname?: string,
   lastname?: string,
   age?: string,
}

export type FormFields = Omit<AddSimpleuserFormFields, "username" | "orgName">

export default AddSimpleuserFormFields