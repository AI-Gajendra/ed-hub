"use client";

import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import NamingBar from "@/components/admin/ui/naming-bar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function ContentManagement() {
  

  return (
    <div >
      
        <MaxWidthWrapper className="bg-white p-4 rounded-2xl my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <FolderCard key={i} />
            ))}
          </div>
        </MaxWidthWrapper>
      
    </div>
  );
}

function FolderCard() {
  return (
    <div className="p-3 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] flex gap-4">
        <Link href={"/admin/panel/content-management-files"}>
      <Image
        src="/admin/folder-img.png"
        alt="Folder"
        width={100}
        height={100}
        className="w-24 h-24 object-cover rounded-xl"
      />
</Link>
      <div className="flex flex-col gap-1 justify-between items-start w-full">
        <h4 className="font-medium">Folder Name</h4>
        <p className="text-xs font-[#6B7280]">100 Files</p>
         
        <Button className="bg-[#F3F4F6] hover:bg-[#F3F4F6]/90 rounded-full  w-full font-normal text-[#6B7280]">
          <Settings />
          Manage Access
        </Button>
      </div>
    </div>
  );
}
