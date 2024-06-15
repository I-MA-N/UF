type ShowInfoProps = {
   age: number,
   phone: string,
}

function ShowInfo({ age, phone }: ShowInfoProps) {
   if (age && phone)
      return (
         <>
            سن: {age}
            <br />
            شماره تلفن: {phone}
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