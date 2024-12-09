'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { ButtonPrimaryEnable, ButtonSecondaryEnable } from "@/components/Button/Button";
import { FaTrash } from "react-icons/fa6";
import { MdOutlineGpsFixed } from "react-icons/md";
import { deleteUserAddress, getCurrentUser, getUserAddress, logout } from "@/app/services/UserService";
import { getAuthToken } from "@/app/services/AuthTokenService";
import { Router } from "next/router";

interface IAddress {
  ID: string;
  street: string;
  longitude: string;
  latitude: string;
  created_at: string;
  updated_at: string;
}
export default function UserProfilePage() {
  // State untuk menyimpan data user
  const [userData, setUserData] = useState<any>(undefined);
  const [userAddress, setUserAddress] = useState<IAddress[]>([]);
  // Mengambil data user ketika komponen pertama kali dimuat
  useEffect(() => {
    // Fungsi untuk mengambil data
    const fetchUserData = async () => {
      try {
        const response = await getCurrentUser();
        setUserData(response); // Simpan data yang diterima di state
        // console.log(response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

    const fetchUserAddress = async () => {
      try {
        const response = await getUserAddress();
        setUserAddress(response?.data); // Simpan data yang diterima di state
        // console.log(response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserAddress();
  }, []); // Efek ini hanya dipanggil sekali ketika komponen dimuat

  const handleLogOut = () => {
    logout()
    window.location.replace("/");
  }

  const UserAddressDelete = async (productId: string) => {
    try {
      // Menghapus alamat
      await deleteUserAddress(productId);
      console.log("Address deleted:", productId);
      // Setelah berhasil, refresh halaman
      window.location.reload();
    } catch (error) {
      console.error("Error deleting address:", error);
    }
     
  };

  const SetActiveAddress = async (addressId: string) => {
    try {
      // Mendapatkan token untuk autentikasi (sesuaikan jika perlu)
      const token = await getAuthToken();
  
      // Mengirimkan permintaan PUT ke backend dengan ID address
      const response = await axios.put(
        `http://localhost:8888/api/address/${addressId}/active`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log("Address set to active successfully:", response.data);
      alert("Address has been set to active successfully!");
  
      // Refresh daftar alamat setelah berhasil
      const updatedAddresses = await getUserAddress();
      setUserAddress(updatedAddresses?.data);
    } catch (error) {
      console.error("Error setting active address:", error);
      alert("Failed to set active address. Please try again.");
    }
  };
  

  // fetchUserAddress();
  // Render loading atau error jika data belum ada
  if (!userData) {
    return <div>Loading...</div>; // Menampilkan loading state sementara
  }

  return (
    <div className="flex w-full min-h-screen">
      <div className="flex flex-col w-[80%] mx-auto gap-8 my-12">
        <div className="flex">
          <h1 className="text-m-h1 font-bold lg:text-d-h3">My Profile</h1>
        </div>
        <div className="flex flex-col mx-auto bg-[rgb(246,246,246)] shadow-md p-4 gap-6 border-[1px] border-[#D2D2D2] rounded-xl lg:flex-row lg:w-[90%] lg:gap-16">
          <div className="flex flex-col gap-6 p-2 lg:p-6 lg:basis-1/2">
            <div className="flex w-full justify-between text-m-h4 font-bold lg:text-d-h4">
              <p className="text-black">Email</p>
              <p className="text-gray-500 font-normal">{userData.email}</p>
            </div>
            <div className="flex w-full justify-between text-m-h4 font-bold lg:text-d-h4">
              <p className="text-black">First Name</p>
              <p className="text-gray-500 font-normal">{userData.first_name}</p>
            </div>
            <div className="flex w-full justify-between text-m-h4 font-bold lg:text-d-h4">
              <p className="text-black">Last Name</p>
              <p className="text-gray-500 font-normal">{userData.last_name}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-2 lg:p-6 lg:basis-1/2">
            <div className="flex w-full">
              <p className="text-m-h4 text-black font-bold lg:text-d-h4">Address</p>
            </div>
            {userAddress?.map((address) => (
              <div key={address.ID}>
              <div className="flex w-full justify-between px-3 py-4 border-[1px] border-[#D2D2D2] rounded-md">
                <div className="flex flex-col p-2.5 gap-2.5 text-m-b2">
                  {/* <p>Id : {address.ID}</p> */}
                  <p >Address : {address.street}</p>
                  <p>Latitude : {address.latitude}</p>
                  <p>Longtitude : {address.longitude}</p>
                </div>
                <div className="flex flex-col p-2.5 items-center justify-start gap-4">
                  
                  <span className="text-m-h3 text-danger lg:text-m-h2"><button onClick={() => UserAddressDelete(address.ID)}><FaTrash/></button></span>
                  <span className="text-m-h2 text-success-600 lg:text-m-h"><button onClick={() => SetActiveAddress(address.ID)}><MdOutlineGpsFixed/></button></span>
                </div>
              </div>
            </div>
            ))}
          <a href="/user/profile/address">
            <ButtonPrimaryEnable text="Add New Address"/>
          </a>
          <button className="bg-red-500">
            <ButtonSecondaryEnable onClick={handleLogOut} text="Logout"/>
          </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}
