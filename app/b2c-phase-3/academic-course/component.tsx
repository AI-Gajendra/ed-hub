"use client";

import { Dispatch, SetStateAction, useState } from "react";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";

import Image from "next/image";
import DetailsCousrePopup from "../pop-ups/component/details-for-course";

const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

export default function FoundationCard() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    "Academic Courses" | "Foundation & Skills Courses"
  >("Academic Courses");
  return (
    <div className="bg-[#EEEEEE] h-full min-h-screen">
      <MaxWidthWrapper className="py-10">
        <div>
          <DetailsCousrePopup
            isOpen={openModal === "details course"}
            onClose={() => setOpenModal(null)}
          />
          <h2 className="text-xl mt-14 font-medium">
            Select Board in Foundation courses
          </h2>
          <div className="space-y-8 mt-4">
            <div className="">
              <GradeCard setOpenModal={setOpenModal} />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
type GradeCardProps = {
  setOpenModal: Dispatch<SetStateAction<string | null>>;
};
function GradeCard({ setOpenModal }: GradeCardProps) {
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
      title: "Mathematics Foundation Course",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/rampup.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 2,
      title: "English Foundation Course ",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 3,
      title: `Spoken English & Vocabulary
`,
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 4,
      title: "Creative Writing ",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 5,
      title: "Hindi Course ",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 6,
      title: "Crash Course - Olympiad (IMO, Aryabhatta, Ramanujan) ",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 7,
      title: "Foreign Languages ",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 8,
      title: "Applied Science ",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 9,
      title: "Applied Mathematics",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 10,
      title: "Placeholder ",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 11,
      title: "Placeholder ",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
    {
      id: 12,
      title: "Placeholder",
      description: `Courses offered in this Course Type Name.
Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "/phase-3/grade-card.png",
      buttonLabel: "Select Course Type",
    },
  ];

  return (
    <div className="flex space-y-6  flex-wrap gap-8 ">
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

            <button className="bg-[#3366ff] rounded-full  mt-4 w-full px-3 py-2   text-white"
            onClick={() => setOpenModal("details course")}>
              
              {card.buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
