import React from "react";
import CustomNavbar from "../components/compounds/customNavbar";
import AnalyticsCard from "../components/molecules/AnalyticsCard";
import TeamTable from "../components/compounds/Table";

export default function Analytics() {
  return (
    <div className="flex flex-col gap-4">
      <CustomNavbar type="analytics" />
      <AnalyticsCard title="ReceptoNet Leads" count={404} colorA="#2859DF" colorB="#ADB7F9"/>
      <AnalyticsCard title="Org Network Leads" count={594} colorA="#FF8E26" colorB="#F9CAAD"/>
      <TeamTable />
    </div>
  );
}
