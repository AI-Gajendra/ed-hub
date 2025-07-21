"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import Navbar from "@/components/phase-3/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ArrowLeft, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

export default function StemCourse() {
  const [activeTab, setActiveTab] = useState<
    "Academic Courses" | "Foundation & Skills Courses"
  >("Academic Courses");
  return (
    <div className="bg-[#EEEEEE] h-full min-h-screen">
      <Navbar user={user} />
      <MaxWidthWrapper className="py-10">
        <div>
          <div className="flex gap-4 justify-between items-center">
            <ArrowLeft className="w-6 h-6" />
            <div className="text-xl font-semibold mb-2">
              Chooses Pre-Recorded Courses
            </div>
            <div></div>
          </div>
          <div className="w-full flex justify-center items-center mt-4">
            <Button className="bg-[#FF3366] hover:bg-[#ff3366]/80 text-white rounded-2xl px-2">
             STEM Self Directed Diploma Program
            </Button>
          </div>
        </div>

        <div className="mt-6">
         
            <GradeCard />
          </div>
        
      </MaxWidthWrapper>
    </div>
  );
}

function GradeCard() {
  const [selected, setSelected] = useState(true);
  interface CardData {
    id: number;
    title: string;
    description: string;
    image: string;
    buttonLabel: string;
  }
 const cardsData = [
  {
    id: 1,
    title: "Basic Plan",
    description: "Includes: Courses of 4 boards",
    features: [
      "Lorem Ipsum is a simply dummy text",
      "Lorem Ipsum is a simply dummy text",
      "Lorem Ipsum is a simply dummy text",
      "Lorem Ipsum is a simply dummy text"
    ],
    image: "/phase-3/rampup.png",
    buttonLabel: "Select Courses",
  },
  {
    id: 2,
    title: "Advanced Plan",
   description: "Available Courses: 9 Courses",
    features: [
      "Lorem Ipsum is a simply dummy text",
      "Lorem Ipsum is a simply dummy text",
      "Lorem Ipsum is a simply dummy text",
      "Lorem Ipsum is a simply dummy text"
    ],
    image: "/phase-3/grade-card.png",
    buttonLabel: "Select Courses",
  },
];


  return (
    <div className="flex flex-wrap justify-center gap-6">
  {cardsData.map((card) => (
    <div
      key={card.id}
      className="bg-white w-[360px] sm:w-[400px] md:w-[420px] h-auto rounded-xl shadow-md flex flex-col overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative w-full h-60 sm:h-72 md:h-80">
        <Image
          src={card.image}
          alt="Grade Card"
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col items-center text-center gap-3">
        <h3 className="text-lg sm:text-xl font-semibold">{card.title}</h3>
        <p className="text-[#2E2E2E] text-sm sm:text-base max-w-[39ch]">
          {card.description}
        </p>
         <ul className="list-disc list-inside mb-6 text-gray-700">
                {card.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
        <Link
          href={"/b2c-phase-3/grade-and-content"}
          className="w-full mt-2"
        >
          <button className="bg-[#3366ff] w-full py-2 px-4 rounded-full text-white font-medium hover:bg-blue-700 transition">
            {card.buttonLabel}
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>

  );
}
