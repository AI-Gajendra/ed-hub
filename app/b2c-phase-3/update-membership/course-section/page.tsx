

import React from "react";
import MembershipForm from "@/components/b2c-phase-3/update-course-selection";
import Navbar from '@/components/b2c-phase-3/Header';
const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

export default function Membership() {
  return (
    <>
      <Navbar user={user} />
     <div className="bg-[#eeeeee] sm:py-6 sm:px-8 p-4  overflow-x-hidden min-h-screen">
         <MembershipForm />
      
        </div>
      
    </>
  );
}
