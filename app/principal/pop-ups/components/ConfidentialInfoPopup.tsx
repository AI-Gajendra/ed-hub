'use client';

import React, { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';

// Define the shape of the settings state
interface Settings {
  showGender: boolean;
  showDob: boolean;
  showEmail: boolean;
  showContact: boolean;
  showState: boolean;
}

// Define the props for the component
interface ConfidentialInfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: Settings) => void;
}

const ConfidentialInfoPopup: React.FC<ConfidentialInfoPopupProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  // State to manage the settings, initialized with props
  const [settings, setSettings] = useState<Settings>({
    showGender: true,
    showDob: true,
    showEmail: true,
    showContact: true,
    showState: true,
  });


  // Handler to toggle a specific setting
  const handleToggle = (key: keyof Settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Handler for the save button
  const handleSave = () => {
    onSave(settings);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  // Helper component for each setting row
  const SettingRow = ({ label, settingKey }: { label: string; settingKey: keyof Settings }) => (
    <div
      onClick={() => handleToggle(settingKey)}
      className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50"
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors ${
          settings[settingKey] ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        {settings[settingKey] && <FiCheck className="text-white w-4 h-4" />}
      </div>
      <span className="text-gray-800 font-medium">{label}</span>
    </div>
  );

  return (
    // Backdrop
    <div className="fixed inset-0 bg-transparent backdrop-blur flex items-center justify-center z-50 p-4 font-sans">
      {/* Popup Content */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm relative transform transition-all">
        <h1 className="text-lg font-bold mb-8 text-center text-gray-900">
          Confidential Information Setting
        </h1>

        <div className="space-y-1 mb-4">
          <SettingRow label="Show Gender" settingKey="showGender" />
          <SettingRow label="Show D.O.B." settingKey="showDob" />
          <SettingRow label="Show Email" settingKey="showEmail" />
          <SettingRow label="Show Contact" settingKey="showContact" />
          <SettingRow label="Show State" settingKey="showState" />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="w-full py-3 text-[#ff3366] bg-[#ff336619] hover:bg-red-200 font-semibold transition-colors rounded-full"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="w-full py-3 text-white bg-[#3366ff] hover:bg-blue-700 font-semibold transition-colors rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};


export default ConfidentialInfoPopup;