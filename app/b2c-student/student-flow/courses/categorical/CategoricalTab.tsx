"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const categories = [
  "Academic",
  "Notsoextra Curricular",
  "Foundation",
  "Skill Development",
  "Brain Development",
  "Door Step Tutoring",
  "Skill Club",
];

const CategoryTabs: React.FC = () => {
  const [selected, setSelected] = useState("Notsoextra Curricular");

  return (
    <div className="flex overflow-x-auto justify-start lg:justify-center gap-4 md:gap-12 px-4 py-6 bg-white rounded-xl whitespace-nowrap">
      {categories.map((category) => {
        const isActive = selected === category;
        const isDropdown = category === "Academic";

        return (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className="relative flex items-center gap-1 text-sm font-medium px-2 py-2 rounded-full focus:outline-none transition"
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#ff3366] rounded-full z-0"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-white" : "text-gray-500"}`}>
              {category}
            </span>
            {isDropdown && (
              <FiChevronDown
                className={`relative z-10 w-4 h-4 transition ${
                  isActive ? "text-white" : "text-gray-500"
                }`}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
