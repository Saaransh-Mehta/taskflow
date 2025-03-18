import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import homeImg from '../assets/homeImg.png'
import "../App.css";
import { motion } from "motion/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import laptop from "../assets/laptopImg.png";
import data from "../assets/dataimg.png";
import { ChevronRight } from "lucide-react";
import Accordion from "../components/Accordian";
import Footer from "../components/Footer";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 10%",
        end: "bottom 90%",
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: section.dataset.color,
            duration: 0.5,
          }),
        onEnterBack: () =>
          gsap.to("body", {
            backgroundColor: section.dataset.color,
            duration: 0.5,
          }),
      });
    });
  }, []);

  return (
    <>
     

      <div className="flex justify-center section" data-color="#ffffff">
        <div className="top">
          <div className="badge mt-20 border-2 flex items-center p-3 rounded-lg">
            <span className="bg-green-200 roboto tracking-wide text-green-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg">
              Updated
            </span>
            <span className="text-sm flex items-center gap-3 roboto tracking-wide cursor-pointer text-black/70">
              New Version of TaskFlow is here <FaArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className="middle section" data-color="#f0f0f0">
        <div className="flex justify-center items-center mt-20 flex-col">
          <span className="text-7xl lilita-one text-black">Project Management ,</span>
          <span className="text-7xl lilita-one text-black">Made Simple</span>
        </div>
        <div className="middle-low-text">
          <div className="flex justify-center mt-4">
            <div className="lilita-one text-lg text-black/70">
              Built to create a stress-free task management. Use more. Pay less.
              Do more.
            </div>
          </div>
          <div className="buttons flex justify-center gap-5 mt-10">
            <button className="bg-purple-600 text-white lilita-one p-2 rounded-xl">
              Start Free Trial
            </button>
            <button className="bg-white text-black lilita-one p-2 rounded-xl border-2">
              Explore Features
            </button>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center h-screen section"
        data-color="#014643"
      >
        <div className="flex justify-center items-center flex-col">
          <img className={`w-[1000px] h-[1000px]`} src={laptop} alt="" />
        </div>
      </div>
      <div className="min-h-screen bg-[#014643]">
        <div className="top flex justify-center items-center flex-col mt-20">
          <span className="text-5xl nunito font-semibold text-white">
            What Can You Expect To Recieve
          </span>
          <span className="text-5xl nunito text-white">From Our Platform</span>
        </div>
        <div className="middle flex justify-center items-center mt-20 flex-col">
          <span className="text-2xl roboto text-white font-light">
            Connect TaskFlow to your favorite tools and apps for a seamless
            experience
          </span>
        </div>
        <div className="image flex justify-center items-center flex-col">
          <img className="w-[900px] h-[900px]" src={data} alt="" />
        </div>
      </div>
      <div className="min-h-screen bg-white">
        <div className="top">
          <span className=" text-5xl  pt-10 nunito tracking-tight font-bold text-black flex justify-center items-center flex-col mt-20">
            Explore Our Amazing Features
          </span>
          <div className="flex justify-center items-center flex-col pt-10">
            <span>
              with Taskflow, you can easily manage your tasks, projects and team
              members. You can create tasks, assign them to team members and
              track their progress.
            </span>
          </div>
        </div>
        <div className="middle grid place-content-center pt-10 gap-10">
          <div className="grid grid-cols-2 gap-10">
            <div className="max-w-sm rounded-xl bg-white p-6 shadow-sm hover:shadow-xl cursor-pointer">
              <div className="mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00483c]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M8 18L12 18L12 6L8 6L8 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18L20 18L20 10L16 10L16 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18H4.01"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900 poppins">
                Advanced Analytics
              </h3>
              <p className="mb-6 text-sm text-gray-600">
                With our AI-based analytics, you will be able to understand your
                user behaviour as if you were directly talking with them.
              </p>
              <div className="flex justify-end">
                <motion.button
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2, z: 1 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c3aed] text-white shadow-sm hover:shadow-2xl"
                >
                  <ChevronRight size={16} />
                </motion.button>
              </div>
            </div>
            <div className="max-w-sm rounded-xl bg-white p-6 shadow-sm hover:shadow-xl cursor-pointer">
              <div className="mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00483c]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M8 18L12 18L12 6L8 6L8 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18L20 18L20 10L16 10L16 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18H4.01"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900 poppins">
                Advanced Analytics
              </h3>
              <p className="mb-6 text-sm text-gray-600">
                With our AI-based analytics, you will be able to understand your
                user behaviour as if you were directly talking with them.
              </p>
              <div className="flex justify-end">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c3aed] text-white">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="max-w-sm rounded-xl bg-white p-6 shadow-sm hover:shadow-xl cursor-pointer">
              <div className="mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00483c]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M8 18L12 18L12 6L8 6L8 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18L20 18L20 10L16 10L16 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18H4.01"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900 poppins ">
                Advanced Analytics
              </h3>
              <p className="mb-6 text-sm text-gray-600">
                With our AI-based analytics, you will be able to understand your
                user behaviour as if you were directly talking with them.
              </p>
              <div className="flex justify-end">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c3aed] text-white">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="max-w-sm rounded-xl bg-white p-6 shadow-sm hover:shadow-xl cursor-pointer">
              <div className="mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00483c]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M8 18L12 18L12 6L8 6L8 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18L20 18L20 10L16 10L16 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18H4.01"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                Advanced Analytics
              </h3>
              <p className="mb-6 text-sm text-gray-600">
                With our AI-based analytics, you will be able to understand your
                user behaviour as if you were directly talking with them.
              </p>
              <div className="flex justify-end">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c3aed] text-white">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="max-w-sm rounded-xl bg-white p-6 shadow-sm hover:shadow-xl cursor-pointer">
              <div className="mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00483c]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M8 18L12 18L12 6L8 6L8 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 18L20 18L20 10L16 10L16 18Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 18H4.01"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                Advanced Analytics
              </h3>
              <p className="mb-6 text-sm text-gray-600">
                With our AI-based analytics, you will be able to understand your
                user behaviour as if you were directly talking with them.
              </p>
              <div className="flex justify-end">
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c3aed] text-white">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white">
        <div className="pricing">
          <div className="pricing-top pt-10 flex flex-col justify-center">
            <div className="flex justify-center">
              <h1 className="poppins text-4xl font-semibold text-black ">
                Choose Your Plan
              </h1>
            </div>
            <div className="flex justify-center pt-5 opacity-80">
              <p className="poppins text-black">
                Our pricing plans are designed to be affordable, flexible ,
                andtailored to your unique needs.
              </p>
            </div>
          </div>
          <div className="pricing-section pt-5">
            <div className="card-section flex justify-center gap-5">
              <div className="card-1 h-[70vh] w-52 rounded  ">
                <div className="small-card bg-gray-100 flex justify-center h-[20%] items-center rounded-xl ">
                  <div className="card-top">
                    <h1 className="poppins font-semibold text-black">Have Question ?</h1>
                    <p className="poppins text-xs text-purple-500">
                      Contact Us Now!
                    </p>
                  </div>
                </div>
                <div className="lower-card h-[80%] bg-green-100 rounded-xl mt-2">
                  <ul className="flex flex-col  gap-5 pt-3 justify-center items-center pb-3 ">
                    <li className="text-green-900">Website Analytics</li>
                    <li className="text-green-900">Data Workspace</li>
                    <li className="text-green-900">Custom Branding</li>
                    <li className="text-green-900">Tracked User</li>
                    <li className="text-green-900">AI Powered Features</li>
                    <li className="text-green-900">Custom Report</li>
                    <li className="text-green-900">Web App Analytics</li>
                    <li className="text-green-900">Mobile App Analytics</li>
                  </ul>
                </div>
              </div>
              <div className="card-1 h-[70vh] w-52 rounded shadow-sm ">
                <div className="small-card bg-gray-100 flex justify-center h-[20%] items-center rounded-xl">
                  <div className="card-top">
                    <h1 className="poppins text-sm font-semibold text-black">STARTER</h1>
                    <p className="poppins text-2xl font-bold text-black">
                      $29 <span className="text-xs opacity-50 text-black">/Month</span>
                    </p>
                    <button className="poppins bg-[#7c3aed] text-white text-xs p-2 rounded-xl ">
                      Start Free Trial
                    </button>
                  </div>
                </div>
                <div className="lower-card h-[80%]  rounded-xl mt-2">
                  <ul className="flex flex-col  gap-5 pt-3 justify-center items-center pb-3 ">
                    <li className="">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="50" fill="purple" />
                        <path
                          d="M30 50 L45 65 L70 35"
                          stroke="white"
                          stroke-width="8"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </li>
                    <li className="">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="50" fill="purple" />
                        <path
                          d="M30 50 L45 65 L70 35"
                          stroke="white"
                          stroke-width="8"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </li>
                    <li className="">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="50" fill="purple" />
                        <path
                          d="M30 50 L45 65 L70 35"
                          stroke="white"
                          stroke-width="8"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </li>
                    <li className="">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="50" cy="50" r="50" fill="purple" />
                        <path
                          d="M30 50 L45 65 L70 35"
                          stroke="white"
                          stroke-width="8"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </li>
                    <li className=""></li>
                    <li className=""></li>
                    <li className=""></li>
                    <li className=""></li>
                  </ul>
                </div>
              </div>
              <div className="card-1 h-[70vh] w-52 rounded shadow-sm border-2 ">
                <div className="small-card bg-gray-100 flex justify-center">
                  <div className="card-top">
                    <h1 className="poppins text-black">Have Question ?</h1>
                    <p className="poppins text-black">Contact Us Now!</p>
                  </div>
                </div>
              </div>
              <div className="card-1 h-[70vh] w-52 rounded shadow-sm border-2 ">
                <div className="small-card bg-gray-100 flex justify-center">
                  <div className="card-top">
                    <h1 className="poppins text-black">Have Question ?</h1>
                    <p className="poppins text-black">Contact Us Now!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white">
        <div className="flex justify-center relative">
        <img className="w-[820px]" src={homeImg} alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <span className="text-2xl poppins font-bold text-black">
              Integrated with 100+ Tools You
            </span>
            <span className=" text-black text-2xl poppins font-bold">
              Already Know & Love.
            </span>
            <button className="text-white poppins text-sm bg-purple-500 p-3 mt-2 rounded-xl ">View All Integrations</button>
          </div>
        </div>
      </div>
      <div className="min-h-screen">
          <div className="top-section flex flex-col justify-center items-center gap-2 pt-20">
            <span className="text-4xl poppins font-bold text-white">Real People, Real Results.</span>
            <span className="text-4xl poppins font-bold text-white">Hear It From Our Customers</span>
            <span className="text-sm pt-12 text-white/70 poppins">Don't take our word for it . See what our customer say.</span>
          </div>
          <div className="bottom-section">
              <div className="card-section flex justify-center gap-5">
                <div className="card-1">
                    <div>

                    </div>
                </div>
              </div>
          </div>
      </div>
      <div className="min-h-screen bg-white">
        <div className="question-section pl-56 pr-56 pt-20 flex flex-row items-center justify-between">
            <div className="left-section flex flex-col">
                <span className="text-bold poppins text-4xl text-black">Frequently Asked</span>
                <span className="text-bold poppins text-4xl text-black">Questions</span>
                <span className="text-sm text-black pt-5">We have put together some commonly</span>
                <span className="text-sm text-black ">asked question</span>
                <button className="text-sm bg-purple-500 text-white p-3 mt-2 rounded-xl">Contact Us</button>
            </div>
            <div className="right-section">
                <div className="card-accordian">
                    <div className="accordian-top">
                        <Accordion/>
                    </div>  
                
                </div>      

            </div>
        </div>
      </div>
      <div className="min-h-[80vh] bg-white flex justify-center items-center">
              <div className="min-h-[50vh] bg-[#00483c] w-[70%] rounded-3xl flex flex-col gap-5 justify-center items-center shadow-xl">
                <span className="text-3xl poppins text-bold text-white">Get Started With TaskFlow Right Now!</span>
                <span className="text-sm poppins text-bold text-white">Let our tool do the tasking. Try it out right now free.</span>
                <motion.button 
                initial={{size:1}}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                className="rounded-full bg-purple-500 text-sm p-4 poppins text-white">Start Free Trail</motion.button>
              </div>
      </div>
      <div className="footer">
       
          <Footer/>
      </div>
    </>
  );
};

export default Home;
