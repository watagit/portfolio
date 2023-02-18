import Image from "next/image";
import type { FC } from "react";

import type { Project } from "@/domain/project";

type ProjectItemProps = {
  project: Project;
};

export const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="rounded-lg border border-gray">
      <Image
        className="w-full rounded-t-lg border border-gray"
        src={project.thumbnailImageUrl}
        width={100}
        height={100}
        alt={`${project.serviceName}のサムネイル画像`}
      />
      <div className="flex flex-col gap-3 p-4">
        <h3 className="text-xl font-semibold text-black">
          {project.serviceName}
        </h3>
        <p className="text-black">{project.description}</p>
      </div>
    </div>
  );
};
