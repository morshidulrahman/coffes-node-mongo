import React from "react";
import notfoun from "../assets/404.gif";
const ErroPage = () => {
  return (
    <div className="w-full h-full ">
      <img src={notfoun} alt="404" className="max-w-full" />
    </div>
  );
};

export default ErroPage;
