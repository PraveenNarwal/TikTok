import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div
      className="block xl:hidden m-2 ml-4 mt-3 text-xl"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
    </div>
  );
};

export default Sidebar;
