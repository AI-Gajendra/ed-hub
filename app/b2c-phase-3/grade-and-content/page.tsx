"use client";

import { useState } from "react";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import Navbar from "@/components/b2c-phase-3/navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

export default function GradeAndContent() {
  const subjects = [
    "Mathematics",
    "English",
    "Science",
    "Social Studies",
    "Hindi",
    "EVS",
    "Gk & IT",
    "Third Language",
  ];
  const router = useRouter();
  return (
    <div className="h-full min-h-screen bg-[#EEEEEE]">
      <Navbar user={user} />
      <MaxWidthWrapper className="relative px-4 py-10 sm:px-10">
        <div>
          <div className="flex items-center justify-between gap-4">
            <ArrowLeft className="h-6 w-6" onClick={() => router.back()} />
            <div className="mb-2 text-xl font-semibold">
              Chooses Pre-Recorded Courses
            </div>
            <div></div>
          </div>
          <div className="mt-4 flex w-full items-center justify-center">
            <Button className="rounded-2xl bg-[#FF3366] px-2 text-white hover:bg-[#ff3366]/80">
              Academic Courses
            </Button>
          </div>
        </div>

        {/* The content Box */}
        <div className="my-8 flex items-center justify-end gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] font-light text-black hover:bg-[#F9FAFB]/90">
                  Filter {index + 1} <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>

        <div>
          <h2 className="text-xl">
            Select Grades and Content according to Subjects
          </h2>

          <div className="mt-4 space-y-8">
            {/* Maths */}
            {subjects.map((sub, indx) => (
              <div className="rounded-2xl bg-white p-4" key={indx}>
                <h3 className="mb-2 text-xl font-semibold">{sub}</h3>
                <div className="mt-2 grid grid-cols-1 items-center justify-between gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <GradeCard />
                  <GradeCard />
                  <div className="sm:col-span-2 lg:col-span-1">
                    <GradeCard />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="my-20">
            <p className="text-lg">
              You have selected X number of grades and content.
            </p>
            <h1 className="text-3xl leading-12 font-bold text-[#3366FF]">
              Total Cost: X,XXX
            </h1>
          </div>
        </div>

        <div className="fixed top-1/2 z-50 flex w-full items-center justify-center">
          <Button className="w-1/2 rounded-full bg-[#3366FF] hover:bg-[#3366FF]">
            Pay Now
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

function GradeCard() {
  const [selected, setSelected] = useState(true);

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-[#F0F0F0]">
      <Image
        src={"/phase-3/grade-card.png"}
        alt="Grade Card"
        width={572}
        height={572}
        className="max-h-52 w-full object-cover"
      />

      <div className="flex flex-col items-center p-4 text-center">
        <h3 className="mb-2 text-center text-[1.3rem] font-medium">
          Grade and Content Name
        </h3>
        <p className="max-w-[39ch] text-center text-sm leading-6 tracking-wide text-[#2E2E2E]">
          Courses offered in this Course Type Name. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry.
        </p>

        {/* Toggle Section */}
        <div className="mt-4 text-center">
          <p className="my-2 text-sm text-[#2E2E2E]">
            {selected ? "Selected" : "Not Selected"}
          </p>

          <div
            className="flex cursor-pointer items-center justify-center gap-3"
            onClick={() => setSelected(!selected)}
          >
            {/* Custom Toggle Switch */}
            <div
              className={`flex h-6 w-14 items-center rounded-full p-1 duration-300 ${
                !selected ? "bg-yellow-600" : "bg-[#EBE9E9]"
              }`}
            >
              <div
                className={`h-5 w-5 transform rounded-full bg-[#3366FF] shadow-md duration-300 ${
                  !selected ? "translate-x-8" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
