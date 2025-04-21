import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMember, removeMember } from "../../redux/teamSlice";
import profile from "../../../public/asset/image/Avatar.png";

const TeamTable = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const teamData = useSelector((state) => state.team.team);
  const dispatch = useDispatch();

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const handleUpdateMember = (index, updatedData) => {
    toggleDropdown(index);
    dispatch(updateMember({ index, updatedData }));
  };

  const handleRemoveMember = (index) => {
    toggleDropdown(index);
    dispatch(updateMember({ index, updatedData: { role: "Removed" } }));
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Team
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Generated
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Unlocked
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assigned
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teamData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full ">
                    <img
                      src={profile}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      Last active 2min ago
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.generated}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.unlocked}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.assigned > 0 ? (
                  item.assigned
                ) : (
                  <span className="text-gray-300">—</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium relative">
                {item.role !== "Removed" && (
                  <button
                    className="text-gray-500 hover:bg-gray-100 p-2 rounded-full"
                    onClick={() => toggleDropdown(index)}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                )}

                {openDropdown === index && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <div
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer"
                        onClick={() =>
                          handleUpdateMember(index, {
                            role: item.role === "Admin" ? "Member" : "Admin",
                          })
                        }
                      >
                        {item.role === "Admin" ? "Make Member" : "Make Admin"}
                      </div>
                      <div
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left cursor-pointer"
                        onClick={() => handleRemoveMember(index)}
                      >
                        Remove from team
                      </div>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamTable;
