"use client";
import Image from "next/image";
import { NextRequest } from "next/server";
import { useEffect, useRef, useState } from "react";
import TypewriterEffect from "./TypewriterEffect";
import TabComponent from "./tab";
import ButtonGroup from "./button";
import { Button } from "@/components/ui/button";
import FadeInExample from "./motion1";
import ButtonWithAnimation from "./motion2";
import PageTransition from "./motion3";
import { motion } from "framer-motion";

export default function Home() {
  const navs = [
    {
      name: "Home",
      target: "#home",
    },
    {
      name: "About",
      target: "#about",
    },
    {
      name: "Services",
      target: "#services",
    },
    {
      name: "Portfolio",
      target: "#portfolio",
    },
    {
      name: "Team",
      target: "#team",
    },
    {
      name: "Contact",
      target: "#contact",
    },
  ];

  const workArray = [
    {
      name: "asdfasf",
      id: 0,
      job: "java developer",
      date: "2015-2016",
      contentArray: [
        "  Deliver0 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "  Deliver0 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      ],
    },
    {
      name: "asdfasf",
      id: 1,
      job: "java developer",
      date: "2015-2016",
      contentArray: [
        "  Deliver1 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "  Deliver1 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      ],
    },
    {
      name: "asdfasf",
      id: 2,
      job: "java developer",
      date: "2015-2016",
      contentArray: [
        "  Deliver2 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "  Deliver2 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      ],
    },
    {
      name: "asdfasf",
      id: 3,
      job: "java developer",
      date: "2015-2016",
      contentArray: [
        "  Deliver3 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "  Deliver3 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      ],
    },
    {
      name: "asdfasf",
      id: 4,
      job: "java developer",
      date: "2015-2016",
      contentArray: [
        "  Deliver4 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "  Deliver4 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      ],
    },
    {
      name: "asdfasf",
      id: 5,
      job: "java developer",
      date: "2015-2016",
      contentArray: [
        "  Deliver5 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "  Deliver5 high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      ],
    },
  ];
  const [IsScrolled, setIsScrolled] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  // 创建一个可变引用，用于存储按钮元素
  const itemRefs = useRef<HTMLButtonElement[]>([]);

  const targetEle = useRef<HTMLButtonElement | null>(null);
  // 设置按钮的 ref
  const setButtonRef = (el: HTMLButtonElement | null): void => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el); // 将按钮元素添加到 refs 中
    }
  };

  useEffect(() => {
    const itemRef = itemRefs.current[activeIndex];
    const itemRefRect = itemRef.getBoundingClientRect();
    console.log("高度", itemRefRect.height);
    console.log(
      "我是目标元素的值",
      targetEle.current?.getBoundingClientRect().y
    );
    console.log("我是活跃元素的值", itemRefRect.y);
    const targetEleRect = targetEle.current?.getBoundingClientRect();
    // const translateX = targetEleRect!.left + 50; // 向右移动50px
    // const translateY = targetEleRect!.top + itemRefRect.height; // 向下移动50px
    // const translateY = itemRefRect.y - targetEleRect!?.y; // 向下移动50px
    const translateY = itemRefRect.height * activeIndex; // 向下移动50px
    console.log("translateY", translateY);
    if (targetEle.current) {
      // targetEle.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
      targetEle.current.style.transform = `translate(0px,${translateY}px)`;
      targetEle.current.style.transition = "transform 0.3s"; // 添加过渡效果
      // targetEle.current.classList.remove("hidden");
    }
  }, [activeIndex]);

  const changeActive = (index: number): void => {
    console.log("-----------");
    setActiveIndex(index);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  // 滚动事件监听逻辑
  useEffect(() => {
    // 添加滚动事件监听器
    window.addEventListener("scroll", handleScroll);
    // 在组件卸载时清理事件监听器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function changeNav() {
    // var header = document.getElementById("header");
    // header.classList.toggle("active");
  }

  const workCompanyArray = [];

  return (
    <main>
      <div
        className={`fixed  z-50 top-0 left-0 w-full flex justify-between items-center px-[100px]  py-10 duration-600
        ${IsScrolled ? "bg-white py-[5px] border-b border-gray-950" : ""}`}
      >
        <a
          href="#"
          className=" font-bold text-2xl uppercase tracking-widest duration-600 text-white"
        >
          Ljp
        </a>
        <ul className="flex justify-center items-center relative">
          {navs.map((nav, index) => (
            <li key={index}>
              <a
                onClick={() => changeNav()}
                className=" mx-4  font-light duration-600 tracking-widest  text-white   hover:border-b hover:border-white"
                href={nav.target}
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <section
        className=" w-full  min-h-screen  bg-[url('/bg.jpg')] bg-cover flex justify-center items-center"
        id="home"
      >
        {/* <h2 className=" text-white text-8xl font-bold">
          We Make
          <br />
          <span>Brands</span> Matter
        </h2> */}

        <div>
          <TypewriterEffect
            speed={100}
            texts={[
              "Hi,my name is ",
              "Liu jun pneg",
              "I build things for the web",
              "I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.",
            ]}
            classes={[
              "text-green-custom text-lg font-mono", // 第一个文本的 Tailwind 样式
              "text-lightest-custom text-responsive1  font-semibold font-sans  ", // 第二个文本的 Tailwind 样式
              "text-slate-custom  text-responsive1 font-semibold font-sans", // 第三个文本的 Tailwind 样式
              "text-slate-custom font-sans  text-xl max-w-lg",
            ]}
          />
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="  relative  my-0 mx-auto max-w-4xl px-0 py-24"
      >
        <h2
          className="section-counter text-responsive2 flex relative  
        text-lightest-custom mt-[10px] mb-9
        after:h-[1px] after:w-[300px] after:bg-slate-600 after:block after:ml-5  after:top-6 after:relative"
        >
          About Me
        </h2>
        <div className="grid grid-cols-[3fr_2fr] gap-[50px] text-slate-custom font-sans text-lg">
          <div>
            <div>
              <p className="mb-[15px]">
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
              <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </div>
            <ul className=" grid relative grid-cols-[repeat(2,minmax(140px,_200px))] gap-y-0 gap-x-[10px] mt-[20px] overflow-hidden list-none">
              <li className="li_style">JAVA</li>
              <li className="li_style">SQL</li>
              <li className="li_style">React</li>
              <li className="li_style">TS</li>
              <li className="li_style">JS</li>
            </ul>
          </div>
          <div className="max-[300px] relative">
            <div className="relative group ">
              <img
                src="1.jpg"
                className="absolute z-[1] rounded group-hover:left-[-4px]"
              ></img>

              <div
                className="border-2 border-solid top-[30px] left-[30px] z-0 w-[300px] h-[400px] absolute border-green-custom rounded group-hover:left-[34px]
              group-hover:top-[34px]
              "
              ></div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 80,
              delay: 0.3,
            },
          },
        }}
        className="  relative  my-0 mx-auto max-w-3xl px-0 py-24"
      >
        <h2
          className="section-counter text-responsive2 flex relative  
        text-lightest-custom mt-[10px] mb-9
        after:h-[1px] after:w-[300px] after:bg-slate-600 after:block after:ml-5  after:top-6 after:relative"
        >
          Where I’ve Worked
        </h2>
        <div className="flex">
          <div className="flex flex-col">
            <button
              className=" border-l border-red-800 absolute h-[42px]"
              ref={targetEle}
            >
              <span className=" invisible ">1</span>
            </button>
            {workArray.map((item, index) => (
              <button
                key={index}
                className=" border-l border-green-custom  px-5 pb-[2px] h-[42px]"
                ref={setButtonRef}
                onClick={() => changeActive(index)}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </div>
          <div className="ml-5">
            <h3 className="  text-2xl">
              <span>company</span>
              <span>
                @<a>baidu</a>
              </span>
            </h3>
            <p>May 2018 - Present</p>
            <div>
              <ul>
                {workArray.map((item, index) => {
                  return item.contentArray?.map((itemContent, indexContent) => {
                    return (
                      <li
                        className={`li_green ${
                          index === activeIndex ? "" : "hidden"
                        }`}
                      >
                        {itemContent}
                      </li>
                    );
                  });
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      <TabComponent></TabComponent>
      <FadeInExample></FadeInExample>
      <ButtonWithAnimation></ButtonWithAnimation>
      <PageTransition></PageTransition>
      {/* <section className="sec about" id="about">
        <div className="content">
          <div className="mxw800p">
            <h3>Who We Are</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" className="btn">
              Read Our Story
            </a>
          </div>
        </div>
      </section>
      
      <section className="sec about" id="services">
        <div className="content">
          <div className="mxw800p">
            <h3>What We Do</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi.
            </p>
          </div>
          <div className="services">
            <div className="box">
              <div className="iconBx">
                <img src="icon1.png" alt="" />
              </div>
              <div className="content">
                <h2>Design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="iconBx">
                <img src="icon2.png" alt="" />
              </div>
              <div className="content">
                <h2>Development</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="iconBx">
                <img src="icon3.png" alt="" />
              </div>
              <div className="content">
                <h2>Branding</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec stats">
        <div className="content">
          <div className="mxw800p">
            <h3>Our Achievements</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="statsBox">
            <div className="box">
              <h2>1200+</h2>
              <h4>Projects</h4>
            </div>
            <div className="box">
              <h2>800+</h2>
              <h4>Happy Clients</h4>
            </div>
            <div className="box">
              <h2>150+</h2>
              <h4>Countries</h4>
            </div>
            <div className="box">
              <h2>50+</h2>
              <h4>Awards</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="sec work" id="portfolio">
        <div className="content">
          <div className="mxw800p">
            <h3>Recent Work</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="workBx">
            <div className="brand">
              <a href="#">
                <h2>Brand Name</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand Name</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand Name</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand Name</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand Name</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand Name</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand Name</h2>
              </a>
            </div>
            <div className="brand">
              <a href="#">
                <h2>Brand Name</h2>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="sec team" id="team">
        <div className="content">
          <div className="mxw800p">
            <h3>Meet Our Expert</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="teamBx">
            <div className="member">
              <div className="imgBx">
                <img src="1.jpg" alt="" />
              </div>
              <div className="details">
                <div>
                  <h2>
                    John Doe
                    <br />
                    <span>Creative Director</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="member">
              <div className="imgBx">
                <img src="2.jpg" alt="" />
              </div>
              <div className="details">
                <div>
                  <h2>
                    John Doe
                    <br />
                    <span>Creative Director</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="member">
              <div className="imgBx">
                <img src="3.jpg" alt="" />
              </div>
              <div className="details">
                <div>
                  <h2>
                    John Doe
                    <br />
                    <span>Creative Director</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="member">
              <div className="imgBx">
                <img src="4.jpg" alt="" />
              </div>
              <div className="details">
                <div>
                  <h2>
                    John Doe
                    <br />
                    <span>Creative Director</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec contact" id="contact">
        <div className="content">
          <div className="mxw800p">
            <h3>Send Us A Message</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="conactForm">
            <form>
              <div className="row100">
                <div className="inputBx50">
                  <input type="text" name="" placeholder="Full Name" />
                </div>
                <div className="inputBx50">
                  <input type="text" name="" placeholder="Email Address" />
                </div>
              </div>
              <div className="row100">
                <div className="inputBx100">
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>
              <div className="row100">
                <div className="inputBx100">
                  <input type="submit" value="Send" name="" />
                </div>
              </div>
            </form>
          </div>
          <div className="sci">
            <ul>
              <li>
                <a href="#">
                  <img src="facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="linkedin.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            Design & Developed By <a href="#">Online Tutorials</a>
          </p>
        </div>
      </section> */}
    </main>
  );
}
