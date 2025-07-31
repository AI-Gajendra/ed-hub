"use client";

import { act, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import NamingBar from "@/components/admin/ui/naming-bar";
import SchoolManagementReportPage from "@/components/admin/student-management-report";
import ActiveTab from "@/components/principal/active-inactive";
import ContentManagement from "@/components/admin/content-management";
import Link from "next/link";
import CreateFolderModal from "../../../pop-ups-2/components/CreateFolder";

export default function ManageAllApprovals() {
  const tabs = ["Analysis", "Teachers", "Students", "Content"] as const;
  type Tab = (typeof tabs)[number];

  const [activeTab, setActiveTab] = useState<Tab>("Teachers");
   const [openModal, setOpenModal] = useState<string | null>(null);
const [selectedClass, setSelectedClass] = useState<string>('Class 1')
  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5']

  return (
    <div className="bg-gray-100/60 min-h-screen">
      <NamingBar name="School Name" />
      <div className="px-4">
        <MaxWidthWrapper className="bg-white rounded-2xl my-10 py-4">
          {/* Search filter only for Teachers and Students */}
          {["Students", "Teachers", "Content"].includes(activeTab) && (
            <SearchFilterBar activeTab={activeTab} setOpenModal={setOpenModal} />
          )}
<CreateFolderModal
            isOpen={openModal === "createFolder"}
            onClose={() => setOpenModal(null)}
          />
          {/* Tabs Navigation */}
          <div className="my-6 flex items-center justify-start gap-4 sm:gap-8 font-medium">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "cursor-pointer",
                  activeTab === tab
                    ? "text-[#3366FF] underline underline-offset-8"
                    : "text-[#6B7280]"
                )}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Class filter shown only for Students and Teachers */}
          {(activeTab === "Students" || activeTab === "Teachers") && (
            <div className="rounded-2xl my-4 border border-[#E5E7EB] px-4 py-2 flex flex-wrap sm:flex-nowrap justify-start sm:justify-center items-center sm:gap-8">
					{classes.map((cls, indx) =>
						selectedClass === cls ? (
							<Button
								key={indx}
								className="rounded-xl bg-[#FF3366] hover:bg-[#FF3366]/90 text-white px-2"
								onClick={() => setSelectedClass(cls)}>
								{cls}
							</Button>
						) : (
							<Button
								key={indx}
								className="rounded-2xl bg-white hover:bg-gray-100 text-[#6B7280] px-4"
								onClick={() => setSelectedClass(cls)}>
								{cls}
							</Button>
						)
					)}
				</div>
          )}

          {/* Tab Content Rendering */}
          {activeTab === "Analysis" && <SchoolManagementReportPage />}
{activeTab === "Content" && <ContentManagement/>}
          {activeTab === "Teachers" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto custom-peach-scrollbar pr-4">
              {Array.from({ length: 100 }).map((_, i) => (
                <TeacherRectangle key={i} />
              ))}
            </div>
          )}

          {activeTab === "Students" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto custom-peach-scrollbar pr-4">
              {Array.from({ length: 100 }).map((_, i) => (
                <StudentRectangle key={i} />
              ))}
            </div>
          )}
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

interface SearchFilterBarProps {
  activeTab: "Analysis" | "Teachers" | "Students" | "Content";
   setOpenModal: (value: string) => void;
}
function SearchFilterBar({ activeTab,setOpenModal }: SearchFilterBarProps) {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
      <div className="relative w-full">
        <Input
          className="border-black rounded-full pl-9"
          placeholder="Search"
        />
        <Search className="absolute top-0 translate-y-1/4 left-2" />
      </div>
      {activeTab === "Content" && (
        <Button className="bg-[#FF3366] w-full sm:w-fit hover:bg-[#FF3366]/90 font-normal px-2 rounded-full text-white"onClick={() => setOpenModal("createFolder")}>
          Create Folder
        </Button>
      )}

      <div className="flex flex-nowrap gap-4">
        {[1, 2, 3].map((n) => (
          <DropdownMenu key={n}>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
                Filter {n} <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
      </div>
    </div>
  );
}

function TeacherRectangle() {
  return ( <Link href={"/admin/panel/school-MGMT/teacher-performance"}>
    <div className="bg-[#F3F4F6] rounded-2xl px-2 py-1.5 flex items-center gap-1">
      <Image
        src="/images/admin-teacher-profile.png"
        alt="Teacher Profile"
        width={228}
        height={228}
        className="w-20 h-20 aspect-square"
      />
      <div className="ml-1 flex items-center justify-between w-full">
        <div>
          <h2 className="text-lg font-bold">Name</h2>
          <h4 className="text-[#FF3366]">Subject</h4>
          <h4 className="text-[#6B7280] text-xs">Class Assigned</h4>
          <h4 className="text-[#6B7280] text-xs">Batch Assigned</h4>
        </div>
      </div>
    </div></Link>
  );
}

function StudentRectangle() {
  return ( <Link href={"/admin/panel/school-MGMT/student-progress-report"}>
    <div className="bg-[#F3F4F6] rounded-2xl px-2 py-2 border border-[#B0B0B0] flex items-center gap-1">
      <Image
        src="/images/admin-student-profile.png"
        alt="Student Profile"
        width={228}
        height={228}
        className="w-20 h-20 aspect-square"
      />
      <div className="ml-1 flex items-center justify-between w-full">
        <div>
          <h2>Student Name</h2>
          <h4 className="text-[#6B7280] text-xs">Course Name</h4>
          <h4 className="text-[#6B7280] text-xs">Level / Grade</h4>
          <h4 className="text-[#6B7280] text-xs">Group</h4>
        </div>
      </div>
    </div></Link>
  );
}
