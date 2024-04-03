import React from "react";

const ButtonOutline = ({ children, onClick  }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-800 text-blue-800 bg-white-500 outline-none rounded-l-full rounded-r-full
     capitalize hover:bg-blue-800 hover:text-white-500 transition-all hover:shadow-blue "
     onClick={onClick}>
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
