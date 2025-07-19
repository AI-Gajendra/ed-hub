'use client';

import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa6";

const courseData = [
  {
    id: 'academic',
    tag: 'ENGLISH',
    title: 'Academic Courses',
    subtitle: 'Includes: Courses of 4 boards',
    description:
      'Courses offered in this Course Type Name. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: '/phase-3/english.png', // Save this image in public/phase-3/
  },
  {
    id: 'foundation',
    tag: 'FOUNDATION COURSE',
    title: 'Foundation & Skill Courses',
    subtitle: 'Available Courses: 9 Courses',
    description:
      'Courses offered in this Course Type Name. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: '/phase-3/foundation.png', // Save this image in public/phase-3/
  },
];

const PreRecordedCourses = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#eeeeee] px-4 py-8 sm:px-6 md:px-12 lg:px-20">
      {/* Back Arrow */}
      <div className="">
       
      </div>

      {/* Header */}
      <div className="text-center mb-8">
         <button onClick={() => router.back()} className="flex items-center text-black hover:text-blue-600">
          < FaArrowLeft className="mr-1 w-6 h-5" />
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Chooses Pre-Recorded Courses</h2>
        <div className="inline-block bg-[#ff3366] text-white text-sm md:text-lg my-4 font-semibold px-3 py-1 rounded-full">
          Worksheet & Story based Learning
        </div>
      </div>

      {/* Courses */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {courseData.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl md:h-[680px] h-[840px] w-[320px] md:w-[480px] overflow-hidden"
          >
            {/* Image section */}
            <div className="relative w-full h-[50%]">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col items-center text-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-1">{course.title}</h3>
              <p className="text-sm md:text-lg  text-gray-600 mb-2">{course.subtitle}</p>
              <p className="text-sm md:text-lg text-gray-600 mb-4">{course.description}</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full text-sm"
                onClick={() => console.log(`${course.id} course selected`)}
              >
                Select Courses
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreRecordedCourses;