"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex-grow bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white flex flex-col relative">
      <Header/>
      <div className="min-h-[70vh] flex flex-col justify-center items-center">
        {/* Background Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
              }}
            />
          ))}
        </div>

        {/* Centered Text */}
        <div className="relative text-center">
          <h1 className="text-5xl font-bold">
            <span className="text-purple-400">Х</span>УРДАН
          </h1>
          <h1 className="text-5xl font-bold">
            <span className="text-purple-400">А</span>ЮУЛГҮЙ
          </h1>
          <h1 className="text-5xl font-bold">
            <span className="text-purple-400">Ш</span>УУРХАЙ
          </h1>
        </div>
      </div>
      <Footer/> 
    </main>
  );
}