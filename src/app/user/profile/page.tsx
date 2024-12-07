import { ButtonPrimaryEnable } from "@/components/Button/Button";
import { FaTrash } from "react-icons/fa6";
import { MdOutlineGpsFixed } from "react-icons/md";

export default function UserProfilePage() {
  return (
    <div className="flex w-full min-h-screen ">
      <div className="flex flex-col w-[80%] mx-auto gap-8 my-12">
        <div className="flex">
          <h1 className="text-m-h1 font-bold lg:text-d-h3">My Profile</h1>
        </div>
        <div className="flex flex-col mx-auto bg-[rgb(246,246,246)] shadow-md p-4 gap-6 border-[1px] border-[#D2D2D2] rounded-xl lg:flex-row lg:w-[90%] lg:gap-16">
          <div className="flex flex-col gap-6 p-2 lg:p-6 lg:basis-1/2">
            <div className="flex w-full justify-between text-m-h4 font-bold lg:text-d-h4">
              <p className="text-black">Email</p>
              <p className="text-gray-500 font-normal">johndoe@example.com</p>
            </div>
            <div className="flex w-full justify-between text-m-h4 font-bold lg:text-d-h4">
              <p className="text-black">First Name</p>
              <p className="text-gray-500 font-normal">John</p>
            </div>
            <div className="flex w-full justify-between text-m-h4 font-bold lg:text-d-h4">
              <p className="text-black">Last Name</p>
              <p className="text-gray-500 font-normal">Doe</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-2 lg:p-6 lg:basis-1/2">
            <div className="flex w-full">
              <p className="text-m-h4 text-black font-bold lg:text-d-h4">Address</p>
            </div>
            <div className="flex w-full justify-between px-3 py-4 border-[1px] border-[#D2D2D2] rounded-md">
                <div className="flex flex-col p-2.5 gap-2.5 text-m-b2">
                    <p>Jl. Rambutan, Wates, Kota Mojokerto,Jawa Timur</p>
                    <p>-7.461320016990432</p>
                    <p>112.44760295943335</p>
                </div>
                <div className="flex flex-col p-2.5 items-center justify-start gap-4">
                    <span className="text-m-h3 text-danger lg:text-m-h2"><button><FaTrash/></button></span>
                    <span className="text-m-h2 text-success-600 lg:text-m-h"><button><MdOutlineGpsFixed/></button></span>
                </div>
            </div>
            <div className="flex w-full justify-between px-3 py-4 border-[1px] border-[#D2D2D2] rounded-md">
                <div className="flex flex-col p-2.5 gap-2.5 text-m-b2">
                    <p>Jl. Rambutan, Wates, Kota Mojokerto,Jawa Timur</p>
                    <p>-7.461320016990432</p>
                    <p>112.44760295943335</p>
                </div>
                <div className="flex flex-col p-2.5 items-center justify-start gap-4">
                    <span className="text-m-h3 text-danger"><button><FaTrash/></button></span>
                    <span className="text-m-h2 text-success-600"><button><MdOutlineGpsFixed/></button></span>
                </div>
            </div>
            <ButtonPrimaryEnable text="Add New Address"/>
          </div>
        </div>
      </div>
    </div>
  );
}
