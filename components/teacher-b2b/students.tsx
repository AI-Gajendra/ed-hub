"use client";

import React, { useState, useMemo } from "react";
import {
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiMinusCircle, // For the remove icon
  FiRepeat,     // For the sort/transfer icon (can be FiShuffle or FiArrowRightLeft)
  FiArrowLeft   // Assuming a back arrow might be part of the header or global nav
} from "react-icons/fi";
import Header from "@/components/layout/Header"; // Adjust path as needed
import Footer from "@/components/layout/Footer"; // Adjust path as needed

// --- Style Constants ---
const ACCENT_PINK = "#FF3366"; // For active Class/Batch/Group tabs and remove icon
const PRIMARY_BLUE = "#3366FF"; // Placeholder if needed for other active states
const INPUT_BG_SEARCH = "bg-white";
const INPUT_BG_FILTERS = "bg-gray-50"; // Background for filter dropdowns
const STUDENT_ITEM_BG = "bg-white";
const ICON_BUTTON_BG_LIGHT_PINK = "bg-pink-100";
const ICON_BUTTON_TEXT_PINK = `text-[${ACCENT_PINK}]`;
const ICON_BUTTON_BG_LIGHT_GRAY = "bg-gray-100";
const ICON_BUTTON_TEXT_GRAY = "text-gray-600";

// --- Data Interfaces ---
interface ClassBatchGroupTab {
  id: string;
  name: string; // e.g., "Class 10A / Batch X / Alpha Group"
}

interface StudentListItem {
  id: string;
  name: string;
  avatarUrl: string;
  classBatchGroupId: string; // Link to ClassBatchGroupTab
}

interface GeneralFilterOption {
  id: string;
  label: string;
}

// --- Sample Data ---
const AVATAR_PLACEHOLDER = "https://picsum.photos/seed/studentlist/40/40?grayscale";

const sampleClassBatchGroupTabs: ClassBatchGroupTab[] = [
  { id: 'cbg1', name: 'Class A / Batch 1 / Group Alpha' },
  { id: 'cbg2', name: 'Class A / Batch 1 / Group Beta' },
  { id: 'cbg3', name: 'Class B / Batch 2 / Group Gamma' },
  { id: 'cbg4', name: 'Class C / Batch 3 / Group Delta' },
  { id: 'cbg5', name: 'Class D / Batch 4 / Group Epsilon' },
];

const sampleStudents: StudentListItem[] = Array.from({ length: 9 }, (_, i) => ({
  id: `s${i + 1}`,
  name: 'Student Name', // Repeated name as per image
  avatarUrl: AVATAR_PLACEHOLDER,
  classBatchGroupId: sampleClassBatchGroupTabs[0].id, // Default to first tab for all initially
}));
// To test filtering, you can assign different classBatchGroupId to some students
sampleStudents[3].classBatchGroupId = sampleClassBatchGroupTabs[1].id;
sampleStudents[6].classBatchGroupId = sampleClassBatchGroupTabs[2].id;


const sampleGeneralFilters: GeneralFilterOption[] = [
    { id: 'filter1', label: 'Filter 1' },
    { id: 'filter2', label: 'Filter 2' },
    { id: 'filter3', label: 'Filter 3' },
];


// --- Helper Components ---

const ClassBatchGroupTabButton: React.FC<{ tab: ClassBatchGroupTab; isActive: boolean; onClick: () => void; }> = ({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap
      ${isActive
        ? `bg-[${ACCENT_PINK}] text-white shadow-md`
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
  >
    {tab.name}
  </button>
);

const StudentItemRow: React.FC<{ student: StudentListItem; onRemove: () => void; onTransfer: () => void; }> = ({ student, onRemove, onTransfer }) => (
  <div className={`${STUDENT_ITEM_BG} border border-gray-200 rounded-xl p-3 sm:p-3.5 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between gap-3`}>
    <div className="flex items-center gap-3 min-w-0">
      <img src={student.avatarUrl} alt={student.name} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover flex-shrink-0" />
      <span className="text-sm text-gray-800 font-medium truncate">{student.name}</span>
    </div>
    <div className="flex items-center space-x-2 flex-shrink-0">
      <button onClick={onRemove} className={`p-1.5 sm:p-2 rounded-full ${ICON_BUTTON_BG_LIGHT_PINK} hover:bg-pink-200`} aria-label="Remove student">
        <FiMinusCircle className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${ICON_BUTTON_TEXT_PINK}`} />
      </button>
      <button onClick={onTransfer} className={`p-1.5 sm:p-2 rounded-full ${ICON_BUTTON_BG_LIGHT_GRAY} hover:bg-gray-200`} aria-label="Transfer student">
        <FiRepeat className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${ICON_BUTTON_TEXT_GRAY}`} />
      </button>
    </div>
  </div>
);

const GeneralFilterButton: React.FC<{ filter: GeneralFilterOption; onClick: () => void; }> = ({ filter, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 border border-gray-300 ${INPUT_BG_FILTERS} text-gray-700 font-medium rounded-lg text-xs sm:text-sm whitespace-nowrap shadow-sm hover:bg-gray-100 flex-shrink-0 transition-colors`}
    >
        <span>{filter.label}</span>
        <FiChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
    </button>
);


// --- StudentListViewContent Component ---
const StudentListViewContent: React.FC = () => {
  const [activeClassBatchGroupId, setActiveClassBatchGroupId] = useState<string>(sampleClassBatchGroupTabs[0]?.id || '');
  const [searchTerm, setSearchTerm] = useState('');
  // Add states for general filters if their logic becomes more complex
  // const [activeGeneralFilters, setActiveGeneralFilters] = useState({});

  const [studentsList, setStudentsList] = useState<StudentListItem[]>(sampleStudents); // Manage students for removal

  const filteredStudentsByTab = useMemo(() => {
    return studentsList.filter(student => student.classBatchGroupId === activeClassBatchGroupId);
  }, [activeClassBatchGroupId, studentsList]);

  const searchedAndFilteredStudents = useMemo(() => {
    let students = filteredStudentsByTab;
    if (searchTerm) {
      students = students.filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    // Add logic for general filters here
    return students;
  }, [filteredStudentsByTab, searchTerm /*, activeGeneralFilters */]);

  const handleRemoveStudent = (studentId: string) => {
    setStudentsList(prev => prev.filter(s => s.id !== studentId));
    alert(`Student ${studentId} removed (locally). Implement backend removal.`);
  };

  const handleTransferStudent = (studentId: string) => {
    alert(`Transfer/Sort action for student ${studentId}. Implement logic.`);
  };


  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 space-y-5 sm:space-y-6">
      {/* Top Section: Class/Batch/Group Tabs */}
      <div className="pb-3 border-b border-gray-200">
        <nav className="flex space-x-1.5 sm:space-x-2 overflow-x-auto custom-scrollbar-thin pb-1">
          {sampleClassBatchGroupTabs.map(tab => (
            <ClassBatchGroupTabButton
              key={tab.id}
              tab={tab}
              isActive={activeClassBatchGroupId === tab.id}
              onClick={() => setActiveClassBatchGroupId(tab.id)}
            />
          ))}
        </nav>
      </div>

      {/* Mid Section: Search and General Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div className="relative flex-grow sm:max-w-md md:max-w-lg">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm ${INPUT_BG_SEARCH} border border-gray-300 rounded-xl focus:ring-1 focus:ring-[${PRIMARY_BLUE}] focus:border-[${PRIMARY_BLUE}] outline-none shadow-sm`}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => alert('Main filter icon clicked.')}
            className={`p-2.5 sm:p-3 border border-gray-300 ${INPUT_BG_FILTERS} rounded-lg shadow-sm hover:bg-gray-100 text-[${ACCENT_PINK}] flex-shrink-0 transition-colors`}
            aria-label="Open main filters"
          >
            <FiFilter className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          {sampleGeneralFilters.map(filter => (
            <GeneralFilterButton 
                key={filter.id} 
                filter={filter} 
                onClick={() => alert(`${filter.label} clicked.`)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Section: Student List */}
      {searchedAndFilteredStudents.length > 0 ? (
        <div className="space-y-2.5 sm:space-y-3 max-h-[calc(100vh-350px)] overflow-y-auto pr-1 custom-scrollbar"> {/* Adjust max-h */}
          {searchedAndFilteredStudents.map(student => (
            <StudentItemRow 
                key={student.id} 
                student={student} 
                onRemove={() => handleRemoveStudent(student.id)}
                onTransfer={() => handleTransferStudent(student.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          <FiSearch className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl font-semibold mb-2">No Students Found</h3>
          <p className="text-sm">Try adjusting your search or filter criteria, or select a different Class/Batch/Group.</p>
        </div>
      )}
    </div>
  );
};


// --- Main Page Export ---
export default function StudentListPageByGroup() { // Renamed for clarity
  const headerUser = { name: "Educator Name", role: "Teacher", avatarSrc: "/placeholder-avatar-teacher.jpg" };
  // This page design does not show a separate title bar or back button below the main header.
  // The Class/Batch/Group tabs define the context.

  return (
    <div className="bg-[#eeeeee] min-h-screen flex flex-col">
      <Header user={headerUser} />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <StudentListViewContent />
      </main>
      <Footer />
    </div>
  );
}