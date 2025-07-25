"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import Navbar from "@/components/b2c-phase-3/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
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

export default function RecordedCourse() {
  const [activeTab, setActiveTab] = useState<
    "Academic Courses" | "Foundation & Skills Courses"
  >("Academic Courses");
   const router = useRouter();
  return (
    <div className="bg-[#EEEEEE] h-full min-h-screen">
      <Navbar user={user} />
      <MaxWidthWrapper className="py-10">
        <div>
          <div className="flex  pl-28 justify-between items-center">
            <ArrowLeft className="w-6 h-6  md:w-8 md:h-8" onClick={() => router.back()}  />
            <div className="text-xl md:text-2xl font-semibold mb-2 -tracking-normal">
              Chooses Pre-Recorded Courses
            </div>
            <div></div>
          </div>
          <div className="w-full flex justify-center ml-10 items-center mt-4">
            <Button className="bg-[#FF3366] hover:bg-[#ff3366]/80 text-white rounded-2xl px-2">
             Workshop based Courses (Recorded)
            </Button>
          </div>
        </div>

        <div >
          <h2 className="text-xl  pl-28  mt-14 font-medium">
           Select Courses
          </h2>
          <div className="space-y-8 mt-4">
            <GradeCard />
          </div>
        </div >
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
  const cardsData: CardData[] = [
    {
      id: 1,
      title: "Spell-Bee Course",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/rampup.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 2,
      title: "Handwriting Course ",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 3,
      title: "Phonics Course",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
   
   
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
  {cardsData.map((card) => (
    <div
      key={card.id}
      className="bg-white w-[360px] sm:w-[400px]  h-auto rounded-3xl shadow-md flex flex-col overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative w-full h-60 sm:h-72 md:h-80">
        <Image
          src={card.image}
          alt="Grade Card"
          fill
          className="object-cover rounded-t-3xl"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col items-center text-center gap-3">
        <h3 className="text-lg sm:text-xl font-semibold">{card.title}</h3>
        <p className="text-[#2E2E2E] text-sm sm:text-base max-w-[39ch]">
          {card.description}
        </p>
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
