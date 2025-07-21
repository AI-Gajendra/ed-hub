"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TabSwitch from "@/components/common-components/TabSwitch";
import { FiSearch, FiChevronDown } from "react-icons/fi";
// Assuming this component exists as per your template
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ConfirmUnlockPopup from "../pop-ups/component/teacher-unlock-confirm";

// --- Data Interfaces ---
interface RequestItem {
  coursevalidity: string;
  noofsession: string;
  id: string;
  studentName: string;
  avatarSrc: string;
  courseName: string;
  batch: string;
  emailId: string;
  assignedFaculty: string;
  reason: string;
  price:string;
}



const reschedulingRequests: RequestItem[] = Array.from(
  { length: 16 },
  (_, i) => ({
    id: `resched-${i}`,
    studentName: "Student Name",
    avatarSrc: "/admin/student.png",
    courseName: "Course Name",
    batch: "Batch",
    emailId: "Email ID",
    assignedFaculty: "Quater X",
    noofsession: "No. of Session :",
    coursevalidity: "Course Validity :",
    price:"₹00,000",
   
    reason:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam sagittis, tellus laoreet semper vehicula, orci eros facilisis purus, at viverra ex lectus nec orci.",
    type: "rescheduling",
  })
);

// --- Helper UI Components ---

// --- Component 2: StyledSelect (wrapper for Shadcn Select) ---
interface StyledSelectProps {
  defaultValue?: string;
  placeholder: string;
  items: { value: string; label: string }[];
}
export const StyledSelect: React.FC<StyledSelectProps> = ({
  defaultValue,
  placeholder,
  items,
}) => (
  <Select defaultValue={defaultValue}>
    <SelectTrigger className="w-full rounded-xl sm:py-5 bg-[#F9FAFB] text-sm sm:text-base text-black border border-[#E5E7EB]">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {items.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
const FilterDropdown: React.FC<{ label: string }> = ({ label }) => (
  <StyledSelect
    defaultValue="all"
    placeholder={label}
    items={[
      { value: "all", label },
      { value: "batch1", label: "Option 1" },
      { value: "batch2", label: "Option 2" },
    ]}
  />
);

const RequestCard: React.FC<{
  request: RequestItem;
  setOpenModal: React.Dispatch<React.SetStateAction<string | null>>
  reference: React.RefObject<HTMLDivElement | null>;
 
}> = ({ request, reference, setOpenModal }) => (
  <div
    ref={reference}
    className="bg-[#F9FAFB] rounded-2xl relative border border-[#B0B0B0] p-3 flex flex-col gap-3 transition-shadow duration-150 hover:shadow-lg"
  >
    {/* Student Info Section */}
    <div className="flex items-center gap-3 sm:gap-4">
      <Image
        src={request.avatarSrc}
        alt={request.studentName}
        width={129}
        height={129}
        className="w-14 h-14 sm:w-[87px] sm:h-[87px] rounded-2xl object-cover flex-shrink-0"
      />
      <h2 className="top-4 right-4 font-semibold text-sm  sm:text-md md:text-2xl absolute text-[#3366ff]">{request.price}</h2>
      <div className="flex-grow min-w-0">
        <h3 className="text-md sm:text-lg font-bold text-black truncate">
          {request.courseName}
        </h3>
        <p className="text-sm font-semibold text-[#FF3366] my-2 truncate">
          {request.studentName}
        </p>
        <div className="flex flex-col text-xs  space-y-2 text-[#6B7280] mt-1">
          <span>{request.batch}</span>
          <span>{request.emailId}</span>
        </div>
      </div>
    </div>

    {/* Details Section */}
    <div className="text-xs text-black space-y-1">
      <p className=" text-black">{request.assignedFaculty}</p>
      <p className=" text-black">{request.noofsession}</p>
      <p className=" text-black">{request.coursevalidity}</p>
     
     
    </div>

    {/* Reason Section */}
    <div className="bg-[#F3F4F6] rounded-2xl text-center p-2 ">
      <h4 className="text-base font-semibold text-black mb-1.5">
        Reason for{" "}
       
      </h4>
      <p className="text-xs text-black leading-relaxed">{request.reason}</p>
    </div>

    {/* Action Buttons */}
    <div className="flex justify-center items-center gap-3">
      <button
          onClick={() => setOpenModal("confirm unlock")}
        className="w-28 py-2 text-sm  text-[#FF3366] bg-[#FF33661A] rounded-full hover:bg-red-200 transition-colors cursor-pointer"
      >
        Reject
      </button>
      <button
        onClick={() => setOpenModal("confirm unlock")}
        
        className="w-28 py-2 text-sm   text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
      >
        Approve
      </button>
    </div>
  </div>
);

// --- Main Page Component ---
export default function RequestManagementPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);
 

  
    

  const [minHeight, setMinHeight] = useState<number>(100);
  const heightRef = useRef<HTMLDivElement | null>(null);
  const tabs = ["Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  useEffect(() => {
    if (heightRef.current) {
      setMinHeight(heightRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (heightRef.current) {
        setMinHeight(heightRef.current.offsetHeight);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });

    if (heightRef.current) {
      observer.observe(heightRef.current);
    }

    return () => {
      if (heightRef.current) {
        observer.unobserve(heightRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    // Using your provided page template structure
    <div className={` flex flex-col relative`}>
      <ConfirmUnlockPopup
      isOpen={openModal === "confirm unlock"}
        onClose={() => setOpenModal(null)}/>
      {/* This is your template component */}
      <div className="p-4 sm:p-6 lg:p-8">
        <main className="bg-white  rounded-2xl flex-grow w-full max-w-[95rem] mx-auto p-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
            <div className="relative w-full sm:flex-grow mx-3">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border-2 border-[#6B7280] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:items-center gap-2 flex-shrink-0">
              <FilterDropdown label="Filter 1" />
              <FilterDropdown label="Filter 2" />
              <FilterDropdown label="Filter 3" />
              <FilterDropdown label="Filter 4" />
            </div>
          </div>
          {/* Top Tabs */}
          <TabSwitch
            tabs={tabs}
            selected={selectedTab}
            onChange={setSelectedTab}
          />
          {/* Filter Bar */}
          

          {/* Requests Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 custom-peach-scrollbar overflow-y-auto pr-3 pb-2"
            style={{
              height: `${minHeight}px`,
            }}
          >
            {reschedulingRequests.map((request: RequestItem) => (
              <RequestCard
                key={request.id}
                request={request}
                reference={heightRef}
                setOpenModal ={setOpenModal}
              />
            ))}
          </div>
        </main>
      </div>
      {/* {isPopupOpen ? <ReschedulePopup onCancel={togglePopup} onConfirm={togglePopup} /> : <div />} */}
    </div>
  );
}

// interface RescheduleProps {
//     onCancel: () => void;
//     onConfirm: () => void;
// }

// const ReschedulePopup: React.FC<RescheduleProps> = ({ onCancel, onConfirm }) => {
//     return (
//         <div className="fixed inset-0 flex items-center justify-center z-30">
//             <div className=' bg-black opacity-50 absolute h-full w-full z-10' />
//             <div className="relative z-50 bg-white rounded-3xl p-6 w-[90%] max-w-lg text-center shadow-lg">
//                 <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
//                 <p className="text-black font-normal text-sm leading-relaxed">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
//                     lacinia ante, nec accumsan enim. Vestibulum lacinia fermentum
//                     pretium. Nunc elementum ligula nec erat bibendum vulputate. Etiam
//                     sagittis, tellus laoreet semper vehicula, orci eros facilisis purus,
//                     at viverra ex lectus nec orci.
//                 </p>

//                 <div className="mt-4 flex justify-center gap-4">
//                     <button
//                         onClick={onCancel}
//                         className="bg-[#6B72801A] text-[#6B7280] font-medium px-4 py-3 rounded-full hover:bg-gray-200 transition cursor-pointer"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={onConfirm}
//                         className="bg-[#3366FF] text-white font-medium px-4 py-3 rounded-full hover:bg-blue-700 transition cursor-pointer"
//                     >
//                         Confirm
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
