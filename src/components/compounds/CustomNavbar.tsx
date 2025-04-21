import React, { useEffect, useState } from "react";
import {
  ApartmentOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
  AlipayCircleOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import profile from "../../../public/asset/image/profile.png";
import {CustomButton} from "../atoms/CustomButton";
import CustomSearchBar from "../molecules/CustomSearchBar";

export default function CustomNavbar({type}: {type: string}) {

  const [credits, setCredits] = useState(0);
  useEffect(()=>{
    setCredits(JSON.parse(localStorage.getItem("userdata")).credits);
  }, [])

  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <div>
          <ApartmentOutlined className="text-gray-400" /> Company Name
        </div>
        {type === "leads" && <CustomButton icon={<UsergroupAddOutlined />} title="Invite" />}
      </div>
      <div className="flex gap-5 items-center">
        {type === "leads" && <CustomSearchBar />}
        <CustomButton icon={<AlipayCircleOutlined />} title={`${credits/1000}K credits`} />
        {type === "leads" && <CustomButton icon={<FilterOutlined />} title="Filter" />}
        <div className="flex items-center gap-1">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm">
            <p className="text-gray-800">{JSON.parse(localStorage.getItem("userdata")).name}</p>
            <p className="text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
