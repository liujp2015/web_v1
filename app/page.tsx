import Image from "next/image";
import { NextRequest } from "next/server";
import { serverSession } from "./api/auth/[...nextauth]/route";

export default function Home() {
  if (serverSession?.user) {
  }

  request: NextRequest;
  return (
    <main className=" bg-black">
      {/* <div><button  className=" bg-black px-4 py-6 m-10 rounded-lg text-white hover:bg-red-500 focus:bg-red-500">速比</button></div> */}

      <header id="header">
        {/* <button className=" bg-black px-4 py-6 m-10 rounded-lg text-white hover:bg-red-500 focus:bg-red-500">
          速比
        </button> */}
        <a href="#" className="logo bg-black hover:bg-orange-300">
          Ljp
        </a>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="toggle"></div>
      </header>
      <section className="banner" id="home">
        <h2>
          We Make
          <br />
          <span>Brands</span> Matter
        </h2>
      </section>
      <section className="sec about" id="about">
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
      </section>
    </main>
  );
}
