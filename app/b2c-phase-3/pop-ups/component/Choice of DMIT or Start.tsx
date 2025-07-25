"use client";

import React from "react";
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from "../page";
import Link from "next/link";

const DmitStart: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
  return (
    <TeacherB2CBaseModal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-4xl"
      className="rounded-xs"
    >
      <section className="py-6 px-6 md:px-12">
        <h2 className="text-xl font-medium text-[#FF3366] mb-6">Get Started</h2>

        {/* Wrapper with relative positioning */}
        <div className="relative w-full sm:w-[90%] mx-auto border border-black rounded-xl p-6 sm:p-10 overflow-hidden">

          {/* Faded Background Pattern */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/phase-3/pattern.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: 0.08, // Adjust as needed (e.g., 0.05 to 0.1)
            }}
          />

          {/* Foreground content */}
          <div className="relative bg-[#ffffff] p-2 z-10">
            {/* Top Section */}
            <div className="mb-6 ">
              <h4 className="text-xl font-medium mb-2">Course Plan Started!!</h4>
              <p className="text-sm text-[#2e2e2e]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <hr className="my-4 border border-[#E0E0E0]" />

            {/* Bottom Two Cards */}
            <div className="grid grid-cols-1 bg-[#ffffff] p-2 md:grid-cols-2 gap-6">
              {/* Left Card */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-medium">Course Plan Started!!</h4>
                <p className="text-sm max-w-[30ch] text-[#2e2e2e]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p> 
                <Link href={"/b2c-phase-3/b2c-student/student-flow/dashboard"}>
                <button className="w-fit bg-[#3366FF] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-[#295cd9] transition">
                  Get Started
                </button></Link>
              </div>

              {/* Right Card */}
              <div className="flex flex-col gap-4">
                <h4 className="text-xl font-medium">Course Plan Started !!</h4>
                <p className="text-sm max-w-[30ch]  text-[#2e2e2e]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="w-fit bg-[#3366FF] text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-[#295cd9] transition">
                  Take DMIT Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TeacherB2CBaseModal>
  );
};

export default DmitStart;
