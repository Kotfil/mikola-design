import React, { FC } from "react";
import { ToolsList } from "@/components/tools-section/tools-list/tools-list";

export const ToolsSection: FC = () => {
  return (
    <div className="z-10">
      <div className={"flex justify-center"}>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
            Tools
          </h1>
        </div>
      </div>
      <ToolsList />
    </div>
  );
};
