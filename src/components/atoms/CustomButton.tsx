import React from "react";

export function CustomButton({ icon = "", title }) {
  return (
    <div className="border border-activeBlue text-activeBlue px-6 py-1 rounded flex items-center gap-1">
      {icon}
      {title}
    </div>
  );
}

export function CustomRoundButton({
  icon1 = "",
  text1 = "",
  icon2 = "",
  text2 = "",
  txColor = "#0961e0",
  bgColor = "#FFF",
  bdrColor = "#0961e0",
  func = () => {},
}) {
  return (
    <div
      className="border px-7 py-1 rounded-full flex items-center gap-2 text-xs cursor-pointer transition-all duration-200 ease-in-out
                 hover:shadow-md hover:scale-105 active:scale-100"
      style={{
        color: txColor,
        backgroundColor: bgColor,
        borderColor: bdrColor,
        borderWidth: '1px',
      }}
      onClick={func}
    >
      {icon1}
      {text1}
      {icon2}
      {text2}
    </div>
  );
}


export function MiniButton({ icon = "", text = "" }) {
  return (
    <div className="bg-gray-200 text-gray-600 rounded-lg px-4 max-h-5 text-[10px] flex items-center w-fit">
      {icon}
      {text}
    </div>
  );
}
