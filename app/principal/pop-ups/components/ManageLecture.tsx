'use client';
import React, { useState } from "react";
import { BaseModal } from "../page";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface PopupProp {
    isOpen: boolean;
    onClose: () => void;
    onReassign: () => void;
}

const filter = [
  { id: "f1", label: "1st STD" }
]

const timetableData = [
	// 9:00
	[
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#3366FF1A]', bor: 'border-[#3366FFCC]' },
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#FFC79A1A]', bor: "border-[#FFC79ACC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 10:00
	[null, null, null, null, null],
	// 11:00
	[
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#3366FF1A]', bor: 'border-[#3366FFCC]' },
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#FFCC001A]', bor: "border-[#FFCC00CC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#FF99B71A]', bor: "border-[#FF99B7CC]" },
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 12:00
	[
		null,
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '12:00 PM', bg: 'bg-[#FFC79A1A]', bor: "border-[#FFC79ACC]" },
		null,
	],
	// 13:00
	[
		{ title: 'Title', subtitle: 'Sub title', time: '9:00 AM', bg: 'bg-[#3366FF1A]', bor: 'border-[#3366FFCC]' },
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#FF99B71A]', bor: "border-[#FF99B7CC]" },
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '11:00 AM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 14:00
	[
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '2:00 PM', bg: 'bg-[#FFCC001A]', bor: "border-[#FFCC00CC]" },
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '2:00 PM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 15:00
	[
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-[#FFCC001A]', bor: "border-[#FFCC00CC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-[#FF99B71A]', bor: "border-[#FF99B7CC]" },
		null,
		null,
	],
	// 16:00
	[
		null,
		null,
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '5:00 PM', bg: 'bg-[#FFC79A1A]', bor: "border-[#FFC79ACC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '5:00 PM', bg: 'bg-[#8DD9B31A]', bor: "border-[#8DD9B3CC]" },
	],
	// 17:00
	[
		null,
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-[#FFCC001A]', bor: "border-[#FFCC00CC]" },
		{ title: 'Title', subtitle: 'Sub title', time: '3:00 PM', bg: 'bg-[#FF99B71A]', bor: "border-[#FF99B7CC]" },
		null,
		null,
	],
	// 18:00
	[null, null, null, null, null],
]

const ManageLectureModal: React.FC<PopupProp> = ({ isOpen, onClose, onReassign }) => {
  const router = useRouter()
  const [meeting, setMeeting] = useState(false)
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} maxWidth="max-w-8xl">
      <div className="relative bg-white p-6 rounded-2xl w-full max-h-[95vh] overflow-y-auto custom-scrollbar-thin mr-1">


        {/* Title */}
        <h2 className="text-left font-semibold text-base mb-4">Lecture Manager</h2>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">
          {/* Teacher List Panel */}
          <div className="bg-[#f9fafb] border rounded-2xl lg:min-w-[420px]  p-4">
            {/* Teachers */}
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => {

                return (
                  <label
                    key={i}
                    className={`flex items-center gap-4 py-2 px-3 rounded-2xl border cursor-pointer hover:shadow-sm transition
            `}
                  >
                    <Image
                      src="/common-images/teacher.png"
                      alt="Teacher"
                      width={75}
                      height={75}
                      className="w-20 h-20"
                    />

                    <div className="flex-1">
                      <p className="text-base font-semibold text-black">Name</p>
                      <p className="text-sm text-[#ff3366]">Subject</p>
                      <p className="text-xs text-gray-500">Class Assigned</p>
                      <p className="text-xs text-gray-500">Batch Assigned</p>
                    </div>

                    {/* Custom toggle circle */}
                    <div className="flex flex-col items-center gap-4">
                      <button
                        onClick={() => onReassign()}
                        className="w-full py-3 text-white bg-[#3366ff] text-base hover:bg-blue-700 font-semibold transition-colors rounded-full"
                      >
                        Reschedule
                      </button>
                      <button
                        onClick={() => onClose()}
                        className="w-full p-2 text-[#ff3366] bg-[#ff336619] text-base hover:bg-red-200 font-semibold transition-colors rounded-full"
                      >
                        Cancel Lecture
                      </button>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Timetable Panel */}
          <div className="bg-white rounded-2xl p-4">
            <div className="overflow-x-auto">
              <div className="">
                <h2 className="text-lg font-semibold mb-4">Class Timetable</h2>

                {/* Days Header */}
                <div className="grid grid-cols-[80px_repeat(5,minmax(120px,1fr))] border-b text-sm text-[#6B7280] font-medium">
                  <div></div>
                  <div className="text-center py-2">
                    14
                    <br />
                    Mon
                  </div>
                  <div className="text-center py-2">
                    15
                    <br />
                    Tue
                  </div>
                  <div className="text-center py-2">
                    16
                    <br />
                    Wed
                  </div>
                  <div className="text-center py-2">
                    17
                    <br />
                    Thu
                  </div>
                  <div className="text-center py-2">
                    18
                    <br />
                    Fri
                  </div>
                </div>

                {/* Time Slots */}
                {['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map((time, rowIdx) => (
                  <div key={time} className="grid grid-cols-[80px_repeat(5,minmax(120px,1fr))] border-b text-sm">
                    {/* Time Label */}
                    <div className="text-[#6B7280] py-4 px-4">{time}</div>

                    {/* Time cells */}
                    {[0, 1, 2, 3, 4].map(colIdx => {
                      const slot = timetableData[rowIdx]?.[colIdx]
                      return (
                        <div key={colIdx} className="p-2">
                          {slot ? (
                            <div
                              onClick={() => setMeeting(true)}
                              className={`rounded-xl p-2 text-xs border ${slot.bg} ${slot.bor} flex cursor-pointer justify-between items-start`}>
                              <div className="flex flex-col justify-between items-start">
                                <div className="font-medium">{slot.title}</div>
                                <div className="text-black">{slot.subtitle}</div>
                              </div>
                              <div className="text-right text-[10px] text-black self-start">{slot.time}</div>
                            </div>
                          ) : (
                            <div className="h-auto"></div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={onClose}
            className="rounded-full px-6 py-2.5 cursor-pointer text-sm font-medium text-gray-500 bg-[#e5e7eb] hover:bg-[#FF33662A]"
          >
            Discard
          </button>
          <Link href={"/principal/manage-lecture"}>
         
          <button
            className="rounded-full cursor-pointer px-6 py-2.5 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            
          >
            Add Lecture
          </button> </Link>
        </div>
      </div>
    </BaseModal>
  );
};

export default ManageLectureModal;