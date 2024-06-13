export type TestObj = {
   id: number;
   testName: string;
   testAccess: string[];
}

export type FormObj = {
   id: number,
   formName: string,
   formTests: TestObj[]
}