import { Outlet } from "react-router-dom";
import ThreadsSidebar from "./ThreadsSidebar";

export default function FeedLayout() {
  return (
    <div className="flex justify-center min-h-screen bg-[#FFFFFF]">
      <div className="flex max-w-screen-2xl w-full">
        <ThreadsSidebar />
        <Outlet />
      </div>
    </div>
  );
}
