import FormDataInputType from "./FormDataInputType";

type FormDataType = {
   [k: string]: {
      [k: string]: FormDataInputType
   } | undefined
}

export default FormDataType;