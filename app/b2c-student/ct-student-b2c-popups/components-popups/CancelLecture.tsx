import React from "react";
import { FiX } from "react-icons/fi";
import { StudentB2CBaseModal, PopupPropB2CStudent } from "@/app/b2c-student/ct-student-b2c-popups/page";

const CancelLectureModal: React.FC<PopupPropB2CStudent> = ({ isOpen, onClose }) => {
  return (
    <StudentB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 text-center">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <FiX className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold mb-4">Cancel Lecture</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus urna elit. 
          Phasellus pharetra orci dolor, eget convallis tellus facilisis facilisis. Nulla mattis, 
          augue nec facilisis cursus, diam libero scelerisque ex, vitae pretium ligula sem quis mi.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-gray-100 text-gray-500 font-medium"
          >
            Discard
          </button>
          <button
            onClick={() => {
              // cancel lecture logic here
              onClose();
            }}
            className="px-6 py-2 rounded-full bg-[#ff3366] text-white font-medium"
          >
            Cancel Lecture
          </button>
        </div>
      </div>
    </StudentB2CBaseModal>
  );
};

export default CancelLectureModal;
