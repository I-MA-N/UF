import { useNavigate, useSearchParams } from "react-router-dom";
import Container from "../../../../common/Container";
import PrevBtn from "../../../../common/PrevBtn";
import Reports from "./Reports";
import managerGFormData from "../../../../../api/manager/managerGFormData";
import { useEffect } from "react";
import Loading from "../../../../common/Loading";

function ReportsFirstLoad() {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   const formName = searchParams.get('formName');
   const { data, isError, isPending } = managerGFormData(formName);

   useEffect(() => {
      const nav = document.getElementsByTagName("nav")[0];
      nav.style.position = "sticky";
      nav.style.left = "0";
      nav.style.transform = "none";

      return () => {
         nav.style.position = "";
         nav.style.left = "";
         nav.style.transform = "";
      }
   }, [])

   if (isPending) return <Loading />

   if (!isError && data) return <Reports data={data} />

   return (
      <Container>
         <h1 className="mb-6 lg:text-lg text-center">دریافت اطلاعات کاربران سازمان شما با مشکل مواجه شد.</h1>
         <PrevBtn type="button" onClick={() => navigate('/manager/dashboard/forms')} />
      </Container>
   );
};

export default ReportsFirstLoad;