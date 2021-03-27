import React, { FC } from "react";

interface Props {
  label: string;
}

const Period: FC<Props> = ({ label }) => {
  return <p>{label}</p>;
};

export default Period;
