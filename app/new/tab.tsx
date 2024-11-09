import React, { useState } from "react";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <div>这是第一个标签的内容。</div>;
      case "tab2":
        return <div>这是第二个标签的内容。</div>;
      case "tab3":
        return <div>这是第三个标签的内容。</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 border-b-2 ${
            activeTab === "tab1"
              ? "border-blue-500 text-blue-500"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          标签 1
        </button>
        <button
          className={`px-4 py-2 border-b-2 ${
            activeTab === "tab2"
              ? "border-blue-500 text-blue-500"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          标签 2
        </button>
        <button
          className={`px-4 py-2 border-b-2 ${
            activeTab === "tab3"
              ? "border-blue-500 text-blue-500"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          标签 3
        </button>
      </div>

      <div className="p-4 border rounded">{renderContent()}</div>
    </div>
  );
};

export default TabComponent;
