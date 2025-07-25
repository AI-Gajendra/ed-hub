"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import Navbar from "@/components/b2c-phase-3/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
 import FoundationCard from './component'
import { ArrowLeft, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import DetailsCousrePopup from "../pop-ups/component/details-for-course";
import { useRouter } from "next/navigation";

const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

export default function GradeAndContent() {
 const [activeTab, setActiveTab] = useState<"Academic Courses" | "Foundation & Skills Courses">(
    "Academic Courses"
  );
  const router = useRouter();
  return (
    <div className="bg-[#EEEEEE] h-full min-h-screen">
      <Navbar user={user} />
      <MaxWidthWrapper className="py-10">
        <div>
         
          <div className="flex gap-4 justify-between items-center">
            <ArrowLeft className="w-6 h-6 md:w-8 md:h-8" 
             onClick={() => router.back()}/>
            <div className="text-xl font-semibold mb-2">
              Chooses Pre-Recorded Courses
            </div>
            <div></div>
          </div>
          <div className="flex justify-center my-4 space-x-4">
        {(["Academic Courses", "Foundation & Skills Courses"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 py-1.5 rounded-2xl font-normal transition ${
              activeTab === tab ? "bg-[#ff3366] text-white" : "text-[#6b7280]"
            }`}
          >
            {tab === "Academic Courses" ? "Academic Courses" : "Foundation & Skills Courses"}
          </button>
        ))}
      </div>
        </div>

       

         {activeTab === "Academic Courses" && (
          <>
            <h2 className="text-xl mt-14 font-medium">Select Board in academic courses</h2>
            <div className="space-y-8 mt-4">
              <GradeCard />
            </div>
          </>
        )}
         {activeTab === "Foundation & Skills Courses" && (
          <FoundationCard />
        )}
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
  title: "ICSE Grade",
  description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  image: "/phase-3/rampup.png",
   buttonLabel: "Select Course Type",
},
  {
    id: 2,
    title: "CBSE Grade ",
     description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "/phase-3/grade-card.png",
     buttonLabel: "Select Course Type",
  },
  {
    id: 3,
    title: "RBSE Grade ",
    description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "/phase-3/grade-card.png",
    buttonLabel: "Select Course Type",
  },
  {
    id: 4,
    title: "ICSE Grade ",
    description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "/phase-3/grade-card.png",
     buttonLabel: "Select Course Type",
  },
  {
    id: 5,
    title: "CBSE Grade ",
    description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    image: "/phase-3/grade-card.png",
    buttonLabel: "Select Course Type",
  },
];


  return (
    <div className="flex  flex-wrap gap-6 ">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-xl  w-full max-w-[450px] overflow-hidden  shadow-md"
        >
          <Image
            src={card.image}
            alt="Grade Card"
            width={572}
            height={572}
            className="w-full max-h-56 object-cover"
          />
          <div className="p-4 flex text-center flex-col flex-grow">
            <h3 className="text-[1.3rem] text-center mb-2 font-medium">
              {card.title}
            </h3>
            <p className="text-[#2E2E2E] text-center mx-auto  max-w-[39ch] text-sm tracking-wide leading-6">
              {card.description}
            </p>
            <Link href={"/b2c-phase-3/grade-and-content"} className="w-full mt-4">
            <button className="bg-[#3366ff] rounded-full w-full px-3 py-2   text-white">
              {card.buttonLabel}
            </button></Link>
          </div>
        </div>
      ))}
    </div>

  );
}
