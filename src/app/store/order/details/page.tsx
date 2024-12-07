import React from "react";
import { MdOutlineStorefront, MdOutlineShoppingBasket, MdAddRoad, MdListAlt } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

export default function ProductDetails() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
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

            {/* Content */}
            <div className="flex-grow flex flex-col justify-start items-center p-6">
                <div className="w-full max-w-7xl">
                    {/* Header */}
                    <div className="py-6">
                        <div className="text-black text-2xl font-bold font-['Nunito Sans'] leading-[28.80px]">Order Detail</div>
                    </div>
                    
                    {/* Order Input and Details */}
                    <div className="py-6 bg-white rounded-[5px] shadow-lg p-8 flex flex-col gap-6">
                        {/* Order Input */}
                        <div className="flex justify-end gap-4 items-center">
                            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 p-2 w-80">
                                <IoMdSearch className="text-neutral-400" size={24} />
                                <input
                                    type="text"
                                    placeholder="Input ID Number of Food Order"
                                    className="flex-grow bg-transparent outline-none text-black/opacity-40 text-base font-normal font-['Nunito Sans'] leading-snug"
                                />
                            </div>
                            <button className="px-6 py-2 rounded-lg border border-primary-600 flex items-center justify-center text-primary-600 text-lg font-bold font-['Nunito Sans'] leading-snug">Apply</button>
                        </div>

                        {/* Order Details */}
                        <div className="flex flex-col gap-6">
                            {[1, 2].map((order, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 border border-neutral-300">
                                    {/* Order Header */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2.5">
                                            <div className="text-black text-lg font-bold font-['Nunito Sans'] leading-snug">Aloysius Juan</div>
                                            <div className="text-neutral-400 text-base font-normal font-['Nunito Sans'] leading-snug">56s8cfdshiuds9087x08asdxs</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-sky-700 text-base font-normal font-['Nunito Sans'] leading-snug">Food has arrived</div>
                                            <div className="flex items-center bg-neutral-100 rounded-md border border-neutral-300 px-3 py-2">
                                                <select className="text-center text-black text-base font-normal font-['Nunito Sans'] leading-snug bg-neutral-100 outline-none">
                                                    <option value="Delivered">Delivered</option>
                                                    <option value="On The Way">On The Way</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Order Items */}
                                    {[1, 2].map((item, idx) => (
                                        <div key={idx} className="flex flex-wrap items-center gap-8 px-9 py-3">
                                            <div className="flex items-center gap-2.5">
                                                <img className="w-[75px] h-[59px] object-cover" src="https://via.placeholder.com/75x59" alt="Product" />
                                                <div className="flex flex-col">
                                                    <div className="text-black text-base font-bold font-['Nunito Sans'] leading-tight">Nasi Goreng</div>
                                                    <div className="text-black text-[10px] font-normal font-['Nunito Sans'] leading-[13px]">Count: 1</div>
                                                </div>
                                            </div>
                                            <div className="text-black text-base font-normal font-['Nunito Sans'] leading-snug">Rp32.000</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
