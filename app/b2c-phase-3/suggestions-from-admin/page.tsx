"use client";
import React, { useState } from "react";
import Navbar from '@/components/b2c-phase-3/Header';
import Footer from "@/components/layout/Footer";
import GoBack from "@/components/principal/goback";
import { ChatArea, ChatMessageData, TeacherContact, TeacherListSidebar } from "./components";
import { AnimatePresence, motion } from "framer-motion";

const user = {
  avatarSrc: "/admin/usernav.jpg",
  name: "Shlok Agheda",
  role: "Student",
};

const teachersListData: TeacherContact[] = Array.from({ length: 10 }, (_, i) => ({
  id: 'number',
  name: 'Name',
  avatarSrc: `/teacher-avatar-chat-${(i % 3) + 1}.jpg`,
  lastMessageTime: '7:00 pm',
   date: "11th July 2025",
}));

const initialChatMessagesData: ChatMessageData[] = [
  {
    id: 'm1',
    sender: 'teacher',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timestamp: '6:50 pm',
    imageUrl: '/images/earth.png',
    imageName: 'Moon_Surface.jpg',
  },
  {
    id: 'm2',
    sender: 'user',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timestamp: '6:50 pm',
  },
];

export default function PenaltyOverview() {
  const [activeTeacherId, setActiveTeacherId] = useState<string | null>(teachersListData[0]?.id || null);
  const [messages, setMessages] = useState<ChatMessageData[]>(initialChatMessagesData);
  const [newMessage, setNewMessage] = useState('');
  const [showChatOnMobile, setShowChatOnMobile] = useState(false);

  const selectedTeacher = teachersListData.find(t => t.id === activeTeacherId);

  const handleTeacherSelect = (teacherId: string) => {
    setActiveTeacherId(teacherId);
    setMessages(initialChatMessagesData);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const messageToSend: ChatMessageData = {
      id: `m${messages.length + 1}`,
      sender: 'user',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase(),
    };

    setMessages(prevMessages => [...prevMessages, messageToSend]);
    setNewMessage('');
  };

  const handleSelect = (id: string) => {
    handleTeacherSelect(id);
    setShowChatOnMobile(true);
  };

  return (
    <>
      <Navbar user={user} />
      <GoBack GoBackHeading="Suggestions from Admins" toLink="/admin-b2c/admin-panel/dashboard" />

      <div className="overflow-x-hidden py-10 px-4 bg-[#eeeeee]">
        <main className="z-20 relative flex-grow container mx-auto p-2 flex flex-col gap-3 sm:p-4 md:p-6 lg:p-8 sm:gap-5 lg:flex-row lg:items-start">
          {/* 🖥️ Desktop Layout */}
          <div className="hidden lg:flex w-full gap-5">
            <TeacherListSidebar
              teachers={teachersListData}
              activeTeacherId={activeTeacherId}
              onTeacherSelect={handleTeacherSelect}
            />
            <ChatArea
              selectedTeacher={selectedTeacher}
              messages={messages}
              newMessage={newMessage}
              onNewMessageChange={(e) => setNewMessage(e.target.value)}
              onSendMessage={handleSendMessage}
            />
          </div>

          {/* 📱 Mobile / Tablet Layout */}
          <div className="lg:hidden relative w-full min-h-[400px]">
            <AnimatePresence mode="sync" initial={false}>
              {!showChatOnMobile ? (
                <motion.div
                  key="list"
                  initial={{ x: 0 }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-0 left-0 w-full h-full z-10"
                >
                  <TeacherListSidebar
                    teachers={teachersListData}
                    activeTeacherId={activeTeacherId}
                    onTeacherSelect={(id) => {
                      handleSelect(id);
                      setShowChatOnMobile(true);
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 left-0 w-full h-full z-20 bg-white"
                >
                  <ChatArea
                    selectedTeacher={selectedTeacher}
                    messages={messages}
                    newMessage={newMessage}
                    onNewMessageChange={(e) => setNewMessage(e.target.value)}
                    onSendMessage={handleSendMessage}
                    onBackClick={() => setShowChatOnMobile(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
