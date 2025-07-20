// page.tsx
"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import {
    LearningContentCard,
    UpcomingClassesCard,
    ExtraClass,
    AttendanceCard,
    CertificateCard,
    FillForm,
    LearningWeek,
    UpcomingClass,
    CourseMaterial
} from './components';
import StudentWrapper from '@/components/student-wrapper';
import Footer from '@/components/layout/Footer';
import GoBack from '@/components/principal/goback';

// --- Sample Data ---
const contentTabsData = ['Learning', 'Assessments', 'Mock Papers', 'Work Sheet'];
const learningWeeksData: LearningWeek[] = Array.from({ length: 4 }, (_, i) => ({ id: `week${i + 1}`, title: `Learning Videos ( Week 1 )`, videoCount: i === 0 ? 3 : 3, videos: Array.from({ length: i === 0 ? 4 : 3 }, (_, j) => ({ id: `v${i + 1}-${j + 1}`, topic: `Topic 1` })) }));
const upcomingClassesData: UpcomingClass[] = Array.from({ length: 10 }, (_, i) => ({ id: i + 1, title: 'Title', teacher: "Teacher's Name ", description: 'Description ', time: '16:30 ', date: `16/5/25` }));
const ExtraClassData: CourseMaterial[] = [{ id: 1, fileName: 'File Name', date: '24th June 2025' }, { id: 2, fileName: 'File Name', date: '24th June 2025' }];
const attendanceData = { total: 20, attended: 17, missed: 3, percentage: 85 };
// --- End Sample Data ---

export default function CourseDetailPage() {
    const [activeContentTab, setActiveContentTab] = useState(contentTabsData[0]);
    const [openAccordionIds, setOpenAccordionIds] = useState<string[]>([learningWeeksData[0]?.id]);
    const [currentMonth, setCurrentMonth] = useState('June 2025');
    const [currentWeekFilter, setCurrentWeekFilter] = useState('Week 1');

    const leftRef = useRef<HTMLDivElement | null>(null)
    const [rightHeight, setRightHeight] = useState<number>(200);

    const handleAccordionToggle = (weekId: string) => {
        setOpenAccordionIds((prev) =>
            prev.includes(weekId)
                ? prev.filter((id) => id !== weekId)
                : [...prev, weekId]
        );
    };

    useLayoutEffect(() => {
        const updateHeight = () => {
            if (leftRef.current) {
                setRightHeight(leftRef.current.offsetHeight);
                console.log(rightHeight);
            }
        }

        updateHeight();

        const observer = new ResizeObserver(updateHeight);

        if (leftRef.current) {
            observer.observe(leftRef.current);
        }

        return () => {
            if (leftRef.current) {
                observer.unobserve(leftRef.current);
            }
            observer.disconnect();
        }
    }, [])

    const handleWeekFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCurrentWeekFilter(e.target.value);
    const handleBackClick = () => window.history.back();

    return (
        <StudentWrapper student activeState='"My course'>
            <div className="bg-[#eeeeee] min-h-screen flex flex-col">

                <GoBack GoBackHeading='Course Name'/>

                <main className="flex-grow max-w-[94rem] mx-auto p-3 sm:p-4 md:p-6 lg:p-8 space-y-4">
                    {/* Main Content Grid (Top Part) */}
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">

                        <div className="lg:col-span-5">
                            <LearningContentCard
                                tabs={contentTabsData} activeTab={activeContentTab} onTabClick={setActiveContentTab}
                                currentWeekFilter={currentWeekFilter} onWeekFilterChange={handleWeekFilterChange}
                                currentMonth={currentMonth}
                                courseTitle="Earth and Space Science" courseSubtitle="Solar system, weather patterns, and basic understanding of the Earth."
                                learningWeeks={learningWeeksData} openAccordionIds={openAccordionIds} onAccordionToggle={handleAccordionToggle}
                                leftRef={leftRef}
                            />
                        </div>

                        <div className={`lg:col-span-2 flex flex-col gap-4`} >
                            <UpcomingClassesCard
                                classes={upcomingClassesData} currentWeekFilter={currentWeekFilter}
                                onWeekFilterChange={handleWeekFilterChange} currentMonth={currentMonth}
                                rightHeight={rightHeight}
                            />
                            <FillForm />
                        </div>
                    </div>

                    {/* Lower Content Grid */}
                    <div className="sm:mt-6 md:mt-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-14 gap-4">
                        <AttendanceCard attendance={attendanceData} />
                        <CertificateCard />
                        <ExtraClass materials={ExtraClassData} />
                    </div>
                </main>
            </div>
            <Footer />
        </StudentWrapper>
    );
}