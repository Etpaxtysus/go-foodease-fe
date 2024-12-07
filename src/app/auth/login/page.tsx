import { ButtonPrimaryEnable } from "@/components/Button/Button";

export default function Page() {
    return (
        <div className="flex w-[100vw] h-[85vh] mx-auto justify-center">
            <div className="flex flex-col mt-[20%] lg:mt-[10%] p-4 gap-16 h-min items-center lg:flex-row">
                <div className=" flex flex-col h-min justify-center items-center gap-8">
                    <h1 className="lg:text-d-h3 font-light text-m-h3 ">Login as Partner</h1>
                    <ButtonPrimaryEnable text="Login as Partner" to="/store/auth/login" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-0 border-[1px] border-gray-200"></div>
                    or
                    <div className="w-6 h-0 border-[1px] border-gray-200"></div>
                </div>
                <div className=" flex flex-col h-min justify-center items-center gap-8">
                    <h1 className="lg:text-d-h3 font-light text-m-h3 ">Login as Customer</h1>
                    <ButtonPrimaryEnable text="Login as Customer" to="/user/auth/login" />
                </div>
            </div>
        </div>
    )
}