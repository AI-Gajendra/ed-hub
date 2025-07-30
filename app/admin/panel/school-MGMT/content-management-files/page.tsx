"use client";
import { useState } from "react";
import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import NamingBar from "@/components/admin/ui/naming-bar";
import { Input } from "@/components/ui/input";
import { ChevronDown, Download, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ScrollableButton from "@/components/b2c-admin/common-component/scrollable-button";
import ManageAccess from "@/app/admin/pop-ups-2/components/ManageAccess";
import { UploadContentImage } from "../../../pop-ups-2/page";


export default function ContentManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <div className="bg-[#EEEEEE]">
      <NamingBar name="School Name" />

      <div className="px-4">
        <MaxWidthWrapper className="bg-white p-4   mx-auto rounded-2xl my-8">
          <SearchFilterBar />
          <ManageAccess
            isOpen={openModal === "manageAccess"}
            onClose={() => setOpenModal(null)}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <FolderCard key={i} setOpenModal={setOpenModal} />
            ))}
          </div>
        </MaxWidthWrapper>
        <ScrollableButton
          onClick={() => setOpenModal("content")}
          ButtonHeading="Upload File"
        />
		 <UploadContentImage  isOpen={openModal === "content"}
				onClose={() => setOpenModal(null)}
			  />
      </div>
    </div>
  );
}

function SearchFilterBar() {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
      <div className="relative w-full">
        <Input
          className="border-black rounded-full pl-9"
          placeholder="Search"
        />
        <Search className="absolute top-0 translate-y-1/4 left-2" />
      </div>
      <div className="flex  flex-wrap  md:flex-nowrap gap-4">
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

function FolderCard({
  setOpenModal,
}: {
  setOpenModal: (value: string) => void;
}) {
  return (
   <div className="p-3 sm:p-4 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] flex flex-col sm:flex-row gap-4 sm:items-start w-full">
  <Image
    src="/admin/image-copy.png"
    alt="Folder"
    width={100}
    height={100}
    className="w-24 h-24 object-cover rounded-xl mx-auto sm:mx-0"
  />

  <div className="flex flex-col gap-2 justify-between flex-1 w-full">
    <h4 className="font-medium text-sm sm:text-base text-center sm:text-left">
      File Name
    </h4>
    <p className="text-xs text-[#6B7280] text-center sm:text-left">
      23rd June 2023
    </p>

    <div className="flex gap-2 md:gap-4 w-full mt-2 sm:mt-4 flex-wrap">
      <button
        className="bg-[#F3F4F6] hover:bg-[#F3F4F6]/90 rounded-full font-normal text-[#6B7280] w-full sm:flex-1 flex items-center justify-center text-nowrap gap-1 px-4 py-2 text-xs md:text-sm"
        onClick={() => setOpenModal('manageAccess')}
      >
        <Settings className="w-4 h-4" />
        Manage Access
      </button>
      <button
        className="bg-[#F3F4F6] hover:bg-[#F3F4F6]/90 rounded-full font-normal text-[#6B7280] w-full sm:flex-1 flex items-center justify-center text-nowrap gap-1 px-4 py-2 text-xs md:text-sm"
      >
        <Download className="w-4 h-4" />
        Download
      </button>
    </div>
  </div>
</div>


  );
}
