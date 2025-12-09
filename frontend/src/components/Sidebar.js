import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen flex flex-col border-l border-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Right Sidebar</h2>
      <div className="flex flex-col gap-3">
        <button className="text-left p-2 hover:bg-gray-100 rounded">Trending</button>
        <button className="text-left p-2 hover:bg-gray-100 rounded">Suggestions</button>
        <button className="text-left p-2 hover:bg-gray-100 rounded">Analytics</button>
      </div>
    </div>
  );
};

export default Sidebar;
