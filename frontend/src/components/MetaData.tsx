import Image from "next/image";
import React, { FC } from "react";

const MetaData: FC = () => {
  return (
    <div className={"flex justify-center"}>
      <Image className={"rounded-full"} src={"/avatar.jpg"} alt={"avatar"} width={"100"} height={"100"} />
      <div>
        <h1>小野 航</h1>
        <p>@what_a_pon</p>
      </div>
    </div>
  );
};

export default MetaData;
