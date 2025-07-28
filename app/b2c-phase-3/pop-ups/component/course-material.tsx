'use client';

import React from 'react';
import { LuCheck } from "react-icons/lu";
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from '../page';
import { FiFileText } from "react-icons/fi";
const CourseMaterial: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
            <div className="bg-white w-full rounded-lg px-2 py-4 ">
              <div className="flex items-center gap-3">
                  {/* Icon */}
                  <div className="bg-[#8dd9b3] p-2 rounded-full">
                    <FiFileText size={16} className="text-black" />
                  </div>
              
                  {/* Texts */}
                  <div className="flex flex-col text-left">
                    <h4 className="text-sm font-semibold text-black">Worksheet Name</h4>
                    <p className="text-xs text-gray-500">11th July 2025</p>
                  </div>
                </div>
            </div>
            
        </TeacherB2CBaseModal>
    );
};

export default CourseMaterial;
