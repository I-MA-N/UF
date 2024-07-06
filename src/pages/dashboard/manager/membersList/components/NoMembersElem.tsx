import Container from "../../../../common/Container";
import Link from "../../../../common/Link";

function NoMembersElem() {
   return (
      <Container>
         <div className="text-center text-sm lg:text-base mb-10 lg:mb-12">
            <span className="flex gap-2 items-center justify-center text-yellow mb-4 lg:mb-6">
               کاربری در سازمان شما وجود ندارد!
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-8 lg:size-9">
                  <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.5493 8.47826C14.6434 7.56533 13.3877 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3877 7.56533 14.6434 8.47826 15.5493M15.5493 8.47826C16.446 9.38197 17 10.6263 17 12C17 14.7614 14.7614 17 12 17C10.6263 17 9.38197 16.446 8.47826 15.5493M15.5493 8.47826L8.47826 15.5493" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </span>
            <span className="">
               با استفاده از دکمه زیر به صفحه بعدی رفته،
               <br />
               و اولین مربی را با گزینه "اضافه کردن مربی جدید" ایجاد کنید.
            </span>
         </div>
         <Link
            text="ویرایش مربی ها"
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className="w-4.5 lg:w-5">
               <path d="M12.7639 3.21425C12.1929 0.150802 7.80709 0.150802 7.23608 3.21425C7.08828 4.0072 6.26896 4.47973 5.51061 4.21195C2.57018 3.17366 0.384106 6.97791 2.74626 9.00204C3.35806 9.52629 3.35806 10.4737 2.74626 10.998C0.384106 13.0221 2.57018 16.8263 5.51061 15.788C6.26896 15.5203 7.08828 15.9928 7.23608 16.7857C7.80709 19.8492 12.1929 19.8492 12.7639 16.7857C12.9117 15.9928 13.731 15.5203 14.4894 15.788C17.4298 16.8263 19.6159 13.0221 17.2537 10.998C16.6419 10.4737 16.6419 9.52629 17.2537 9.00204C19.6159 6.97791 17.4298 3.17366 14.4894 4.21195C13.731 4.47973 12.9117 4.0072 12.7639 3.21425Z" stroke="#E4F4FD" strokeWidth="1.5" strokeLinejoin="round" />
               <circle cx="3.33333" cy="3.33333" r="2.58333" transform="matrix(-1 0 0 1 13.333 6.66667)" stroke="#E4F4FD" strokeWidth="1.5" />
            </svg>}
            url="/manager/dashboard/memberslist/editmentors"
         />
      </Container>
   );
};

export default NoMembersElem;