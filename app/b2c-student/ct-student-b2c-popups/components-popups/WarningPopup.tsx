import React from "react";
import { FiX } from "react-icons/fi";
import { StudentB2CBaseModal, PopupPropB2CStudent } from "@/app/b2c-student/ct-student-b2c-popups/page";

const RescheduleRequestModal: React.FC<PopupPropB2CStudent> = ({ isOpen, onClose }) => {
  return (
    <StudentB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <div className="relative bg-white p-6 text-center">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <FiX className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold mb-4">Reschedule Request</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          Please note that the lecture can only be canceled if the request is made at least
          24 hours prior to the lecture timing.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Are you sure you want to proceed with the rescheduling request?
        </p>

        <button
          onClick={() => {
            // reschedule request logic here
            onClose();
          }}
          className="px-6 py-2 rounded-full bg-[#3B82F6] text-white font-medium"
        >
          Continue
        </button>
      </div>
    </StudentB2CBaseModal>
  );
};

export default RescheduleRequestModal;
