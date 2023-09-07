import Image from "next/image";
import type { FC } from "react";

import type { Project } from "~/domain/project";

type ProjectItemProps = {
  project: Project;
};

export const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="rounded-lg border border-gray sm:h-full">
      <Image
        className="w-full rounded-t-lg"
        src={project.thumbnailImageUrl}
        width={500}
        height={500}
        alt={`${project.serviceName}のサムネイル画像`}
      />
      <div className="flex flex-col gap-3 p-4">
        <h3 className="sm:text-base sm:leading-5">{project.serviceName}</h3>
        <p className="leading-6 text-black sm:text-xs sm:leading-5">
          {project.description}
        </p>
      </div>
    </div>
  );
};
