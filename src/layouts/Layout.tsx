import { Outlet } from "react-router-dom";
import { _assets } from "src/asstes";

const Layout = () => {
  return (
    <div className=" flex flex-col w-full h-screen">
      <div className="w-100 h-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
