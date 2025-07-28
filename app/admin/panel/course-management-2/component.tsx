"use client";

import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ScrollableButton from '@/components/b2c-admin/common-component/scrollable-button'
import { FiSearch, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AddCourseModal  from '@/app/admin/pop-ups-2/components/add-course'
import RemoveCourseModal from '@/app/admin/pop-ups-2/components/RemoveCourseModal'

export default function CourseManagement() {
  const [searchTerm, setSearchTerm] = useState("");
const [isModalOpen, setIsModalOpen] = useState(false)
   const [openModal, setOpenModal] = useState<string | null>(null);
  const courses = Array.from({ length: 9 }, () => ({
    image: "/personality.png",
    name: "Course Name",
    domain: "Self Dev",
  }));
  const PRIMARY_BLUE = "#3366FF";
  const INPUT_BG_SEARCH = "bg-white";
 const studentClass = [
    { className: "Class 1", active: true },
    { className: "Class 2", active: false },
    { className: "Class 3", active: false },
    { className: "Class 4", active: false },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl">
        <div className="pt-2 px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
             <RemoveCourseModal
                            isOpen={openModal === "removeCourse"}
                            onClose={() => setOpenModal(null)}
                        />
            <div className="relative flex-grow">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2  h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full sm:min-w-96 pl-10 pr-4 py-2 text-sm ${INPUT_BG_SEARCH} border-2 border-[#6B7280] rounded-full focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none`}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar ">
              <Link href="/admin/panel/admin-course-management" passHref>
                <button
                  className={
                    "flex items-center cursor-pointer justify-center gap-1.5 px-3 py-2 border border-[#E5E7EB] bg-[#F9FAFB] text-black rounded-2xl text-xs sm:text-sm whitespace-nowrap hover:bg-gray-100 flex-shrink-0 transition-colors"
                  }
                >
                  Edit Membership Plans
                </button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex font-normal items-center gap-1 rounded-xl focus-visible:outline-none focus-visible:ring-0 px-2! hover:bg-[#F9FAFB]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 1
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-2xl">
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* 2nd */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex font-normal items-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-0 px-2! hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 2
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-2xl">
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* 3rd */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex font-normal items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-0 px-2! hover:bg-[#F9fafb]/80 text-[#1e1e1e] bg-[#F9FAFB] border border-[#e5e7eb]">
                    Filter 3
                    <FiChevronDown className="text-sm" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-2xl">
                  <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* 4th */}
            </div>
          </div>
        </div> <div className="pt-2">
        <div className="flex justify-center items-center gap-8 border rounded-2xl py-2 my-4 mr-4">
          {studentClass.map((cls, indx) => (
            <div
              key={indx}
              className={cn(
                "text-white p-2 rounded-2xl",
                cls.active ? "bg-[#FF3366]" : "text-[#6B7280]"
              )}
            >
              {cls.className}
            </div>
          ))}
        </div></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4 py-4">
          {courses.map((course, index) => (
            <div
              className="flex flex-col w-full max-h-[330px] px-2 py-2 border border-[#E5E7EB] bg-[#FAF9FB] rounded-3xl"
              key={index}
            >
              <div className="w-full aspect-auto rounded-2xl overflow-hidden">
                <Image
                  src={course.image}
                  width={300}
                  height={200}
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-1 px-1 pt-2 text-black">
                <h2 className="font-semibold text-lg">{course.name}</h2>
                <h3 className="text-sm font-normal">
                  Domain:{" "}
                  <span className="text-[#6B7280]">{course.domain}</span>
                </h3>
              </div>

              <button className="rounded-full w-full px-4 py-2 cursor-pointer text-[#ff3366] bg-[#ff33661a] font-medium mt-2" onClick={() => setOpenModal("removeCourse")}>
                Remove
              </button>
            </div>
          ))}
        </div>
        <ScrollableButton onClick={() => setIsModalOpen(true)} ButtonHeading="Add Courses" />
        
                            <AddCourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
}
