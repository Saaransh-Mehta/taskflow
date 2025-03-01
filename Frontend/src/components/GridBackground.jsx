import React from "react";
import MoneyImg from '../assets/3dMoney.png'

export function GridBackgroundDemo() {
  return (
    (<div
      className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      
      <div
        className="absolute pointer-events-none inset-0 flex flex-col  items-center justify-center dark:text-white dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div 
    className="flex flex-col gap-10">

    
     <div 
     
     className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2">
        Collab with <span className="text-pink-600">GenAI</span> <br /> and manage yours <br /> <span className="text-pink-600 mt-2">Tasks </span>Efficiently
        
     </div>

     <div 
    initial={{ opacity: 1, y: 0 }}
    animate={{ y: [0, -5, 5, 0] }}
    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
    className="flex justify-center items-center drop-shadow-lg"
  >
    <img className="w-40 h-40 shadow-2xl" src={MoneyImg} alt={alt} />
  </div>

     </div>
  
    </div>
    
)
  );
}
