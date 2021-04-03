import React, { FC } from "react";

export interface Props {
  title: string;
  content: string;
}

const Text: FC<Props> = ({ title, content }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
};

export default Text;
