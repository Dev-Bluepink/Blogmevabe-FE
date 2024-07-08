import { Outlet, useLocation } from "react-router-dom";
import ThreadsSidebar from "./ThreadsSidebar";
import Ads from "./Ads";
import Ads2 from "./Ads2";
import PostHot from "./PostHot";

export default function FeedLayout() {
  const location = useLocation();

  const hideAds = location.pathname.startsWith("/u/profile/");
  const showPostHot = location.pathname === "/list-post";
  const showAds2 = location.pathname === "/u/knowledge";

  return (
    <div className="flex justify-center min-h-screen bg-[#FFFFFF]">
      <div className="flex max-w-screen-2xl w-full">
        <ThreadsSidebar />
        <Outlet />
        {!hideAds &&
          (showPostHot ? <PostHot /> : showAds2 ? <Ads2 /> : <Ads />)}
      </div>
    </div>
  );
}
