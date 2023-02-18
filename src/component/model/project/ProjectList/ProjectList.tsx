import type { FC } from "react";

import { ProjectItem } from "./ProjectItem";
import type { Project } from "@/domain/project";

type ProjectListProps = {
  projects: Array<Project>;
};

export const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <ul className="flex flex-col gap-4">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectItem project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
