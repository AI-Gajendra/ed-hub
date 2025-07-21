
import React from "react";
import Navbar from '@/components/phase-3/Header';
import UnlockForm from "@/components/phase-3/unlock-course";
import { User } from 'lucide-react';
const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

export default function Membership() {
  return (
    <>
      <Navbar user={user}/>
     <div className="overflow-x-hidden min-h-screen py-10 px-4  bg-[#eeeeee]">
        <UnlockForm />
        </div>
      
    </>
  );
}
