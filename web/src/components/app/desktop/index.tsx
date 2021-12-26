import React, { FC } from "react";
import ListDetails from "../listDetails";

const DesktopList: FC = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 h-full overflow-y-scroll">
        <div className="p-2 gap-3 flex flex-col">
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
          <div className="rounded-xl bg-gray-400 p-4">Hello</div>
        </div>
      </div>
      <div className="flex-1">
        <ListDetails />
      </div>
    </div>
  );
};

export default DesktopList;
