'use client';
import React, { useState } from "react";
import {TeacherB2CBaseModal,PopupPropB2CTeacher } from "../page";
import { IoTimeOutline } from "react-icons/io5";
import Image from "next/image";
import ClassTimetable from "./Time-table";
import { HiOutlineCalendar } from "react-icons/hi";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import { FaCheck } from "react-icons/fa";

const filter = [
  { id: "f1", label: "1st STD" }
]

const RequestClassCancel: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handleSelect = (index: number) => {
    setSelectedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl"  className={""}>
      <div className="relative bg-white p-6 rounded-2xl w-full max-h-[95vh] overflow-y-auto no-scrollbar mr-1">


        {/* Title */}
        <h2 className="text-left font-semibold text-base md:text-xl mb-4">Request Class Cancellation</h2>

        {/* Date & Time Fields */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {/* Reassign Date */}
          <div >
            <label className="block text-sm font-normal text-black mb-1">Student Name</label>
            <input
              type="text"
              placeholder="Text"
              className="w-full border border-[#e5e7eb] rounded-full px-4 py-3 bg-[#f9fafb] text-sm focus:outline-none pr-12"
            />
            
          </div>

          {/* Reassign Time */}
          <div >
            <label className="block text-sm font-normal text-black mb-1">Student Email</label>
            <input
              type="text"
              placeholder="Text"
              className="w-full border border-[#e5e7eb] rounded-full px-4 py-3 bg-[#f9fafb] text-sm focus:outline-none pr-12"
            />
            
          </div>
           <div >
            <label className="block text-sm font-normal text-black mb-1">Reason for Cancellation</label>
            <input
              type="text"
              placeholder="Text"
              className="w-full border border-[#e5e7eb] rounded-full px-4 py-3 bg-[#f9fafb] text-sm focus:outline-none pr-12"
            />
            
          </div>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">
          

          {/* Timetable Panel */}
          <ClassTimetable />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={onClose}
            className="rounded-full max-w-32 w-full px-6 py-2.5 cursor-pointer text-sm font-medium text-[#ff3366] bg-[#FF33661A] hover:bg-[#FF33662A]"
          >
            Cancel
          </button>
          <button
            className="rounded-full max-w-32 w-full cursor-pointer px-6 py-2.5 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            onClick={onClose}
          >
            Request
          </button>
        </div>
      </div>
    </TeacherB2CBaseModal>
  );
};

export default RequestClassCancel;
