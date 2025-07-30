import React, { FC } from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { Props } from "@/components/projects-section/projects-list/project-view/project-view.types";

export const ProjectView: FC<Props> = ({
  id,
  name,
  description,
  photo,
  index,
}) => (
  <Card
    key={id}
    className={`py-4 transition-all hover:scale-[1.02] ${
      index === 4 ? "col-span-full justify-self-center max-w-[400px]" : ""
    }`}
  >
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">Project #{id}</p>
      <h4 className="font-bold text-large">{name}</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
      <Image
        alt={name}
        className="object-cover rounded-xl"
        src={photo}
        width={270}
        height={180}
      />
      <p className="text-sm mt-4">{description}</p>
    </CardBody>
  </Card>
);
