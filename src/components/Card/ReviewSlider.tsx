import React, { useState, useEffect } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const reviews = [
  {
    name: "Aloysius Juan F.",
    rating: 5,
    review: "“Lorem ipsum awai yuki no youni futari to ochiteku zutto anata wa asu wa monogatari suida anata ni nogoshitta negai sakura no you ni ima wa tada fukareru sucikara hokorie kasaneta hibi wo”"
  },
  {
    name: "Rhenaldy C.",
    rating: 5,
    review: "“Lorem ipsum awai yuki no youni futari to ochiteku zutto anata wa asu wa monogatari suida anata ni nogoshitta negai sakura no you ni ima wa tada fukareru sucikara hokorie kasaneta hibi wo”"
  },
  {
    name: "Ignatius Ida Bagus A.",
    rating: 5,
    review: "“Lorem ipsum awai yuki no youni futari to ochiteku zutto anata wa asu wa monogatari suida anata ni nogoshitta negai sakura no you ni ima wa tada fukareru sucikara hokorie kasaneta hibi wo”"
  },
  {
    name: "Abiyu Ramadhan K.",
    rating: 5,
    review: "“Lorem ipsum awai yuki no youni futari to ochiteku zutto anata wa asu wa monogatari suida anata ni nogoshitta negai sakura no you ni ima wa tada fukareru sucikara hokorie kasaneta hibi wo”"
  },
];

const Star = <path d="M440 60l120 336h320L618 592l94 348-272-208-272 208 94-348L0 396h320L440 60" />

const customStyles = {
  itemShapes: Star,
  activeFillColor: '#FFC633',
  inactiveFillColor: '#D9D9D9',
};

const ReviewSlider = () => {
  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-4">
      {reviews.map((review, index) => (
        <div key={index} className="w-[500px] p-2.5 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch grow shrink basis-0 px-8 py-7 rounded-[20px] border border-black/opacity-10 justify-start items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 justify-between items-start flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                <Rating className="self-start" style={{ maxWidth: 120 }} value={review.rating} readOnly itemStyles={customStyles} />
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="text-black text-2xl font-bold font-['Nunito Sans'] leading-[28.80px]">{review.name}</div>
                  <div className="w-6 h-6 relative" />
                </div>
                <div className="self-stretch text-neutral-800 text-base font-normal font-['Nunito Sans'] leading-snug">{review.review}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSlider;