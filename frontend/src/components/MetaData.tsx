import Image from "next/image";
import React, { FC } from "react";

const MetaData: FC = () => {
  return (
    <>
      <Image src={"/avatar.jpg"} alt={"avatar"} width={"100"} height={"100"} />
      <div>
        <h1>小野 航</h1>
        <p>@what_a_pon</p>
      </div>
    </>
  );
};

export default MetaData;
