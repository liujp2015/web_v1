import React, { useState, useEffect } from "react";

type TypewriterEffectProps = {
  speed?: number;
  texts: string[]; // 文本数组
  classes: string[]; // Tailwind CSS 类名数组
};

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  speed = 100,
  texts,
  classes,
}) => {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>(
    Array(texts.length).fill("")
  ); // 用来存储已经显示的文本内容
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // 当前显示的文本索引

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      let charIndex = 0;
      const text = texts[currentTextIndex]; // 当前要显示的文本
      const intervalId = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedTexts((prev) => {
            const updatedTexts = [...prev];
            if (charIndex === 0) {
              updatedTexts[currentTextIndex] =
                prev[currentTextIndex] + text[charIndex]; // 追加当前字符
              return updatedTexts;
            } else {
              updatedTexts[currentTextIndex] =
                prev[currentTextIndex] + text[charIndex - 1]; // 追加当前字符
              return updatedTexts;
            }
          });
          charIndex++;
        } else {
          clearInterval(intervalId);
          // 当当前文本显示完毕后，延迟一段时间再显示下一个文本
          setTimeout(() => {
            setCurrentTextIndex((prev) => prev + 1); // 切换到下一个文本
          }, 500); // 延迟 500ms 后开始下一个文本的逐字显示
        }
      }, speed);

      return () => clearInterval(intervalId); // 清除计时器
    }
  }, [currentTextIndex, speed, texts]);

  return (
    <div>
      {displayedTexts.map((text, i) => (
        <div key={i}>
          {/* 根据 index 使用不同的标签 */}
          {i === 0 ? (
            <h1 className={classes[i] || ""}>{text}</h1>
          ) : i === 1 ? (
            <h2 className={classes[i] || ""}>{text}</h2>
          ) : i === 2 ? (
            <h3 className={classes[i] || ""}>{text}</h3>
          ) : (
            <p className={classes[i] || ""}>{text}</p> // 默认渲染 p 标签
          )}
        </div>
      ))}
    </div>
  );
};

export default TypewriterEffect;
