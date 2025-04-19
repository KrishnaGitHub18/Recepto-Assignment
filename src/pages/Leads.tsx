import React from "react";
import CustomNavbar from "../components/compounds/customNavbar";
import LeadsCard from "../components/molecules/LeadsCard";

export default function Leads() {
  return (
    <div className="h-[93vh] flex flex-col">
      <CustomNavbar type="leads" />
      <hr className="mt-5" />
      <LeadsCard type="org"/>
      <LeadsCard type="recepto"/>
    </div>
  );
}
