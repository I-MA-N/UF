const validateUsername = (value: string) => {
   const regex = /[^\w]/;
   return !regex.test(value)
}

export default validateUsername;