import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-green-900 text-white py-12">
      <div className="container mx-auto px-12 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <span className='flex w-16 lg:w-24'>
              <img src='../../logos/4.svg' alt="logos" className='w-full h-full'/>
            </span>
          </div>
          <p className="text-white opacity-60 max-w-sm">
            We offer a variety of delicious dishes that suit both your taste and budget, ensuring you can enjoy a satisfying meal without breaking the bank.
          </p>
          <div className="flex space-x-4 mt-4">
            <div className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
              <FaTwitter className="text-black" size={16} />
            </div>
            <div className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
              <FaFacebookF className="text-black" size={16} />
            </div>
            <div className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
              <FaInstagram className="text-black" size={16} />
            </div>
            <div className="w-7 h-7 bg-white rounded-full flex justify-center items-center">
              <FaGithub className="text-black" size={16} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-16">
          <div className="flex flex-col mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <p className="text-white opacity-60">About<br />Features</p>
          </div>
          <div className="flex flex-col mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <p className="text-white opacity-60">
              Customer Support<br />Delivery Details<br />Terms & Conditions<br />Privacy Policy
            </p>
          </div>
          <div className="flex flex-col mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">FAQ</h3>
            <p className="text-white opacity-60">
              Account<br />Manage Deliveries<br />Orders<br />Payments
            </p>
          </div>
          <div className="flex flex-col mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <p className="text-white opacity-60">
              Development Tutorial<br />How to - Blog<br />Youtube Playlist
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12 mt-12 border-t border-white opacity-40 pt-1">
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="text-white opacity-60">FoodEase © 2024, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
