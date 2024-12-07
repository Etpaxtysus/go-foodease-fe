import { MdOutlineStorefront, MdOutlineShoppingBasket, MdAddRoad, MdListAlt } from "react-icons/md";

export default function UserProfilePage() {

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/5 bg-white shadow-lg flex flex-col">
        <div className="py-6 px-4 border-b border-emerald-200 flex flex-col items-start">
          <div className="flex items-center gap-2.5 py-1">
            <MdOutlineStorefront className="text-neutral-400" size={24} />
            <div className="text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-snug">Shop Profile</div>
          </div>
        </div>
        <div className="py-6 px-4 border-b border-emerald-200 flex flex-col items-start">
          <div className="flex items-center gap-2.5 py-1">
            <MdOutlineShoppingBasket className="text-neutral-400" size={24} />
            <div className="text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-snug">My Products</div>
          </div>
        </div>
        <div className="py-6 px-4 border-b border-emerald-200 flex flex-col items-start">
          <div className="flex items-center gap-2.5 py-1">
            <MdAddRoad className="text-neutral-400" size={24} />
            <div className="text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-snug">Add Products</div>
          </div>
        </div>
        <div className="py-6 px-4 border-b border-emerald-200 flex flex-col items-start">
          <div className="flex items-center gap-2.5 py-1">
            <MdListAlt className="text-neutral-400" size={24} />
            <div className="text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-snug">My Orders</div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-6 lg:p-12 bg-gray-100">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col gap-8">
            <div className="text-black text-2xl font-bold font-['Nunito Sans'] leading-[28.80px]">Store Profile</div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="w-full md:w-1/3 text-black text-lg font-normal font-['Nunito Sans'] leading-[25.20px]">Store Name</div>
                <div className="w-full md:w-2/3 flex items-center border-l border-gray-300 pl-6">
                  <div className="text-black text-lg font-normal font-['Nunito Sans'] leading-[25.20px]">Mendoan</div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="w-full md:w-1/3 text-black text-lg font-normal font-['Nunito Sans'] leading-[25.20px]">Store Description</div>
                <div className="w-full md:w-2/3 flex items-center border-l border-gray-300 pl-6">
                  <div className="text-black text-lg font-normal font-['Nunito Sans'] leading-[25.20px]">Mendoan is a restaurant that offers a variety of mendoan dishes. On this website, customers will find attractive offers, including discounts and free food, starting from 6:00 PM onwards.</div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="w-full md:w-1/3 text-black text-lg font-normal font-['Nunito Sans'] leading-[25.20px]">Store Logo</div>
                <div className="w-full md:w-2/3 flex items-center border-l border-gray-300 pl-6">
                  <img className="w-[130px] h-[85px]" src="https://via.placeholder.com/130x85" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
