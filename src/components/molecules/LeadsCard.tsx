import React from "react";
import profile from "../../asset/image/profile.png";
import { CustomRoundButton, MiniButton } from "../atoms/CustomButton";
import {
  LikeOutlined,
  LikeFilled,
  DislikeOutlined,
  DislikeFilled,
  WhatsAppOutlined,
  ClockCircleOutlined,
  AlipayCircleOutlined,
} from "@ant-design/icons";

export default function LeadsCard({ item }: { item: object }) {
  
  const maskWord = (word: string) => {
    if (word.length <= 2) return word;
    const first = word[0];
    const last = word[word.length - 1];
    const masked = "*".repeat(word.length - 2);
    return first + masked + last;
  }
  const handleUnlock = () => {

  }

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
                {item?.type === "recepto" ? maskWord(item?.name) : item?.name}
              </p>
              <p className="text-xs text-gray-500">
                {item?.type === "recepto" ? maskWord(item?.place) : item?.place}
              </p>
            </div>
            {item?.type === "org" && (
              <div className="bg-gray-200 text-gray-600 rounded-lg px-4 max-h-5 text-xs py-1 flex items-center">
                Org's network
              </div>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {item?.status === "lock" ? (
              <CustomRoundButton
                text1="Unlock"
                icon2={
                  <AlipayCircleOutlined
                    style={{ color: "#FFD700", fontSize: 16 }}
                  />
                }
                text2="3"
                txColor="#ffffff"
                bgColor="#0961e0"
                bdrColor="#0961e0"
                func={handleUnlock}
              />
            ) : (
              <>
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
              </>
            )}

            <div
              className="h-6 w-6 text-[11px] flex justify-center items-center rounded"
              style={
                item?.points <= 80
                  ? { backgroundColor: "#42e36d" }
                  : { backgroundColor: "#6a6ede" }
              }
            >
              {item?.points}
            </div>
            {item?.liked ? (
              <LikeFilled className="text-[#0961e0]" />
            ) : (
              <LikeOutlined className="text-[#0961e0]" />
            )}
            {item?.unliked ? (
              <DislikeFilled className="text-[#0961e0]" />
            ) : (
              <DislikeOutlined className="text-[#0961e0]" />
            )}
          </div>
        </div>

        <p className="w-[73vw] truncate text-[12px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quidem
          itaque harum, eos tempora alias, reprehenderit sed ullam dolore
          voluptate eaque vel sunt, ipsa illo exercitationem impedit quibusdam
          maiores. Labore!
        </p>
        <div className="flex gap-2 mt-2">
          <MiniButton
            text="Found 2 hour ago"
            icon={<ClockCircleOutlined className="mr-1" />}
          />
          <MiniButton
            text={item?.group_name}
            icon={
              <WhatsAppOutlined className="text-white mr-1 bg-[#57f046] rounded-full p-1" />
            }
          />
        </div>
      </div>
    </div>
  );
}
