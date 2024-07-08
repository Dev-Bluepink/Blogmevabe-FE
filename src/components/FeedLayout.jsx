import { Outlet } from "react-router-dom";
import ThreadsSidebar from "./ThreadsSidebar";
import { A } from "../../dist/assets/index-C4tUjYxT";
import Ads from "./Ads";

export default function FeedLayout() {
  return (
    <div className="flex justify-center min-h-screen bg-[#FFFFFF]">
      <div className="flex max-w-screen-2xl w-full">
        <ThreadsSidebar />
        <Outlet />
        <Ads />
      </div>
    </div>
  );
}
