"use client"
import React from "react";
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
import { useRouter } from "next/navigation";
import { register } from "@/app/services/UserService";

interface CustomerRegisterSchema {
  email: string;
  first_name: string;
  last_name: string;
  customer_password: string;
  confirm_password: string;
}

const UserRegisterPage: React.FC<{}> = () => {
  
  const router = useRouter()
  const initialValues: CustomerRegisterSchema = { email: '', first_name: '', last_name: '', customer_password: '', confirm_password: '' }
  const handleSubmit = async (values: CustomerRegisterSchema) => {
    const registerequest = await register(values)
    if(registerequest){
      router.push("login")
    } else {
      router.refresh()
    }
  }

  return (
    <div className="max-w-[100vw] lg:max-h-screen overflow-hidden">
      <div className="flex justify-center mx-auto w-[80%] lg:w-[28vw] max-h-screen mt-12">
        <div className="flex flex-col gap-8 items-center justify-center w-full ">
          <div>
            <h1 className="text-m-h1 lg:text-d-h3 font-bold">Customer Sign Up</h1>
          </div>
          <div className="flex flex-col w-full">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, actions) => {
                handleSubmit(values)
                actions.setSubmitting(false);
                actions.resetForm({
                  values: {
                    email: "",
                    first_name: "",
                    last_name: "",
                    customer_password: "",
                    confirm_password: "",
                  },
                });
              }}
            >
              <Form className="flex flex-col gap-6">
                <div className="flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                  <Field className="w-full h-full bg-transparent outline-none text-d-b2" placeholder="Email or phone number" type="email" id="email" name="email"/>
                </div>
                <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="lg:w-1/2 flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                        <Field className="w-full h-full bg-transparent outline-none text-d-b2" placeholder="First name" type="text" id="first_name" name="first_name"/>
                    </div>
                    <div className="lg:w-1/2 flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                        <Field className="w-full h-full bg-transparent outline-none text-d-b2" placeholder="Last name" type="text" id="last_name" name="last_name"/>
                    </div>
                </div>
                <div className="flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                  <Field className="bg-transparent outline-none text-d-b2" placeholder="Enter password" id="customer_password" type="password" name="customer_password"/>
                  <span className="flex w-full h-full items-center justify-end text-lg text-gray-500">
                    <IoEye/>
                  </span>
                </div>

                {/* <div className="flex border-[1px] bg-[#F6F6F6] border-[#D2D2D2] px-4 py-3 rounded-lg text-d-b2">
                  <Field className="bg-transparent outline-none text-d-b2" placeholder="Enter password again" id="confirm_password" type="password" name="confirm_password"/>
                  <span className="flex w-full h-full items-center justify-end text-lg text-gray-500">
                    <IoEye/>
                  </span>
                </div> */}
                
                <ButtonPrimaryEnable text="Register"/>
              </Form>
            </Formik>
          </div>
          <span className="border-t-[1px] w-full border-[#d2d2d2]"></span>
          <p className="text-m-b2">Already have an account? <span className="text-m-h5 text-danger-600 font-bold"><Link href={'/user/auth/login'}>Sign In</Link></span></p>
        </div>
      </div>
    </div>
  );
}

export default UserRegisterPage;
