import React from "react";
import profile from "../../asset/image/profile.png";
import { CustomRoundButton, MiniButton } from "../atoms/CustomButton";
import {
  LikeOutlined,
  DislikeOutlined,
  WhatsAppOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

export default function LeadsCard({ type }: { type: string }) {
  function maskWord(word: string) {
    if (word.length <= 2) return word; // Skip masking if word is too short

    const first = word[0];
    const last = word[word.length - 1];
    const masked = "*".repeat(word.length - 2);

    return first + masked + last;
  }

  console.log(maskWord("apple"));

  return (
    <div className="border-2 flex p-2 gap-2">
      {/* Image */}
      <img src={profile} alt="NA" className="h-12 w-12" />

      <div className="flex-1 my-1">
        <div className="flex items-center justify-between w-full">
          {/* Left side */}
          <div className="flex items-center gap-5">
            <div>
              <p className="text-sm">
                {type === "recepto"
                  ? maskWord("Jennifer Markus")
                  : "Jennifer Markus"}
              </p>
              <p className="text-xs text-gray-500">
                {type === "recepto"
                  ? maskWord("Mumbai, India")
                  : "Mumbai, India"}
              </p>
            </div>
            {type === "org" && (
              <div className="bg-gray-200 text-gray-600 rounded-lg px-4 max-h-5 text-xs py-1 flex items-center">
                Org's network
              </div>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <CustomRoundButton
              text1="Assign"
              txColor="#CD7F32"
              bdrColor="#CD7F32"
            />
            <CustomRoundButton
              text1="View Details"
              txColor="#CD7F32"
              bdrColor="#CD7F32"
            />
            <div className="bg-[#57f046] h-6 w-6 text-[11px] flex justify-center items-center rounded">
              94
            </div>
            <LikeOutlined className="text-[#0961e0]" />
            <DislikeOutlined className="text-[#0961e0]" />
          </div>
        </div>

        <p className="w-[75vw] truncate text-[12px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quidem
          itaque harum, eos tempora alias, reprehenderit sed ullam dolore
          voluptate eaque vel sunt, ipsa illo exercitationem impedit quibusdam
          maiores. Labore!
        </p>
        <div className="flex gap-2 mt-2">
          <MiniButton
            text="Found 2 hour ago"
            icon={<ClockCircleOutlined className="" />}
          />
          <MiniButton
            text="Group Name"
            icon={
              <WhatsAppOutlined className="text-white mr-1 bg-[#57f046] rounded-full p-1" />
            }
          />
        </div>
      </div>
    </div>
  );
}
