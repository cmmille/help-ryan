import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="p-2 w-full">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
