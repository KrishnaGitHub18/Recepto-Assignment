import React from "react";
import CustomNavbar from "../components/compounds/CustomNavbar";
import AnalyticsCard from "../components/molecules/AnalyticsCard";
import TeamTable from "../components/compounds/Table";

export default function Analytics() {
  return (
    <div className="h-[96vh] flex flex-col">
      <CustomNavbar type="analytics" />

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
        <AnalyticsCard
          title="ReceptoNet Leads"
          count={404}
          colorA="#2859DF"
          colorB="#ADB7F9"
        />
        <AnalyticsCard
          title="Org Network Leads"
          count={594}
          colorA="#FF8E26"
          colorB="#F9CAAD"
        />
        <TeamTable />
      </div>
    </div>
  );
}
