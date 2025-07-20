import React from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { StudentB2CBaseModal, PopupPropB2CStudent } from "@/app/b2c-student/ct-student-b2c-popups/page";

const CourseRenewedModal: React.FC<PopupPropB2CStudent> = ({ isOpen, onClose }) => {
  return (
    <StudentB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
      <div className="relative bg-white p-8 text-center">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <FiX className="w-5 h-5" />
        </button>

        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-200 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
          Course Renewed Successfully
          <Image
            src="/common-images/celebration-icon.png"
            alt="Celebration"
            width={40}
            height={40}
          />
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Your course has been renewed. You can now continue learning without interruptions.
        </p>

        <button
          onClick={onClose}
          className="px-6 py-2 rounded-full bg-green-400 text-white font-medium text-sm"
        >
          Start Learning Again
        </button>
      </div>
    </StudentB2CBaseModal>
  );
};

export default CourseRenewedModal;
