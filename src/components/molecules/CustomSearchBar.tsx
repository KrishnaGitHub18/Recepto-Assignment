import React from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function CustomSearchBar() {
  return (
    <div className="border border-gray-300 rounded px-4 py-2 flex items-center w-full max-w-md">
      <SearchOutlined className="text-gray-500 mr-2" />
      <input
        type="text"
        placeholder="Find what you want!"
        className="outline-none w-full text-sm text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}
