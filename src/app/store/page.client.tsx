"use client"
import ProductCard from '@/components/Card/ProductCard'
import React, { useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "../services/StoreAuthContext";
import { getAllStoreProducts } from '../services/ProductService';
import { ButtonPrimaryEnable } from '@/components/Button/Button';

interface IProduct {
  id: string;
  product_name: string;
  description: string;
  price_before: number;
  price_after: number;
  production_time: string;
  expired_time: string;
  stock: number;
  image_id: null;
  store_name: string;
  street: string;
  address_longitude: number;
  address_latitude: number;
  address_distance: number;
  slug: string;
  category_name: string;
  updated_at: string;
  created_at: string;
}

function StoreHomepage() {

  const { currentStore } = useContext(AuthContext);

  // const [userActiveAddress, setUserActiveAddress] = useState<IAddress | null>(
  //   null
  // );

  const [productDisplayed, setProductDisplayed] = useState<IProduct[] | null>(
    null
  );

  const getProductDisplayed = useCallback(async () => {
    if (currentStore == undefined) {
      setProductDisplayed(null)
    } else {
      const StoreProducts = await getAllStoreProducts();
      if (StoreProducts) {
        setProductDisplayed(StoreProducts);
      } else {
        setProductDisplayed(null)
      }
    }
  }, [currentStore]);

  useEffect(() => {
    getProductDisplayed();
  }, [getProductDisplayed]);

  return (
    <div className='flex flex-col flex-wrap justify-center px-[4%] py-[3%] lg:px-[8%] lg:py-[3%]'>
          <div className="flex justify-end items-end mb-4-4 lg:mb-8">
            <ButtonPrimaryEnable text="Add New Product" to={"/store/product/new"}/>
          </div>
          <div className='grid gap-2 max-w-max gap-y-6 grid-cols-2 lg:grid-cols-4 lg:gap-4 '>
              {(productDisplayed?.length === 0 || !productDisplayed) ? (
              <div>No Products Found</div>
            ) : (
              productDisplayed?.map((product, index) => (
                <ProductCard
                  key={index}
                  productId={product.id}
                  productName={product.product_name}
                  originPrice={product.price_before.toString()}
                  salePrice={product.price_after.toString()}
                  location={product.street}
                  image_url={product.image_id}
                  rating={4.5}
                />
              ))
            )}
          </div>
    </div>
  )
}

export default StoreHomepage