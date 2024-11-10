export type FormDataInputType = {
   value: string | undefined,
   isLastValueByAI?: boolean
} | undefined

type FormDataType = {
   [k: string]: {
      [k: string]: FormDataInputType
   } | undefined
}

export default FormDataType;