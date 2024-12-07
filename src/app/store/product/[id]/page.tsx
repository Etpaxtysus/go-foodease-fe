"use client";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ButtonInfoEnable, ButtonDangerEnable } from "@/components/Button/Button";
import React, { useCallback, useEffect, useState } from "react";
import { getProductDetailsById } from "@/app/services/ProductService";

const Star = (
  <path d="M440 60l120 336h320L618 592l94 348-272-208-272 208 94-348L0 396h320L440 60" />
);

interface IProduct {
  product_name: string;
  description: string;
  price_before: number;
  price_after: number;
  production_time: string;
  expired_time: string;
  stock: number;
  image_id: null;
  store_details: {
    store_id: string;
    store_name: string;
    store_address: {
      street: string;
      latitude: string;
      longitude: string;
    },
  },
  category: {
    category_slug: string;
    category_name: string;
  },
  updated_at: string;
  created_at: string;
}

const customStyles = {
  itemShapes: Star,
  activeFillColor: "#FFC633",
  inactiveFillColor: "#D9D9D9",
};

export default function DetailPage({ params }: any) {

  const [productDetails, setProductDetails] = useState<IProduct | null>(null);

  const fetchProductDetails = useCallback(async () => {
    const product = await getProductDetailsById(params.id);
    setProductDetails(product);
  }, [params.id]);
  
  useEffect(() => {
    fetchProductDetails();
  }, [fetchProductDetails]);

  return (
    <div className="flex w-[80%] justify-center my-12 mx-auto h-max ">
      <div className="flex flex-col w-full h-min items-center gap-6 lg:flex-row lg:gap-16">
        <div className="flex relative w-[320px] h-[240px] rounded-md border-[1px] border-[#D2D2D2] shadow-md lg:w-[520px] lg:h-[410px] lg:basis-1/2 lg:self-start">
          <Image
            src={"https://placehold.co/600x400?text=Product+Image"}
            alt="Product Image"
            layout="fill"
            className="flex object-cover object-center rounded-2xl p-3"
          />
        </div>
        <div className="flex flex-col gap-6 lg:basis-1/2 lg:gap-4">
          <div className="flex justify-between w-full lg:flex-col lg:gap-4">
            <div className="flex flex-col w-full gap-2.5 ">
              <h1 className="text-m-h1 font-bold line-clamp-2 w-[90%] lg:text-d-h2">
                {productDetails?.product_name}
              </h1>
              <p className="text-m-b1 lg:text-d-b1">{productDetails?.store_details.store_name}</p>
              <div className="flex gap-2 w-full items-center text-m-b1">
                <div className="flex w-[40%] lg:w-[20%]">
                  <Rating readOnly value={4.5} itemStyles={customStyles} />
                </div>
                <p>4.5/5</p>
              </div>
            </div>
            <div className="flex flex-col w-[35%] items-end justify-start gap-1.5 lg:items-start ">
              <p className="text-m-h1 text-success font-bold">Rp{productDetails?.price_after}</p>
              <p className="text-m-h3 text-danger-600 font-bold line-through">
                Rp{productDetails?.price_before}
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full items-center lg:flex-col lg:gap-2.5">
            <div className="flex justify-start items-start text-left w-full">
              <p className="text-m-b2 font-bold lg:text-d-b2">Consumable time until <span className="font-bold text-danger-600">{productDetails?.expired_time}</span></p>
            </div>
            
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <p className="text-m-h5 font-bold">Description:</p>
            <p className="text-m-b2 text-justify">
              {productDetails?.description}
            </p>
          </div>
          <div className="flex gap-4 lg:w-full lg:justify-start">
              <ButtonInfoEnable text="Edit" to={`/store/product/${params.id}/edit`} />
              <ButtonDangerEnable text="Delete" onClick={() => console.log("delete")} to={'/store'}/>
            </div>
        </div>
      </div>
    </div>
  );
}
