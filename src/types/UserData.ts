type UserData = {
   access: string,
   username: string,
   name: string,
   firstname: string,
   lastname: string,
   email: string,
   phone: string,
   orgNames: string,
   subusers: string,
   superusers: string,
   lastlogin: null,
   datejoined: string,
   role: string,
   gender: string,
   age: number,
   info: string
}

export type UserData2 = Omit<UserData, "access" | "subusers" | "lastlogin" | "info">;

export default UserData;