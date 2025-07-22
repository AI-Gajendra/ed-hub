"use client";

import StudentWrapper from "@/components/student-wrapper";
import { Star } from "lucide-react";
import { educatorsData } from "../../educator/page";
import { useRouter } from "next/navigation";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

export default function SelectTeacher() {
  const router = useRouter();
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (index === 0) {
      router.push("/b2c-student/student-flow/teacher-profile");
      return;
    }

    setActiveIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  return (
    <StudentWrapper>
      {/* Background */}
      <div
        className="fixed inset-0 bg-center bg-repeat z-0"
        style={{
          backgroundImage: "url('/background5.png')",
          backgroundSize: "900px",
          filter: " brightness(1.1) blur(0.3px)",
          opacity: 0.6,
        }}
      ></div>
      <div className="bg-black fixed inset-0 bg-center bg-repeat z-1 opacity-40" />

      <div className="relative z-10 px-2 py-4 md:p-6 lg:p-10">
        <div className=" mx-auto rounded-3xl bg-white p-4 md:p-6 lg:p-10 space-y-7">
          <h1 className="text-center text-5xl font-bold text-[#FFCC00]">
            Pick Your Preferred Teacher
          </h1>
          <p className="text-center text-2xl font-medium text-[#6B7280]">
            Select the teacher best suited to guide you through the course.
          </p>
          <h2 className="text-2xl font-medium text-[#FF3366]">Course Name</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...educatorsData, ...educatorsData].map((educator, index) => {
              const isActive = activeIndexes.includes(index);

              return (
                <div
                  key={index}
                  className={`rounded-3xl border border-[#E5E7EB] p-4 space-y-2 cursor-pointer ${index === 0
                      ? "bg-[#F9FAFB]" // First div default
                      : isActive
                        ? "bg-[#3366ff] text-white"
                        : "bg-[#F9FAFB]"
                    }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="w-full flex justify-center items-center">
                    <div className="rounded-full w-32 h-32 overflow-hidden flex justify-center items-center">
                      <img
                        src={educator.imageUrl}
                        alt="teacher profile"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <h4
                    className={`text-2xl font-medium overflow-hidden whitespace-nowrap text-ellipsis ${isActive ? "text-white" : "text-black"
                      }`}
                  >
                    {educator.name}
                  </h4>

                  <div>
                    <h5
                      className={`text-lg overflow-hidden whitespace-nowrap text-ellipsis ${isActive ? "text-[#FFCC00]" : "text-[#FF3366]"
                        }`}
                    >
                      {educator.category}
                    </h5>
                    <p
                      className={`text-lg line-clamp-2 ${isActive ? "text-white" : "text-[#6B7280]"
                        }`}
                    >
                      {educator.description}
                    </p>
                    <p
                      className={`text-lg line-clamp-2 ${isActive ? "text-white" : "text-[#6B7280]"
                        }`}
                    >
                      {educator.title}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    {new Array(Math.floor(educator.rating)).fill(0).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FFCC00] stroke-[#FFCC00]"
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <Footer /> */}
      </div>

      <Footer />
    </StudentWrapper>
  );
}
