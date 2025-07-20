import React from "react";
import Navbar from '@/components/phase-3/Header';
import Footer from "@/components/layout/Footer";
import GoBack from "@/components/principal/goback";
import RequestManagementPage from './components'
const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

export default function RequestCourse() {
  return (
    <>
      <Navbar user={user}/>
        <GoBack GoBackHeading="Unlock Course Requests" toLink='/admin-b2c/admin-panel/dashboard' />
     <div className="overflow-x-hidden  py-10 px-4  bg-[#eeeeee]">
        
      < RequestManagementPage/>
        </div>
      <Footer/>
    </>
  );
}