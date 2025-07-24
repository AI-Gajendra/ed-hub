"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const academicSubmenus = [
  {
    label: "Subjects",
    children: ["Math", "Science", "English", "History", "Geography", "Computer"],
  },
  {
    label: "Boards",
    children: ["CBSE", "ICSE", "IB", "State", "Cambridge", "Other"],
  },
  {
    label: "Homework",
    children: [],
  },
];

const CategoryTabs: React.FC = () => {
  const [selected, setSelected] = useState("Notsoextra Curricular");
  const [academicOpen, setAcademicOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const handleMainClick = (category: string) => {
    if (category === "Academic") {
      setAcademicOpen((prev) => !prev);
      setActiveSubmenu(null);
    } else {
      setSelected(category);
      setAcademicOpen(false);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (label: string) => {
    setActiveSubmenu((prev) => (prev === label ? null : label));
  };

  const isAcademicSelected = selected === "Academic";

  return (
    <div className="relative">
      <div className="flex overflow-x-auto justify-start lg:justify-center gap-4 md:gap-12 px-4 py-6 bg-white rounded-xl whitespace-nowrap">
        {categories.map((category) => {
          const isActive = selected === category;
          const isAcademic = category === "Academic";

          return (
            <div key={category} className="relative">
              <button
                onClick={() => handleMainClick(category)}
                className="relative flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full focus:outline-none transition"
              >
                {(isActive || (isAcademic && academicOpen)) && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-[#ff3366] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive || (isAcademic && (academicOpen || activeSubmenu)) ? "text-white" : "text-gray-500"
                  }`}
                >
                  {isAcademic && (activeSubmenu ? activeSubmenu : "Academic")}
                  {!isAcademic && category}
                </span>
                {isAcademic && (
                  <FiChevronDown
                    className={`relative z-10 w-4 h-4 transition ${
                      isAcademicSelected || academicOpen ? "text-white" : "text-gray-500"
                    }`}
                  />
                )}
              </button>

              {/* Academic Dropdown */}
              {isAcademic && academicOpen && !activeSubmenu && (
                <div className="absolute top-12 left-0 bg-[#ff3366] text-white rounded-xl py-3 px-4 w-48 z-10 space-y-2">
                  {academicSubmenus.map((submenu) => (
                    <div
                      key={submenu.label}
                      onClick={() => handleSubmenuClick(submenu.label)}
                      className="flex justify-between items-center cursor-pointer hover:opacity-90"
                    >
                      <span>{submenu.label}</span>
                      {submenu.children.length > 0 && <FiChevronDown className="w-4 h-4" />}
                    </div>
                  ))}
                </div>
              )}

              {/* Submenu Children Dropdown */}
              {activeSubmenu && (
                <div className="absolute top-12 left-0 bg-[#ff3366] text-white rounded-xl py-3 px-4 w-48 z-10 space-y-2">
                  <div
                    onClick={() => setActiveSubmenu(null)}
                    className="cursor-pointer text-sm text-white hover:underline"
                  >
                    ← Back
                  </div>
                  {academicSubmenus
                    .find((menu) => menu.label === activeSubmenu)
                    ?.children.map((item) => (
                      <div key={item} className="text-sm">
                        {item}
                      </div>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
