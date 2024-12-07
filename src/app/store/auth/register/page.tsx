"use client";
import React, { useState } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { ButtonPrimaryEnable } from "@/components/Button/Button";
import { IoEye } from "react-icons/io5";
import Link from "next/link";
import PopUp from "@/components/PopUp";

interface CustomerRegisterSchema {
  email: string;
  storename: string;
  storeaddress: string;
  storedescription: string;
}

const StoreRegisterPage: React.FC<{}> = () => {

  const [isPopUpOpen, setIsAddProductModalOpen] = useState(false);

  const popUpHandler = async () => {
    setIsAddProductModalOpen(!isPopUpOpen);
  };

  const initialValues: CustomerRegisterSchema = { email: "", storename: "", storeaddress: "", storedescription: "" };
  return (
    <div className="max-w-[100vw] lg:min-h-screen overflow-hidden">

      <PopUp
        isOpen={isPopUpOpen}
        onClose={popUpHandler}
        message="Your application will be processed. The result of the application will be informed via email."
      />

      <div className="flex flex-col justify-center mx-auto gap-12 w-[80%] min-h-screen mt-12 lg:flex-row lg:gap-12 items-start">
        <div className="flex flex-col justify-center items-center gap-8 lg:basis-1/2">
          <h1 className="text-m-h3 font-bold lg:text-d-h3">Terms and Conditions</h1>
          <div className="flex flex-col gap-3 text-m-b1 text-justify border-[1px] border-primary-200 p-4 lg:p-6 lg:text-d-b1">
            <p>
              1. Registration and Verification: Register and verify data and
              products through the Foodease team.
            </p>
            <p>
              2. Agreement: Agree to and sign the MoU.
            </p>
            <p>
              3. Product Management: Add, delete, and modify product details.
            </p>
            <p>
              4. Transparent Information: Provide accurate and consumable product information. 
            </p>
            <p>
              5. Discounted and Free Products: Set discount prices, and as the
              product approaches its expiration, partners will be asked for
              consent to offer it for free to willing customers.
            </p>
            <p>
              6. Order Management and Feedback: View and update order status,
              and access customer ratings and reviews.
            </p>
            <p>
              7. Payments and Commissions: Product prices include taxes, Foodease
              takes a commission from transactions, and payments are made
              periodically.
            </p>
            <p>
              8. Termination of Partnership: The partnership can be terminated
              with 30 days written notice or if terms are violated.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center w-full border-t-[1px] border-[#D2D2D2] py-12 md:border-none lg:basis-1/2 lg:py-0">
          <div>
            <h1 className="text-m-h1 lg:text-d-h3 font-bold">
            Apply to Become a Partner
            </h1>
          </div>
          <div className="flex flex-col w-full">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                popUpHandler()
                actions.setSubmitting(false);
                actions.resetForm({
                  values: {
                    email: "",
                    storename: "",
                    storeaddress: "",
                    storedescription: ""
                  },
                });
              }}
            >
              <Form className="flex flex-col gap-6">
                <div className="flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                  <Field
                    className="w-full h-full bg-transparent outline-none text-d-b2"
                    placeholder="Email or phone number"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                
                  <div className="flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                    <Field
                      className="w-full h-full bg-transparent outline-none text-d-b2"
                      placeholder="Store name"
                      type="text"
                      id="storename"
                      name="storename"
                    />
                  </div>
                  <div className="flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                    <Field
                      className="w-full h-full bg-transparent outline-none text-d-b2"
                      placeholder="Store Address"
                      type="text"
                      id="storeaddress"
                      name="storeaddress"
                    />
                  </div>
                  <div className="flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                    <Field
                      className="w-full h-36 bg-transparent outline-none text-d-b2"
                      placeholder="Store Description"
                      as="textarea"
                      id="storedescription"
                      name="storedescription"
                    />
                  </div>
                
               
                <ButtonPrimaryEnable text="Submit" />
              </Form>
            </Formik>
          </div>
          <span className="border-t-[1px] w-full border-[#d2d2d2]"></span>
          <p className="text-d-b2">
            Already registered?{" "}
            <span className="text-m-h5 text-danger-600 font-bold">
              <Link href={"/store/auth/login"}>Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoreRegisterPage;
