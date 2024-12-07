"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useRef, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

interface FormData {
  name: string;
  description: string;
  price_before: number;
  price_after: number;
  exp_date: string;
  stock: number;
  category: string;
  file: FileList;
}

const PopUp: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  message
}) => {
  
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormData = {
        name: event.currentTarget.product_name.value,
        description: event.currentTarget.description.value,
        price_before: event.currentTarget.price_before.value,
        price_after: event.currentTarget.price_after.value,
        exp_date: event.currentTarget.exp_date.value,
        stock: event.currentTarget.stock.value,
        category: event.currentTarget.category.value,
        file: event.currentTarget.file.files,
    };
    
    
};

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }; 
  }, [onClose]);

  return (
    isOpen && (
      <div
        className=" shadow-2xl px-4 py-4 border-[1px] border-black rounded-[10px] absolute bg-white w-[85vw] lg:top-[50%] top-[150%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:w-[40vw]"
        ref={modalRef}
      > 
        <div className="flex justify-end items-end mb-4 lg:mb-8">
            <span className="text-d-h4 flex items-center">
                <button>
                <IoCloseOutline onClick={onClose} />
                </button>
            </span>
        </div>
        <div className="flex flex-col gap-3 justify-between items-center px-8 lg:px-12 pb-12">
          <p className="text-d-h4 font-bold text-info">INFORMATION</p>
            <h1 className="text-d-b1">{message}</h1>
        </div>

      </div>
    )
  );
};

export default PopUp;