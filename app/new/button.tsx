import React, { useState, useRef, useEffect } from "react";

const ButtonGroup: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 当前激活按钮的索引
  const containerRef = useRef<HTMLDivElement | null>(null); // 定义 ref 类型，用于获取容器
  const [borderHeight, setBorderHeight] = useState<number>(0); // 边框的高度
  const [borderPosition, setBorderPosition] = useState<number>(0); // 边框的 Y 轴位置

  const buttons = ["按钮 1", "按钮 2", "按钮 3", "按钮 4"];

  // 获取每个按钮的高度并设置边框的高度与位置
  useEffect(() => {
    if (containerRef.current) {
      const activeButton = containerRef.current.children[
        activeIndex
      ] as HTMLElement;
      if (activeButton) {
        setBorderHeight(activeButton.offsetHeight); // 设置边框高度等于按钮高度
        setBorderPosition(activeButton.offsetTop); // 设置边框位置
      }
    }
  }, [activeIndex, buttons.length]); // 每当 activeIndex 或按钮数量变化时重新计算

  return (
    <div className="relative w-64" ref={containerRef}>
      {/* 左侧滑动边框 */}
      <span
        className="absolute left-0 w-1 bg-red-500 transition-transform duration-300 ease-out"
        style={{
          height: `${borderHeight}px`,
          transform: `translateY(${borderPosition}px)`,
        }}
      />
      <div className="flex flex-col">
        {buttons.map((label, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-left ${
              activeIndex === index ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => setActiveIndex(index)} // 点击时更新当前按钮索引
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
