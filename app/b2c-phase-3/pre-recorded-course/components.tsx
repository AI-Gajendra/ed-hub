"use client";

import Image from "next/image";
import React, { useState } from "react";


const courses = [
  {
    title: "Worksheet & Story based Learning",
    description: "Courses offered in this Course Type Name...",
    buttonText: "Select Courses",
    image: "/phase-3/foundation.png",
  },
  {
    title: "STEM Self Directed Diploma Program",
    description: "Courses offered in this Course Type Name...",
    buttonText: "Select Courses",
    image: "/phase-3/writing.png",
  },
  {
    title: "Workshop based Courses (Recorded)",
    description: "Courses offered in this Course Type Name...",
    buttonText: "Select Courses",
    image: "/phase-3/phonics.png",
  },
];

const CoursesSection = () => {
 

  return (
    <div className="py-12 px-4 md:px-8 lg:px-20 max-w-[96rem] mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">
        Chooses Pre-Recorded Courses
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white w-[400px] md:w-[480px] h-[420px] md:h-[650px] rounded-3xl flex flex-col items-center"
          >
            <div className="relative w-full h-60 md:h-84  mb-4">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="rounded-t-3xl"
              />
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl lg:text-3xl font-semibold mb-2">
                {course.title}
              </h3>
              <p className="text-sm max-w-[34ch] md:text-base text-[#2e2e2e] mb-4">
                {course.description}
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full"
                
              >
                {course.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup section */}
    
    </div>
  );
};

export default CoursesSection;
