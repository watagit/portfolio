import type { FC } from "react";

import type { Project } from "~/domain/project";

type ProjectItemProps = {
  project: Project;
};

export const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="border-gray rounded-lg border sm:h-full">
      <img
        className="w-full rounded-t-lg"
        src={project.thumbnailImageUrl}
        width={500}
        height={500}
        alt={`${project.serviceName}のサムネイル画像`}
      />
      <div className="flex flex-col gap-3 p-4">
        <h2 className="sm:text-base sm:leading-5">{project.serviceName}</h2>
        <p className="leading-6 text-black sm:text-xs sm:leading-5">
          {project.description}
        </p>
      </div>
    </div>
  );
};
