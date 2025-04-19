import React from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function CustomSearchBar() {
  return (
    <div className="border-2 border-gray rounded px-4 py-2 flex justify-center items-center text-xs">
      <SearchOutlined className="text-gray-500 mr-2" />
      What is the best tool for XYZ XYZ...
    </div>
  );
}
