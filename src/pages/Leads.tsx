import React from "react";
import CustomNavbar from "../components/compounds/CustomNavbar";
import LeadsCard from "../components/molecules/LeadsCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Leads() {
  const leadsData = useSelector((state: RootState) => state.leads.data);

  return (
    <div className="h-[93vh] flex flex-col">
      <CustomNavbar type="leads" />
      <hr className="mt-5" />

      <div className="overflow-y-auto flex-1 px-4 py-2 space-y-4">
        {
          leadsData.map((item, index) => (
            <LeadsCard item={item} key={index} index={index} />
          ))
        }
      </div>
    </div>
  );
}
