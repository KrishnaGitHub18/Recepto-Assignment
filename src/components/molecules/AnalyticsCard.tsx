import React from "react";
import Graph from "../../components/compounds/Graph";
import { Progress } from "antd";
import logo from "../../../public/asset/image/logo1.png";
import like from "../../../public/image/like.png";
import add from "../../../public/image/add.png";

export default function AnalyticsCard({title, count, colorA, colorB}: {title: string, count: number, colorA: string, colorB: string}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex border-2 w-[50vw] max-h-[250px] p-5 rounded-lg justify-center bg-[#F0F5FF]">
        <div className="w-[50%] flex flex-col gap-2">
          <img src={logo} alt="NA" height={50} width={50} />
          <p className="text-gray-600 font-semibold">{title}</p>
          <div className="flex gap-2 items-center">
            <p className="text-[26px]">{count}</p>
            <p className="text-gray-600">Total</p>
          </div>
          <Progress
            percent={30}
            showInfo={false}
            strokeWidth={12}
            strokeColor={colorA}
            trailColor={colorB}
          />
          <div className="flex">
            {[
              { status: "Unlocked", count: "174 users", color: colorA },
              { status: "Yet to Unlock", count: "393 users", color: colorB },
            ].map((item, index) => (
              <div key={index} className="w-[50%] flex gap-3">
                <Progress
                  percent={100}
                  showInfo={false}
                  strokeWidth={4}
                  strokeColor={item?.color}
                  className="w-[15%]"
                />
                <div>
                  <p className="text-gray-500">{item?.status}</p>
                  <p>{item?.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%]">
          <Graph height={230} width={400} color={colorB} />
        </div>
      </div>
      {[
        { image: like, title: "Liked Leads" },
        { image: add, title: "Assigned Leads" },
      ].map((item, key) => (
        <div
          key={key}
          className="border-2 w-[15vw] h-[200px] flex flex-col justify-center items-center gap-3 p-7 rounded-lg bg-[#F0F5FF]"
        >
          <img src={item?.image} alt={item?.title} height="35px" width="40px" />
          <p className="text-[12px] text-gray-500">{item?.title}</p>
          <p className="text-[22px] font-semibold">23.4K</p>
        </div>
      ))}
    </div>
  );
}
