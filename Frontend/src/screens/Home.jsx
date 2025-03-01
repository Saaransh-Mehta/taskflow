import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import "../App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import laptop from '../assets/laptopImg.png'
import data from '../assets/dataimg.png'
import { ChevronRight } from "lucide-react"
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
      <Navbar />

      <div className="flex justify-center section" data-color="#ffffff">
        <div className="top">
          <div className="badge mt-20 border-2 flex items-center p-3 rounded-lg">
            <span className="bg-green-200 roboto tracking-wide text-green-900 text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg">
              Updated
            </span>
            <span className="text-sm flex items-center gap-3 roboto tracking-wide">
              New Version of TaskFlow is here <FaArrowRight />
            </span>
          </div>
        </div>
      </div>

      <div className="middle section" data-color="#f0f0f0">
        <div className="flex justify-center items-center mt-20 flex-col">
          <span className="text-7xl lilita-one">Project Management ,</span>
          <span className="text-7xl lilita-one">Made Simple</span>
        </div>
        <div className="middle-low-text">
          <div className="flex justify-center mt-4">
            <div className="lilita-one text-lg">
              Built to create a stress-free task management. Use more. Pay less. Do more.
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

      <div className="flex justify-center items-center h-screen section" data-color="#014643">
        <div className="flex justify-center items-center flex-col">
          <img className={`w-[1000px] h-[1000px]`} src={laptop} alt="" />
        </div>
      </div>
      <div className="min-h-screen bg-[#014643]">
          <div className="top flex justify-center items-center flex-col mt-20">
            <span className="text-5xl nunito font-semibold text-white">What Can You Expect To Recieve</span>
            <span className="text-5xl nunito text-white">From Our Platform</span>
          </div>
          <div className="middle flex justify-center items-center mt-20 flex-col">
              <span className="text-2xl roboto text-white font-light">Connect TaskFlow to your favorite tools and apps for a seamless experience</span>
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
            with Taskflow, you can easily manage your tasks, projects and team members. You can create tasks, assign them to team members and track their progress.
          </span>
          </div>
        </div>
        <div className="middle grid place-content-center pt-10">
            <div className="grid grid-cols-2 gap-10">
            <div className="max-w-sm rounded-xl bg-white p-6 shadow-sm">
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
            <path d="M4 18H4.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900">Advanced Analytics</h3>
      <p className="mb-6 text-sm text-gray-600">
        With our AI-based analytics, you will be able to understand your user behaviour as if you were directly talking
        with them.
      </p>
      <div className="flex justify-end">
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7c3aed] text-white">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
    <div className="max-w-sm rounded-xl bg-white p-6 shadow-sm">
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
            <path d="M4 18H4.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900">Advanced Analytics</h3>
      <p className="mb-6 text-sm text-gray-600">
        With our AI-based analytics, you will be able to understand your user behaviour as if you were directly talking
        with them.
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
    </>
  );
};

export default Home;
