"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";

import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import DeactivateSchoolModal from "@/app/admin/pop-ups/components/Deactivate";
export default function SchoolManagement() {
  const tabs = ["Schools", "Teachers", "Students"] as const;
  type Tab = (typeof tabs)[number];

  const [activeTab, setActiveTab] = useState<Tab>("Schools");
  const [activeClass, setActiveClass] = useState(false);
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const handleOpenModal = (modalId: string) => {
    setOpenModalId(modalId);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
    document.body.style.overflow = "auto";
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return (
    <div className="bg-[#EEEEEE] p-4">
      <MaxWidthWrapper className="bg-white p-4 rounded-2xl">
        <SearchFilterBar />
        <DeactivateSchoolModal
          isOpen={openModalId === "deactivateSchoolModal"}
          onClose={handleCloseModal}
        />
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

        <div className="rounded-2xl border border-[#E5E7EB] px-4 py-2 flex justify-center items-center gap-8">
          <Button
            className={cn(
              "rounded-2xl bg-[#FF3366] hover:bg-[#FF3366]/90 hover:text-white px-2.5",
              activeClass === true ? "bg-[#FF3366]" : "bg-white text-[#6B7280]"
            )}
            onClick={() => {
              setActiveClass(true);
            }}
          >
            Active
          </Button>
          <Button
            onClick={() => {
              setActiveClass(false);
            }}
            className={cn(
              "rounded-2xl bg-[#FF3366] hover:bg-[#FF3366]/90 hover:text-white px-2.5",
              activeClass === false ? "bg-[#FF3366]" : "bg-white text-[#6B7280]"
            )}
          >
            Inactive
          </Button>
        </div>

        {activeTab === "Schools" && (
          <div className="rounded-2xl bg-white px-2 mt-4 sm:mt-6 grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
            <SchoolCard
              activeClass={activeClass}
              setOpenModalId={setOpenModalId}
            />
            <SchoolCard
              activeClass={activeClass}
              setOpenModalId={setOpenModalId}
            />
            <SchoolCard
              activeClass={activeClass}
              setOpenModalId={setOpenModalId}
            />
            <SchoolCard
              activeClass={activeClass}
              setOpenModalId={setOpenModalId}
            />
            <SchoolCard
              activeClass={activeClass}
              setOpenModalId={setOpenModalId}
            />
            <SchoolCard
              activeClass={activeClass}
              setOpenModalId={setOpenModalId}
            />
          </div>
        )}

        {activeTab === "Teachers" && (
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <TeacherRectangle activeClass={activeClass} key={i} setOpenModalId={setOpenModalId} />
            ))}
          </div>
        )}

        {activeTab === "Students" && (
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <StudentRectangle activeClass={activeClass} key={i} setOpenModalId={setOpenModalId} />
            ))}
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
}

function SearchFilterBar() {
  const buttons = ["Manage Leave", "Add Branch", "Manage Approval"];

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
      <div className="relative  w-72">
        <Input
          className="border-black rounded-full pl-9"
          placeholder="Search"
        />
        <Search className="absolute -top-1/12 translate-y-1/2 left-2 h-5" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
            Filter 1 <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
            Filter 2 <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-[#F9FAFB] border border-[#E5E7EB] hover:bg-[#F9FAFB]/90 rounded-xl font-light text-black">
            Filter 3 <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex gap-4 w-full">
        {buttons.map((btn, indx) => (
          <Button
            key={indx}
            className="flex-1 rounded-xl bg-[#F9FAFB] hover:bg-[#F9FAFB]/90 text-black border border-[#E5E7EB]"
          >
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );
}

interface SchoolCardProps {
  activeClass: boolean;
  setOpenModalId: (id: string) => void;
}
const SchoolCard = ({ activeClass, setOpenModalId }: SchoolCardProps) => {
  return (
   
     <Card className="shadow-none bg-[#F9FAFB] flex flex-col sm:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
  {/* Make only this section clickable */}
  <Link href="/admin/panel/school-management-report" className="w-full sm:w-52 h-44 block">
    <Image
      src="/images/school-image.jpg"
      alt="School"
      width={1880}
      height={1250}
      className="w-full h-full sm:w-52 object-cover rounded-xl"
    />
  </Link>

  <div className="flex flex-col justify-between gap-2 sm:gap-2 flex-1">
    <div>
      <Link href="/admin/panel/school-management-report" className="block">
        <h2 className="font-semibold text-sm sm:text-base truncate">School Name</h2>
        <p className="text-[#6B7280] text-xs font-light truncate">Address</p>
        <p className="text-[#6B7280] text-xs font-light truncate">Detail 1</p>
        <p className="text-[#6B7280] text-xs font-light truncate">Detail 2</p>
        <p className="text-[#6B7280] text-xs font-light truncate">Detail 3</p>
        <p className="text-[#6B7280] text-xs font-light truncate">Detail 4</p>
      </Link>
    </div>

    <div className="flex justify-end gap-4 items-center">
      {/* Keep button OUTSIDE the Link */}
     <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full bg-[#F9FAFB] hover:bg-[#F9FAFB]/90"
			 onClick={() => setOpenModalId("deactivateSchoolModal")}
          >
            <Settings />
          </Button>

     {activeClass ? (
  <Link href="/admin/panel/school-login-activity">
    <Button className="rounded-full px-6">Active</Button>
  </Link>
) : (
  <Link href="/admin/panel/school-login-activity">
    <Button className="rounded-full text-red-600 bg-[#FBD2D9] hover:bg-[#FBD2D9]/90">
      Inactive
    </Button>
  </Link>
)}
    </div>
  </div>
</Card>

   
  );
};

interface TeacherCardProps {
  activeClass: boolean;
  setOpenModalId: (id: string) => void;
}

function TeacherRectangle({ activeClass, setOpenModalId }: TeacherCardProps) {
  return (
    <div className="bg-[#F3F4F6] border border-[#E5E7EB] rounded-2xl px-2 py-1.5 flex items-center gap-2">
      <Image
        src="/images/admin-teacher-profile.png"
        alt="Teacher Profile"
        width={228}
        height={228}
        className="w-20 h-20 aspect-square"
      />
      <div className="ml-1 flex items-center justify-between w-full">
        <div>
          <h2 className="text-lg font-semibold">Name</h2>
          <h4 className="text-[#FF3366]">Subject</h4>
          <h4 className="text-[#6B7280] text-xs">Class Assigned</h4>
          <h4 className="text-[#6B7280] text-xs">Batch Assigned</h4>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full bg-[#F9FAFB] hover:bg-[#F9FAFB]/90"
            onClick={() => setOpenModalId("deactivateSchoolModal")}
          >
            <Settings />
          </Button>

          {activeClass ? (
            <Button className="rounded-full px-2">Active</Button>
          ) : (
            <Button className="rounded-full px-2 text-red-600 bg-[#FBD2D9] hover:bg-[#FBD2D9]/90">
              Inactive
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

interface StudentCardProps {
  activeClass: boolean;
  setOpenModalId: (id: string) => void;
}
function StudentRectangle({ activeClass, setOpenModalId }: StudentCardProps) {
  return (
    <div className="bg-[#F3F4F6] border border-[#E5E7EB] overflow-hidden rounded-2xl px-2 py-1.5 flex items-center gap-2">
      <Image
        src="/admin/student.png"
        alt="Teacher Profile"
        width={228}
        height={228}
        className="w-24 h-20 aspect-square object-cover rounded-2xl overflow-hidden"
      />
      <div className="ml-1 flex items-center justify-between w-full">
        <div>
          <h2>Student Name</h2>
          <h4 className="text-[#6B7280] text-xs">Course Name</h4>
          <h4 className="text-[#6B7280] text-xs my-0.5">Level / Grade</h4>
          <h4 className="text-[#6B7280] text-xs">Group</h4>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full bg-[#F9FAFB] hover:bg-[#F9FAFB]/90"
			 onClick={() => setOpenModalId("deactivateSchoolModal")}
          >
            <Settings />
          </Button>

          {activeClass ? (
            <Button className="rounded-full px-2">Active</Button>
          ) : (
            <Button className="rounded-full px-2 text-red-600 bg-[#FBD2D9] hover:bg-[#FBD2D9]/90">
              Inactive
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
