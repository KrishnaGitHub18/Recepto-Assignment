import React from "react";
import CustomNavbar from "../components/compounds/customNavbar";
import LeadsCard from "../components/molecules/LeadsCard";
import data from "../data/data.json";

export default function Leads() {
  return (
    <div className="h-[93vh] flex flex-col">
      <CustomNavbar type="leads" />
      <hr className="mt-5" />

      {/* Scrollable area starts here */}
      <div className="overflow-y-auto flex-1 px-4 py-2 space-y-4">
        {
          data.map((item, index) => (
            <LeadsCard item={item} key={index}/>
          ))
        }
      </div>
    </div>
  );
}
