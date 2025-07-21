'use client';

import React from 'react';
import { LuCheck } from "react-icons/lu";
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from '../page';
import { FiFileText } from "react-icons/fi";
const CourseUnlockPopup: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
            <div className="bg-white w-full rounded-2xl px-2 py-4 ">
              <div className="bg-[#8dd9b3] p-3 rounded-full">
                    < FiFileText size={20} className="text-black w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left pt-2  min-w-0">
                    {/* Original h4: text-sm font-semibold text-black */}
                    <h4 className="text-xs font-semibold text-black truncate sm:text-sm">
                      Worksheet Name
                    </h4>
                    <h4 className="text-xs font-semibold text-black truncate sm:text-sm">
                      11th of july
                    </h4>
            </div>
            </div>
        </TeacherB2CBaseModal>
    );
};

export default CourseUnlockPopup;
