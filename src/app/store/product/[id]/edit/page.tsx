import { MdOutlineStorefront, MdOutlineShoppingBasket, MdAddRoad, MdListAlt } from "react-icons/md";

export default function UserProfilePage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col lg:flex-row">
        
      {/* Sidebar */}
      <div className="w-full lg:w-1/5 bg-white shadow-lg flex flex-col">
                {[
                    { icon: MdOutlineStorefront, label: "Shop Profile" },
                    { icon: MdOutlineShoppingBasket, label: "My Products" },
                    { icon: MdAddRoad, label: "Add Products" },
                    { icon: MdListAlt, label: "My Orders" }
                ].map((item, index) => (
                    <div key={index} className="py-6 px-4 border-b border-emerald-200 flex flex-col items-start">
                        <div className="flex items-center gap-2.5 py-1">
                            <item.icon className="text-neutral-400" size={24} />
                            <div className="text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-snug">{item.label}</div>
                        </div>
                    </div>
                ))}
            </div>
      
      <div className="flex-1 p-6 lg:p-12 bg-gray-100">
        <div className="text-black text-2xl font-bold font-['Nunito Sans'] mb-8 lg:mb-12 lg:ml-12">Edit Products</div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col items-center gap-8">
              <img className="rounded-[7px]" src="https://via.placeholder.com/186x156" alt="Product" />
            <div className="w-full max-w-3xl flex flex-wrap gap-6">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-black text-base font-normal font-['Nunito Sans']">Product Name</label>
                <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="Chicken Fried Rice" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-black text-base font-normal font-['Nunito Sans']">Production Time</label>
                <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="09.00" />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className="text-black text-base font-normal font-['Nunito Sans']">Product Description</label>
                <textarea className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300 h-[148px]" placeholder="Fried rice with premium condiments, and an asian-styled spices." />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-black text-base font-normal font-['Nunito Sans']">Product Expired Estimation</label>
                <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="18.00" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-black text-base font-normal font-['Nunito Sans']">Category</label>
                <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="Indonesian food" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-black text-base font-normal font-['Nunito Sans']">Product Price After</label>
                <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="15000" />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-black text-base font-normal font-['Nunito Sans']">Product Price Before</label>
                <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="25000" />
              </div>
              <div className="w-full flex justify-center">
                <button className="w-full max-w-xs px-6 py-4 bg-primary-600 rounded-lg text-white text-lg font-bold font-['Nunito Sans'] mt-6 lg:mt-0">
                  Edit Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
