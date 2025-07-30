import React, { FC } from "react";
import { projectList } from "@/components/mock/project-list.mock";
import { ProjectView } from "@/components/projects-section/projects-list/project-view/project-view";

export const ProjectList: FC = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-8 max-w-[1600px] mx-auto
      lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr] 2xl:grid-cols-[1fr_1fr]"
    >
      {projectList.map((project, i) => (
        <ProjectView key={project.id} {...project} index={i} />
      ))}
    </div>
  );
};
