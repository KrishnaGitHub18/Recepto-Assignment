import React, { useState } from "react";
import profile from "../../../public/asset/image/profile.png";
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
import { useDispatch, useSelector } from "react-redux";
import { updateLead } from "../../redux/leadsSlice";
import { Modal } from "antd";

export default function LeadsCard({ item, index }) {
  const dispatch = useDispatch();
  const teamData = useSelector((state) => state.team.team);

  const maskWord = (word) => {
    if (!word || word.length <= 2) return word;
    return word[0] + "*".repeat(word.length - 2) + word[word.length - 1];
  };

  const handleUnlock = () => {

    dispatch(
      updateLead({
        index,
        updatedLead: {
          ...item,
          status: "unlock",
        },
      })
    );
  };

  const handleLock = () => {
    
  };

  const handleLike = () => {
    dispatch(
      updateLead({
        index,
        updatedLead: {
          ...item,
          liked: !item.liked,
          unliked: item.liked ? item.unliked : false,
        },
      })
    );
  };

  const handleDislike = () => {
    dispatch(
      updateLead({
        index,
        updatedLead: {
          ...item,
          unliked: !item.unliked,
          liked: item.unliked ? item.liked : false,
        },
      })
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = teamData.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAssignClick = () => {
    setIsModalOpen(true);
  };

  const handleUserSelect = (index) => {
    setSelectedUser(index);
    setIsModalOpen(false);
  };

  return (
    <div className="border rounded-lg shadow-sm flex p-4 gap-4 bg-white">
      <img
        src={profile}
        alt="NA"
        className="h-14 w-14 rounded-full object-cover"
      />

      <div className="flex-1">
        <div className="flex items-center justify-between w-full mb-2">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-base font-medium">
                {item?.type === "recepto" ? maskWord(item?.name) : item?.name}
              </p>
              <p className="text-sm text-gray-500">
                {item?.type === "recepto" ? maskWord(item?.place) : item?.place}
              </p>
            </div>
            {item?.type === "org" && (
              <div className="bg-blue-100 text-blue-600 rounded-full px-3 py-0.5 text-xs font-semibold">
                Org's Network
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
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
              ["Assign", "View Details"].map((val, idx) => (
                <CustomRoundButton
                  key={idx}
                  text1={val}
                  txColor="#CD7F32"
                  bdrColor="#CD7F32"
                  func={idx === 1 ? handleLock : handleAssignClick}
                />
              ))
            )}

            <div
              className={`h-6 w-6 text-xs text-white font-bold flex justify-center items-center rounded-full ${
                item?.points <= 80 ? "bg-green-400" : "bg-indigo-500"
              }`}
            >
              {item?.points}
            </div>

            {item?.liked ? (
              <LikeFilled
                className="text-[#0961e0] cursor-pointer"
                onClick={handleLike}
              />
            ) : (
              <LikeOutlined
                className="text-[#0961e0] cursor-pointer"
                onClick={handleLike}
              />
            )}

            {item?.unliked ? (
              <DislikeFilled
                className="text-[#0961e0] cursor-pointer"
                onClick={handleDislike}
              />
            ) : (
              <DislikeOutlined
                className="text-[#0961e0] cursor-pointer"
                onClick={handleDislike}
              />
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 truncate mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quidem
          itaque harum eos tempora alias.
        </p>

        <div className="flex gap-2">
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

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        closable={false}
        width={350}
      >
        <div className="flex items-center border px-3 py-2 rounded mb-3">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
          <span
            onClick={() => setSearch("")}
            className="cursor-pointer text-gray-400"
          >
            ✕
          </span>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {filteredUsers && filteredUsers.map((user, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-2 rounded hover:bg-gray-100 cursor-pointer ${
                selectedUser === idx ? "bg-gray-100" : ""
              }`}
              onClick={() => handleUserSelect(idx)}
            >
              <div className="flex items-center gap-3">
                <img
                  src={profile}
                  alt="profile"
                  className="w-8 h-8 rounded-full"
                />
                <p>{user.name}</p>
              </div>
              {selectedUser === idx && <span className="text-blue-500">✔</span>}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
