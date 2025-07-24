"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  
  CourseDetailPart,
  ModulePart,
  BatchAndTimePart,
  ModulesAndVideosPart,
  ModuleData,
  VideoData,
} from "./components";
import Preview from "./preview";
import { ActionButton } from "./ui-components";
import GoBack from "@/components/principal/goback";

const creationSteps = [
  "Add Details",
  "Add Videos",
  "Know More Section",
  "Preview",
];

export default function CourseCreationFlowPage() {
  const [activeStep, setActiveStep] = useState("Add Details");
  const [modules, setModules] = useState<ModuleData[]>([]);

  useEffect(() => {
    setModules([
      {
        id: crypto.randomUUID(),
        moduleTitle: "",
        videos: [
          { id: crypto.randomUUID(), videoTitle: "", videoDescription: "" },
        ],
      },
    ]);
  }, []);

  const handleContinue = () => {
    const currentIndex = creationSteps.indexOf(activeStep);
    if (currentIndex < creationSteps.length - 1) {
      setActiveStep(creationSteps[currentIndex + 1]);
    } else {
      // Final submission logic
      console.log("Final Course Data:", { modules });
      alert("Course Creation Complete!");
    }
  };

  const handleModuleChange = (
    moduleIndex: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newModules = [...modules];
    newModules[moduleIndex].moduleTitle = e.target.value;
    setModules(newModules);
  };
  const handleVideoChange = (
    moduleIndex: number,
    videoIndex: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.id.split("-")[0] as keyof VideoData;
    const newModules = [...modules];
    (newModules[moduleIndex].videos[videoIndex] as any)[field] = e.target.value;
    setModules(newModules);
  };
  const handleAddVideo = (moduleIndex: number) => {
    const newModules = [...modules];
    newModules[moduleIndex].videos.push({
      id: crypto.randomUUID(),
      videoTitle: "",
      videoDescription: "",
    });
    setModules(newModules);
  };
  const handleAddNewModule = () => {
    setModules((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        moduleTitle: "",
        videos: [
          { id: crypto.randomUUID(), videoTitle: "", videoDescription: "" },
        ],
      },
    ]);
  };

  const renderActiveStepContent = () => {
    
        return (
          <div className="space-y-6">
            <CourseDetailPart />

            <BatchAndTimePart />
            <ModulesAndVideosPart
              modules={modules}
              onModuleChange={handleModuleChange}
              onVideoChange={handleVideoChange}
              onAddVideo={handleAddVideo}
              onAddNewModule={handleAddNewModule}
            />
            <div className="mt-6">
              <ActionButton variant="primary" onClick={handleContinue}>
                Publish
              </ActionButton>
            </div>
          </div>
        )
      
      
      
    
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex flex-col">
      <GoBack
        GoBackHeading="Add Course"
        toLink="/admin-b2c/admin-panel/course-management"
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <main className="bg-white rounded-2xl w-full max-w-screen-xl mx-auto my-6 p-3 sm:p-4">
         
          <div className="mt-6">{renderActiveStepContent()}</div>
        </main>
      </div>
    </div>
  );
}
