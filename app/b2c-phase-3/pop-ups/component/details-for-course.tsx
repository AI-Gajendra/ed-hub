"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from "../page";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

const DetailsCousrePopup: React.FC<PopupPropB2CTeacher> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    planType: "",
    batchSize: "",
    numMonths: "",
    numClasses: "",
    batchTime: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  return (
    <TeacherB2CBaseModal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-7xl"
      className={""}
    >
      <div className="px-6 md:px-8 py-4 mb-16">
        {/* Top Bar */}
        <div className="w-full  flex items-center text-[#F40852] font-medium text-md  md:text-lg mb-6">
          <FiArrowLeft className="mr-2 w-5 h-6 text-black" onClick={() => router.back()} />
          Confirm Details
        </div>
        {/* Main Card */}
      <div className="w-full max-w-4xl h-[520px] mx-auto gap-2 flex flex-col justify-between md:flex-row ">

          {/* Left Side - Image */}
          <div className="flex items-center rounded-2xl h-full bg-[#faf9fb] border border-[#e5e7eb] justify-center w-full md:w-[55%]">
            <div className="rounded-full overflow-hidden w-[26rem] h-[26rem] ">
              <Image
                src="/phase-3/detail-course.png" // replace this
                alt="Student"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Side - Details & Form */}
          <div className="w-full  h-full md:w-[40%] py-2 ">
            <h2 className="text-lg font-medium mb-2">Course Plan Name</h2>
            <p className="text-sm text-black font-normal mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="space-y-4">
              {[
                { label: "Type of Plan", name: "planType" },
                { label: "Select Batch Size", name: "batchSize" },
                { label: "Select No. of Month", name: "numMonths" },
                { label: "No. of Classes in a Month", name: "numClasses" },
                { label: "Select Batch Time", name: "batchTime" },
              ].map((item) => (
                <div key={item.name}>
                  <label
                    htmlFor={item.name}
                    className="block text-sm font-medium text-black mb-1"
                  >
                    {item.label}
                  </label>
                  <select
                    name={item.name}
                    id={item.name}
                    value={(formData as any)[item.name]}
                    onChange={handleChange}
                    className="w-full border border-[#e5e7eb] bg-[#faf9fb] rounded-full px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>{" "}
        <div className="mt-6  justify-center items-center text-center">
          <button className="bg-[#2563eb] text-white px-8 py-2 rounded-full hover:bg-blue-700 transition font-normal">
            Pay Now
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default DetailsCousrePopup;
