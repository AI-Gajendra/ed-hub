'use client';

import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

// Define the shape of a single qualification
interface Qualification {
  id: number; // Unique ID for mapping
  school: string;
  degree: string;
  startYear: string;
  endYear: string;
}

// Define the props for the popup component
interface AddQualificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (qualifications: Qualification[]) => void;
}

const AddQualificationModal: React.FC<AddQualificationPopupProps> = ({
  isOpen,
  onClose,
  onContinue,
}) => {
  // State to hold the list of qualifications, starts with one empty entry
  const [qualifications, setQualifications] = useState<Qualification[]>([
    { id: Date.now(), school: '', degree: '', startYear: '', endYear: '' },
  ]);

  // Handler to update a specific input field for a specific qualification
  const handleInputChange = (
    index: number,
    field: keyof Omit<Qualification, 'id'>,
    value: string
  ) => {
    const newQualifications = [...qualifications];
    newQualifications[index] = { ...newQualifications[index], [field]: value };
    setQualifications(newQualifications);
  };

  // Handler to add a new, empty qualification form
  const handleAddQualification = () => {
    setQualifications([
      ...qualifications,
      { id: Date.now(), school: '', degree: '', startYear: '', endYear: '' },
    ]);
  };

  // Handler for the main continue button
  const handleContinue = () => {
    // You could add validation here before continuing
    onContinue(qualifications);
    onClose();
  };

  if (!isOpen) {
    return null;
  }
  
  // A reusable component for each form input
  const FormInput = ({ label, placeholder, value, onChange }: any) => (
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">{label}</label>
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 bg-[#f9fafb] border border-[#d5d5d5] rounded-full focus:outline-none focus:bg-white"
        />
      </div>
  );


  return (
    // Backdrop
    <div className="fixed h-screen inset-0 bg-transparent backdrop-blur flex items-center justify-center z-50 p-4 font-sans">
      {/* Popup Content */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] no-scrollbar overflow-y-auto flex flex-col">
        <h1 className="text-lg font-semibold mb-6 text-gray-800">Education</h1>

        {/* Scrollable Form Area */}
        <div className="flex-grow pr-2 -mr-2 space-y-8 ">
          {qualifications.map((qual, index) => (
            <div key={qual.id} className="space-y-4 border-b border-gray-200 pb-8 last:border-b-0">
               <FormInput label="School / University Name" placeholder="Name" value={qual.school} onChange={(e: any) => handleInputChange(index, 'school', e.target.value)} />
               <FormInput label="Degree" placeholder="Degree" value={qual.degree} onChange={(e: any) => handleInputChange(index, 'degree', e.target.value)} />
               <FormInput label="Start Year" placeholder="DD/MM/YY" value={qual.startYear} onChange={(e: any) => handleInputChange(index, 'startYear', e.target.value)} />
               <FormInput label="End Year" placeholder="DD/MM/YY" value={qual.endYear} onChange={(e: any) => handleInputChange(index, 'endYear', e.target.value)} />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 space-y-4">
          <button
            onClick={handleAddQualification}
            className="w-full py-3 text-gray-500 bg-[#f9fafb] border border-[#e5e7eb] rounded-full font-semibold flex items-center justify-center gap-2"
          >
            <FiPlus />
            Add Qualification
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


// Example of how to use the popup in a parent component
export default AddQualificationModal