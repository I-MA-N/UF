import { TypeAnimation } from "react-type-animation";
import Link from "../common/Link";
import { useQueryClient } from "@tanstack/react-query";

function HomePage() {
    const queryClient = useQueryClient();
    const userRole = queryClient.getQueryData<unknown, string[], any>(['get: user data', ''])?.role;

    return (
        <main className="container flex flex-col justify-center items-center pt-20 lg:pt-10 min-h-screen">
            <h1 className="font-Estedad-Black text-5xl leading-[84px] lg:text-7xl lg:leading-[172px]">یوفیت</h1>

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
                className="text-2xl lg:text-3xl mt-7 lg:mt-12 mb-20 lg:mb-16"
            />
            <div className="flex flex-col justify-center items-center">
                <p className="mb-4 lg:mb-12 text-center text-xs lg:text-base leading-7 lg:leading-8">
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