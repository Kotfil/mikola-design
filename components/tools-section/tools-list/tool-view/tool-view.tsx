import React, { FC } from "react";
import Image from "next/image";
import { Props } from "@/components/tools-section/tools-list/tool-view/tool-view.types";

export const ToolView: FC<Props> = ({ id, photo }) => {
  return (
    <div className="mx-50 flex items-center">
      <Image
        src={photo}
        alt={`Tool ${id}`}
        width={64}
        height={64}
        className="h-16 w-16 object-contain grayscale hover:grayscale-0 transition duration-300 rounded-[12px]"
      />
    </div>
  );
};
