import React, { FC } from "react";

interface Props {
  title: string;
}

const Section: FC<Props> = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default Section;
