import { TypeAnimation } from "react-type-animation";
import Link from "../common/Link";
import { useQueryClient } from "@tanstack/react-query";

function HomePage() {
    const queryClient = useQueryClient();
    const userRole = queryClient.getQueryData<unknown, string[], any>(['get: user data', ''])?.role;

    return (
        <main className="container flex flex-col justify-center items-center pt-20 md:pt-32 min-h-screen">
            <h1 className="font-Estedad-Black text-5xl">یوفیت</h1>

            <TypeAnimation
                sequence={[
                    'مناسب تو!',
                    2000,
                    'برای تو!',
                    2000,
                    'خاصِ تو!',
                    2000
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className="text-2xl mt-7"
            />
            <div className="flex flex-col justify-center items-center mt-20">
                <p className="mb-4 text-center text-xs leading-7">
                    با کلیک بر روی دکمه زیر وارد حساب خود شوید
                    <br />
                    و برنامه ورزشی تان را دریافت کنید!
                </p>
                <Link
                    text="پروفایل من"
                    url={userRole ? `/${userRole}/dashboard` : "/login"}
                />
            </div>
        </main>
    )
}

export default HomePage