import MaxWidthWrapper from "@/components/admin/max-width-wrapper";
import MembershipPlan from "./components";
import React from "react";
import Navbar from '@/components/b2c-phase-3/Header';
const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

export default function Membership() {
  return (
    <>
      <Navbar />
     <div className="overflow-x-hidden min-h-screen  bg-[#eeeeee]">
        <MembershipPlan />
        </div>
      
    </>
  );
}
