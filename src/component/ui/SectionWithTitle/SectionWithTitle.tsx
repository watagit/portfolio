import type { FC, ReactNode } from "react";

type SectionWithTitleProps = {
  title: string;
  children: ReactNode;
};

export const SectionWithTitle: FC<SectionWithTitleProps> = ({
  title,
  children,
}) => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </section>
  );
};
