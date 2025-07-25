'use client';

import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

// Define the shape of a single experience/achievement
interface Experience {
  id: number; // Unique ID for mapping
  title: string;
  description: string;
}

// Define the props for the popup component
interface AddExperiencePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (experiences: Experience[]) => void;
}

const AddExperienceModal: React.FC<AddExperiencePopupProps> = ({
  isOpen,
  onClose,
  onContinue,
}) => {
  // State to hold the list of experiences
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: Date.now(), title: '', description: '' },
  ]);

  // Handler to update a specific input field
  const handleInputChange = (
    index: number,
    field: keyof Omit<Experience, 'id'>,
    value: string
  ) => {
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    setExperiences(newExperiences);
  };

  // Handler to add a new, empty form
  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      { id: Date.now(), title: '', description: '' },
    ]);
  };

  // Handler for the main continue button
  const handleContinue = () => {
    onContinue(experiences);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  // Reusable components for form inputs
  const TitleInput = ({ value, onChange }: any) => (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-[#f9fafb] border border-[#d5d5d5] rounded-full focus:outline-none focus:bg-white"
      />
    </div>
  );
  
  const DescriptionInput = ({ value, onChange }: any) => (
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">Description</label>
        <textarea
            value={value}
            onChange={onChange}
            rows={2}
            className="w-full px-4 py-2 bg-[#f9fafb] border border-[#d5d5d5] rounded-xl focus:outline-none focus:bg-white resize-none"
        />
      </div>
  );

  return (
    // Backdrop
    <div className="fixed h-screen inset-0 bg-transparent backdrop-blur flex items-center justify-center z-50 p-4 font-sans">
      {/* Popup Content */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] no-scrollbar overflow-y-auto flex flex-col">
        <h1 className="text-lg font-semibold mb-6 text-gray-800">Achievement / Experience</h1>

        {/* Scrollable Form Area */}
        <div className="flex-grow pr-2 -mr-2 space-y-4 ">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="space-y-2">
              <h2 className="font-semibold text-gray-700">{index + 1}. Title</h2>
              <TitleInput value={exp.title} onChange={(e: any) => handleInputChange(index, 'title', e.target.value)} />
              <DescriptionInput value={exp.description} onChange={(e: any) => handleInputChange(index, 'description', e.target.value)} />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-4">
          <button
            onClick={handleAddExperience}
            className="w-full py-3 text-gray-500 bg-[#f9fafb] border border-[#e5e7eb] rounded-full font-semibold flex items-center justify-center gap-2"
          >
            Add Achievement / Experience
          </button>
          <button
            onClick={handleContinue}
            className="w-full py-3 text-white bg-[#3366ff] hover:bg-blue-700 rounded-full font-semibold transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExperienceModal;
