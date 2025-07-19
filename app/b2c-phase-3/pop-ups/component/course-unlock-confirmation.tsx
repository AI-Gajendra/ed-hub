'use client';

import React from 'react';
import { LuCheck } from "react-icons/lu";
import { TeacherB2CBaseModal, PopupPropB2CTeacher } from '../page';

const CourseUnlockPopup: React.FC<PopupPropB2CTeacher> = ({ isOpen, onClose }) => {
    return (
        <TeacherB2CBaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
            <div className="bg-white w-full rounded-2xl px-2 py-4 text-center relative">
                {/* Check Icon */}
                <div className="flex justify-center mb-4">
                    <div className="bg-[#8dd9b3] p-5 rounded-full">
                        < LuCheck size ={32} className="text-white w-10 h-10" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-lg md:text-xl font-semibold text-black">
                    Course Unlocked Successfully 🎉
                </h2>

                {/* Description */}
                <p className="text-xs lg:text-sm text-[#6B7280] mt-2">
                    Your course has been unlocked. You can now access the course from “My Courses”
                </p>

                {/* CTA Button */}
                <div className="mt-4">
                    <button
                        onClick={onClose}
                        className="bg-[#8dd9b3] text-white font-semibold text-sm px-3 py-2.5 rounded-full hover:bg-[#34D399] transition"
                    >
                        Start Learning
                    </button>
                </div>
            </div>
        </TeacherB2CBaseModal>
    );
};

export default CourseUnlockPopup;
