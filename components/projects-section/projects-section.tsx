import React, { FC } from "react";
import { ProjectList } from "@/components/projects-section/projects-list/project-list";

export const ProjectsSection: FC = () => {
  return (
    <div className="z-10">
      <div className={"flex justify-center"}>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
            Projects
          </h1>
        </div>
      </div>
      <ProjectList />
    </div>
  );
};
