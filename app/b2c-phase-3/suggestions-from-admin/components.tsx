// components.tsx
"use client";

import React from "react";
import Image from "next/image";
import {
  FiArrowLeft,
  FiChevronDown,
  FiDownload,
  FiSearch,
} from "react-icons/fi";
import { ChatInput } from "./ui-component"; // Import ChatInput
import SearchFilter from "@/components/b2c-admin/common-component/SearchBarFilter";
import { FiFileText } from "react-icons/fi";
import ChatInterface from "./messages";
// --- Data Interfaces (from your original) ---
export interface TeacherContact {
  id: string;
  name: string;
  date: string;
  avatarSrc: string;
  lastMessageTime?: string;
  // isActive prop will be passed by parent, not part of core data typically
}
export interface ChatMessageData {
  fileUrl: React.JSX.Element;
  id: string;
  sender: "user" | "admin";
  text?: string;
  imageUrl?: string;
  imageName?: string;
  timestamp: string;
}

// --- Component 1: TeacherListItem ---
interface TeacherListItemProps {
  teacher: TeacherContact;
  onClick: () => void;
  isActive: boolean;
}
export const TeacherListItem: React.FC<TeacherListItemProps> = ({
  teacher,
  onClick,
  isActive,
}) => (
  // Original: w-full flex items-center p-3 rounded-3xl transition-colors
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-3 rounded-xl transition-colors"
  >
    {/* Left Section */}
    <div className="flex items-center gap-3">
      {/* Icon */}
      <div className="bg-[#8dd9b3] p-2 rounded-full">
        <FiFileText size={16} className="text-black" />
      </div>

      {/* Texts */}
      <div className="flex flex-col text-left">
        <h4 className="text-sm font-semibold text-black">Worksheet Name</h4>
        <p className="text-xs text-[#6b7280]">11th July 2025</p>
      </div>
    </div>

    {/* Time */}
    {teacher.lastMessageTime && (
      <span className="text-[10px] text-[#6b7280] mt-4">
        {teacher.lastMessageTime}
      </span>
    )}
  </button>
);

// --- Component 3: TeacherListSidebar ---
interface TeacherListSidebarProps {
  teachers: TeacherContact[];
  activeTeacherId: string | null;
  onTeacherSelect: (teacherId: string) => void;
}
const filter = [{ id: "t1", label: "Teachers" }];
export const TeacherListSidebar: React.FC<TeacherListSidebarProps> = ({
  teachers,
  activeTeacherId,
  onTeacherSelect,
}) => (
  <div className="w-full lg:w-[35%] bg-white    rounded-2xl sm:rounded-3xl  p-3 sm:p-4 self-stretch flex flex-col">
    {/* Original h2: text-lg tracking-wide font-popp font-semibold text-[#FF3366] mb-4 px-2 */}
    <h2 className="text-md tracking-wide font-semibold text-[#FF3366] mb-3 px-1 sm:text-lg sm:mb-4 sm:px-2">
      {" "}
      {/* Assuming font-popp is global */}
      Worksheet List
    </h2>{" "}
    <div>
      <div className="w-full bg-white text-black flex gap-4 items-center py-2  rounded-xl">
        {/* Search Input */}
        <SearchFilter bg={"bg-white"} filters={filter} />
      </div>
      {/* Original div: space-y-1 max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar pr-2 */}
      <div className="flex-grow space-y-0.5 sm:space-y-1 max-h-[calc(100vh-10rem)] sm:max-h-[calc(100vh-12rem)] overflow-y-auto custom-scrollbar-thin-grey  pr-1 sm:pr-2">
        {/* Your original repetition for scroll testing */}
        {[
          ...teachers,
          ...teachers,
          ...teachers,
          ...teachers,
          ...teachers,
          ...teachers,
          ...teachers,
          ...teachers,
          ...teachers,
          ...teachers,
          ...teachers,
          ...teachers,
        ].map((teacher, indx) => (
          <TeacherListItem
            key={`${teacher.id}-${indx}`} // Ensure unique key with repeated data
            teacher={teacher}
            isActive={activeTeacherId === teacher.id && indx < teachers.length} // Only highlight first set if ids are repeated
            onClick={() => onTeacherSelect(teacher.id)}
          />
        ))}
      </div>{" "}
    </div>
  </div>
);

// --- Component 4: ChatArea ---
interface ChatAreaProps {
  selectedTeacher: TeacherContact | undefined;
  messages: ChatMessageData[];
  newMessage: string;
  onNewMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: (e: React.FormEvent) => void;
  onBackClick?: () => void;
}
export const ChatArea: React.FC<ChatAreaProps> = ({
  selectedTeacher,
  messages,
  newMessage,
  onNewMessageChange,
  onSendMessage,
  onBackClick,
}) => (
  // Original wrapper: w-full sm:w-[70%] bg-white rounded-3xl shadow-xl flex flex-col h-[calc(100vh-4rem)]
  <div
    className="w-full relative z-0 lg:w-[65%] bg-[#EEEEEE] rounded-2xl sm:rounded-3xl flex flex-col 
                   h-[calc(80vh)] sm:h-[calc(100vh-10rem)] lg:h-[calc(100vh-4rem)]"
  >
    <div
      className=" absolute -z-10 opacity-10 rounded-2xl inset-0"
      style={{
        backgroundImage: "url('/images/brandpatternchat.png')",
        backgroundRepeat: "none",
        backgroundSize: "cover",
        filter: "grayscale(100%)",
      }}
    ></div>
    {/* Responsive height: 80vh for mobile, then your calculation for sm+ */}
    {selectedTeacher ? (
      <>
        {/* Original header: p-4 flex items-center gap-3 shrink-0 */}
        <div className="p-3 mt-4 justify-between z-20 relative flex items-center gap-2 rounded-full bg-white  sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-[#8dd9b3] p-3 rounded-full">
              <FiFileText size={18} className="text-black" />
            </div>
            <h3 className="text-md font-semibold text-black sm:text-lg">
              Worksheet Name
            </h3>
          </div>
          {onBackClick && (
            <div className="p-3 border-b flex items-center bg-white z-30 lg:hidden">
              <button
                onClick={onBackClick}
                className="text-blue-600 font-medium flex items-center gap-2"
              >
                <FiArrowLeft size={20} />
              </button>
            </div>
          )}
        </div>
        {/* Original messages: flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar */}
        <div className="flex-grow p-3 mt-4 space-y-3 overflow-y-auto no-scrollbar  sm:p-4 sm:space-y-4">
          <ChatInterface />
          <div />
        </div>
        {/* Original input: p-4 shrink-0 */}
        <div className="bg-white rounded-full p-2 mb-4">
          <div className="  border-t border-gray-100">
            <ChatInput
              value={newMessage}
              onChange={onNewMessageChange}
              onSend={onSendMessage}
            />
          </div>
        </div>
      </>
    ) : (
      <div className="flex-grow flex items-center justify-center text-gray-400 p-4 text-sm text-center">
        Select a teacher to start chatting.
      </div>
    )}
  </div>
);
