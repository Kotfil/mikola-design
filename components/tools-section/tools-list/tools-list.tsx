import React, { FC } from "react";
import Marquee from "react-fast-marquee";
import { ToolView } from "@/components/tools-section/tools-list/tool-view/tool-view";
import { toolList } from "@/components/mock/tool-list.mock";

export const ToolsList: FC = () => {
  return (
    <div className="py-4 bg-neutral-100 dark:bg-neutral-900">
      <Marquee pauseOnHover speed={50} gradient={false}>
        {toolList.map((tool) => (
          <ToolView key={tool.id} photo={tool.photo} id={tool.id} />
        ))}
      </Marquee>
    </div>
  );
};
