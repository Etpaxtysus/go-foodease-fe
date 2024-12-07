"use client";
import { addNewProduct } from "@/app/services/ProductService";
import { MdOutlineStorefront, MdOutlineShoppingBasket, MdAddRoad, MdListAlt } from "react-icons/md";

interface FormData {
  product_name: string;
  description: string;
  price_before: number;
  price_after: number;
  production_time: string;
  expired_time: string;
  stock: number;
  category_slug: string;
  image_id: null | string;
}

export default function UserProfilePage() {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const productInfo: FormData = {
      product_name: event.currentTarget.product_name.value,
      description: event.currentTarget.description.value,
      price_before: parseInt(event.currentTarget.price_before.value),
      price_after: parseInt(event.currentTarget.price_after.value),
      production_time: event.currentTarget.production_time.value,
      expired_time: event.currentTarget.expired_time.value,
      stock: parseInt(event.currentTarget.stock.value),
      category_slug: event.currentTarget.category_slug.value,
      image_id: null
    };
    const res = await addNewProduct(productInfo);
    // console.log(productInfo)
  };

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
        <div className="text-black text-2xl font-bold font-['Nunito Sans'] mb-8 lg:mb-12">Add New Products</div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col items-center gap-8">
            <img className="rounded-[7px]" src="https://via.placeholder.com/186x156" alt="Product" />
            <div className="w-full max-w-3xl flex flex-wrap gap-6">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-black text-base font-normal font-['Nunito Sans']">Product Name</label>
                    <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="Chicken Fried Rice" id="product_name" name="product_name" />
                    <div className="text-neutral-500 text-base font-normal font-['Nunito Sans'] leading-snug">e.g., Chicken Fried Rice</div>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label className="text-black text-base font-normal font-['Nunito Sans']">Product Description</label>
                    <textarea className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300 h-[148px]" placeholder="Fried rice with premium condiments, and an asian-styled spices." id="description" name="description" />
                    <div className="text-right text-neutral-400 text-xs font-normal font-['Nunito Sans'] leading-none">0/100</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-black text-base font-normal font-['Nunito Sans']">Category</label>
                    <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="Indonesian food" id="category_slug" name="category_slug" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-black text-base font-normal font-['Nunito Sans']">Production Time</label>
                    <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="09.00" id="production_time" name="production_time" />
                    <div className="text-neutral-500 text-base font-normal font-['Nunito Sans'] leading-snug">e.g., 09.00</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-black text-base font-normal font-['Nunito Sans']">Product Expired Estimation</label>
                    <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="18.00" id="expired_time" name="expired_time" />
                    <div className="text-neutral-500 text-base font-normal font-['Nunito Sans'] leading-snug">e.g., 18.00</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-black text-base font-normal font-['Nunito Sans']">Product Price After</label>
                    <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" type="number" placeholder="15000" id="price_after" name="price_after" />
                    <div className="text-neutral-500 text-base font-normal font-['Nunito Sans'] leading-snug">e.g., 15000</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-black text-base font-normal font-['Nunito Sans']">Product Price Before</label>
                    <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" type="number" placeholder="25000" id="price_before" name="price_before" />
                    <div className="text-neutral-500 text-base font-normal font-['Nunito Sans'] leading-snug">e.g., 25000</div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-black text-base font-normal font-['Nunito Sans']">Product Stock</label>
                    <input className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" placeholder="12" id="stock" name="stock" />
                    <div className="text-neutral-500 text-base font-normal font-['Nunito Sans'] leading-snug">e.g. 12</div>
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label className="text-black text-base font-normal font-['Nunito Sans']">Upload Product Image</label>
                    <div className="flex justify-center items-center gap-2.5">
                      <input type="file" className="p-2.5 bg-neutral-100 rounded-lg border border-neutral-300" />
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <button type="submit" className="w-full max-w-xs px-6 py-4 bg-primary-600 rounded-lg text-white text-lg font-bold font-['Nunito Sans'] mt-6 lg:mt-0">
                      Add Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
