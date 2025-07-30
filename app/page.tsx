"use client";
import React from "react";
import { MainSection } from "@/components/main-section/main-section";
import { ProjectsSection } from "@/components/projects-section/projects-section";
import { ToolsSection } from "@/components/tools-section/tools-section";

export default function Home() {
  return (
    <>
      <MainSection />
      <ProjectsSection />
      <ToolsSection />
    </>
  );
}
