import { useForm } from "react-hook-form"
import Container from "../common/Container"
import Input from "../common/Input";
import LoginBtns from "./components/LoginBtns";
import PLogin from "../../api/common/PLogin";


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { mutate, error, isPending } = PLogin();

    function onSubmit(data: any) {
        mutate(data)
    }

    return (
        <Container>
            <p className="text-xs text-yellow mb-8 lg:mb-10">
                {error && 'نام کاربری یا رمز عبور اشتباه است!'}
            </p>
            <h2 className="text-2xl lg:text-3xl text-center font-Estedad-Black mb-8">ورود</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-y-3.5 w-64 md:w-80">
                    <Input
                        direction="ltr"
                        name="username"
                        text="نام کاربری"
                        placeholder="مثال: 1234567890"
                        register={register}
                        registerOptions={{ required: true }}
                        render={() => (
                            <span className="text-xs text-yellow mr-5 mt-2">
                                {errors.username?.type === "required" && 'پر کردن این فیلد الزامی است!'}
                            </span>
                        )}
                    />

                    <Input
                        direction="ltr"
                        name="password"
                        text="رمز عبور"
                        placeholder="مثال: 1234567890"
                        register={register}
                        registerOptions={{ required: true }}
                        render={() => (
                            <span className="text-xs text-yellow mr-5 mt-2">
                                {errors.password?.type === "required" && 'پر کردن این فیلد الزامی است!'}
                            </span>
                        )}
                    />

                    <p className="text-xs lg:text-sm font-Estedad-ExtraLight text-center opacity-70">لطفا بعد از اولین ورود رمز خود را تغییر دهید.</p>
                </div>

                <LoginBtns isPending={isPending} />
            </form>
        </Container>
    )
}

export default Login