"use client";

import React, { useEffect, useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import Image from "next/image";
import { BaseModal, PopupProp } from "../page";
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import TabSwitchLight from "@/components/common-components/TabSwitchLight";

// Types
type Teacher = {
  name: string;
  course: string;
  batch: string;
  image: string;
};

type Student = {
  name: string;
  course: string;
  level: string;
  group: string;
  image: string;
};

// Dummy Data
const fileData = Array.from({ length: 40 }).map(() => ({
  name: "Class 1",
}));

const filters = [
  { id: "1", label: "Filter 1" },
  { id: "2", label: "Filter 2" },
];

const MembershipModal: React.FC<PopupProp> = ({ isOpen, onClose }) => {
  const toggleSelection = (index: number) => {
    if (isTeacherTab) {
      setSelectedTeacherIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setSelectedStudentIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl">
      <div className="relative bg-white p-6 rounded-2xl max-h-[95vh] overflow-y-auto custom-scrollbar w-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100"
        >
          <FiX size={18} />
        </button>

        <h2 className="text-base font-semibold mb-4">Manage Class Access</h2>

        {/* Select Files */}
        <div className="flex items-center justify-between mb-4 gap-4">
          <SearchFilter filters={filters} />
        </div>

        <div className="space-y-3 max-h-[20rem] overflow-y-auto pr-2 custom-peach-scrollbar">
          {fileData.map((file, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-[#faf9fb]  border border-[#e5e7eb] rounded-xl p-5"
            >
              <div>
                <p className="font-medium text-sm">{file.name}</p>
              </div>

              <input type="radio" name="file" className="w-5 h-5" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="rounded-full px-6 py-2 border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="rounded-full px-4 py-2 bg-[#3366ff] text-white text-sm font-medium hover:bg-blue-600" onClick={onClose}>
            Publish
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default MembershipModal;
