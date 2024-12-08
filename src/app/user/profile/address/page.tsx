'use client';
import { useEffect, useState } from "react";
import axios from "axios"; // Pastikan axios sudah terinstal
import { ButtonPrimaryEnable } from "@/components/Button/Button";
import { getCurrentUser } from "@/app/services/UserService";
import { getAuthToken } from "@/app/services/AuthTokenService";

export default function UserProfilePage() {
  // State untuk menyimpan data user
  const [userData, setUserData] = useState<any>(undefined);
  const [address, setAddress] = useState({
    street: "",
    village: "",
    sub_district: "",
    city: "",
    province: "",
  });

  // Mengambil data user ketika komponen pertama kali dimuat
  useEffect(() => {
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
  }, []);

  // Handle perubahan input form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  // Handle submit form untuk mengirim data ke backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman
    try {
        const token = await getAuthToken();

        const response = await axios.post("http://localhost:8888/api/address/new", address, 
        {
            headers: { 
                Authorization: `Bearer ${token}`
            }
        }
      );
      console.log("Address saved successfully:", response.data);
      alert("Address has been saved successfully!");
    } catch (error) {
      console.error("Error saving address:", error);
      alert("Failed to save address. Please try again.");
    }
    // console.log(address);
  };

  if (!userData) {
    return <div>Loading...</div>;
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
              <p className="text-m-h4 text-black font-bold lg:text-d-h4">Add New Address</p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex gap-4 items-center">
                <label className="w-1/3 text-black font-medium" htmlFor="street">Alamat</label>
                <input
                  id="street"
                  className="flex-1 px-3 py-2 border-[1px] border-[#D2D2D2] rounded-md"
                  type="text"
                  name="street"
                  value={address.street}
                  onChange={handleInputChange}
                  placeholder="Street"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label className="w-1/3 text-black font-medium" htmlFor="village">Desa</label>
                <input
                  id="village"
                  className="flex-1 px-3 py-2 border-[1px] border-[#D2D2D2] rounded-md"
                  type="text"
                  name="village"
                  value={address.village}
                  onChange={handleInputChange}
                  placeholder="Village"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label className="w-1/3 text-black font-medium" htmlFor="sub_district">Kecamatan</label>
                <input
                  id="sub_district"
                  className="flex-1 px-3 py-2 border-[1px] border-[#D2D2D2] rounded-md"
                  type="text"
                  name="sub_district"
                  value={address.sub_district}
                  onChange={handleInputChange}
                  placeholder="Sub District"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label className="w-1/3 text-black font-medium" htmlFor="city">Kabupaten/Kota</label>
                <input
                  id="city"
                  className="flex-1 px-3 py-2 border-[1px] border-[#D2D2D2] rounded-md"
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleInputChange}
                  placeholder="City"
                />
              </div>
              <div className="flex gap-4 items-center">
                <label className="w-1/3 text-black font-medium" htmlFor="province">Provinsi</label>
                <input
                  id="province"
                  className="flex-1 px-3 py-2 border-[1px] border-[#D2D2D2] rounded-md"
                  type="text"
                  name="province"
                  value={address.province}
                  onChange={handleInputChange}
                  placeholder="Province"
                />
              </div>
              <ButtonPrimaryEnable onClick={() => handleSubmit} text="Save Address" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
