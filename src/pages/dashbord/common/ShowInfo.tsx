type ShowInfoProps = {
   age: number,
   phone: string,
   program: boolean
}

function ShowInfo({ age, phone, program }: ShowInfoProps) {
   if (age && phone)
      return (
         <>
            سن: {age}
            <br />
            شماره تلفن: {phone}
         </>
      )

   if (program)
      return (
         <>
            شما هنوز اطلاعات خود را تکمیل نکرده اید!
         </>
      )

   return (
      <>
         شما هنوز اطلاعات خود را تکمیل نکرده اید!
         <br />
         لطفا جهت تکمیل اطلاعات و برای دریافت برنامه،
         <br />
         پرسشنامه خود را تکمیل کنید.
      </>
   )
}

export default ShowInfo