import { Outlet, useLocation } from "react-router-dom";
import ThreadsSidebar from "./ThreadsSidebar";
import Ads from "./Ads";
import PostHot from "./PostHot";
// Check if the current path is "/list-post"
const showPostHot = location.pathname === "/list-post";

export default function FeedLayout() {
  const location = useLocation();

  // Check if the current path starts with "/u/profile/"
  const hideAds = location.pathname.startsWith("/u/profile/");

  return (
    <div className="flex justify-center min-h-screen bg-[#FFFFFF]">
      <div className="flex max-w-screen-2xl w-full">
        <ThreadsSidebar />
        <Outlet />
        {!hideAds && (showPostHot ? <PostHot /> : <Ads />)}
      </div>
    </div>
  );
}
