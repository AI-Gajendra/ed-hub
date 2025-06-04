'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiBell, FiClock } from 'react-icons/fi'

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// Sample Question Data Structure
interface QuestionOption {
    id: string
    text: string
}

const subjects = ['Academics', 'Skills Development', 'Brain Function', 'Sport', 'STEMnology', 'Competition', 'Extra curriculars'];

export default function DmittTest_3_Page() {
    const [activeSubject, setActiveSubject] = useState(subjects[0]);

    const headerUser = {
        name: 'Shlok Agheda',
        role: 'Student',
        avatarSrc: '/placeholder-avatar-student.jpg',
    };

    return (
        <div className="bg-[#EEEEEE] min-h-screen flex flex-col">
            {/* HEADER */}
            <Header user={headerUser} />


            <main className="flex-grow mt-[30px] px-10 pb-10">
                {/* Subject Tabs Bar */}
                <div className="w-full bg-[#f1f1f1] py-3 px-0">
                    <div className="w-full bg-white rounded-[25px] shadow-md px-6 py-2 flex items-center justify-between gap-6">
                         <button className="mr-2 text-gray-700 hover:text-pink-500"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>

                        {subjects.map((subject) => (
                            <button
                                key={subject}
                                onClick={() => setActiveSubject(subject)}
                                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200
                ${activeSubject === subject
                                        ? 'bg-[#FF3366] text-white shadow-sm'
                                        : 'text-slate-700 hover:text-pink-500'}`}
                            >
                                {subject}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex bg-white rounded-3xl p-3 flex-col">




                    <div className="flex">



                        <div className="flex flex-col w-[70%] py-4">

                            <div className="flex items-center justify-between">
                                <div className="back-btn flex mb-3">
                                    <button className="mr-2 text-gray-700 hover:text-pink-500"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
                                    <div className="flex flex-col">
                                        <h1 className="text-xl font-semibold text-[#FF3366]">Startup Maths Part1</h1>
                                        <small className='text-gray-400'>Learning</small>
                                    </div>
                                </div>

                                <div className="mr-4 flex items-center gap-2 text-[20px] font-medium text-[#1E1E1E] bg-[#F9FAFB] border border-[#E5E7EB] px-3 py-2 rounded-[10px]">
                                    <Image
                                    src="/images/Back Icon.svg" // Replace with actual avatar path
                                    alt="Shlok Agheda"
                                    width={10}
                                    height={10}
                                    className="w-[20px]"
                                />
                                    <span className='mx-2'>Page 1</span><Image
                                    src="/images/_Back Icon.svg" // Replace with actual avatar path
                                    alt="Shlok Agheda"
                                    width={10}
                                    height={10}
                                    className="w-[20px]"
                                /></div>
                            </div>

                            <p className="ml-8 font-bold">Let's Revise</p>
                            <div className="image-content-box  px-10 py-4">
                                <Image
                                    src="/images/revise.png" // Replace with actual avatar path
                                    alt="Shlok Agheda"
                                    width={100}
                                    height={100}
                                    className="w-[100%]"
                                />
                            </div>
                        </div>

                        <div className="card-content w-[30%] py-4">

                            <div className="mb-2 w-[100%] bg-gray-50 p-3 rounded-2xl flex items-center justify-between">
                                <div className="">
                                    <p>Number 1 to 10</p>
                                    <small className='text-gray-400'>2 resources</small>
                                </div>
                                <div className="">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 cursor-pointer hover:text-[#3366FF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </div>

                            <div className="mb-2 w-[100%] bg-gray-50 p-3 rounded-2xl flex items-center justify-between">
                                <div className="">
                                    <p>Number 1 to 10</p>
                                    <small className='text-gray-400'>2 resources</small>
                                </div>
                                <div className="">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 cursor-pointer hover:text-[#3366FF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </div>

                            <div className="mb-2  w-[100%] bg-gray-50 p-3 rounded-2xl flex items-center justify-between">
                                <div className="">
                                    <p>Addition</p>
                                    <small className='text-gray-400'>2 resources</small>
                                </div>
                                <div className="">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 cursor-pointer hover:text-[#3366FF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </div>

                            <div className="mb-2  w-[100%] bg-gray-50 p-3 rounded-2xl flex items-center justify-between">
                                <div className="">
                                    <p>Substraction</p>
                                    <small className='text-gray-400'>3 resources</small>
                                </div>
                                <div className="">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 cursor-pointer hover:text-[#3366FF]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>

            {/* FOOTER */}
            <Footer />
        </div>
    )
}
