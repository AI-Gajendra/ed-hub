"use client";

import Image from "next/image";
import Link from "next/link";
import { FiHelpCircle, FiTarget, FiClock } from "react-icons/fi";

// Helper component for the info badges
const InfoBadge = ({
  icon: Icon,
  text,
  bgColor,
  textColor,
}: {
  icon: React.ElementType;
  text: string;
  bgColor: string;
  textColor: string;
}) => (
  <div
    className={`flex items-center gap-2 px-4 py-2  rounded-full ${bgColor} ${textColor}`}
  >
    <Icon className="w-4 h-4" />
    <span className="text-md font-medium ">{text}</span>
  </div>
);

export default function TestStartPage() {
  const dmitTestInfo = {
    title: "Information before starting DMIT Test",
    content: `
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    `,
    buttonText: "Start",
  };

  // Split the content by double line breaks or sentences
  const paragraphs = dmitTestInfo.content.trim().split("\n").filter(Boolean);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: "url('/Skill_Assessment_Page.png')",
        backgroundSize: "cover",
        backgroundColor: "#2563EB",
      }}
    >
      <div className="overflow-hidden bg-white rounded-3xl  justify-center  min-h-screen flex flex-col items-center gap-4 md:flex-row w-full max-w-6xl ">
        <div  className="w-full">
          <div className="flex flex-col text-center  justify-center items-center p-6">
            <h2 className="text-2xl font-bold mb-4">{dmitTestInfo.title}</h2>
            <p className="font-normal max-w-[84ch]  my-4 text-md">{dmitTestInfo.content}</p>
            <Link  href=
            {"/b2c-phase-3/assessment-page"}>
            <button className="mt-6 px-6 md:px-16 py-2 text-sm md:text-md bg-[#3366ff] text-white rounded-full hover:bg-blue-700">
              {dmitTestInfo.buttonText}
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
