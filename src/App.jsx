import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";
import Error from "./components/Error.jsx";
import FeedLayout from "./components/FeedLayout.jsx";
import Loader from "./components/Loader.jsx";
import RequireAuth from "./components/PrivateRoute.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Profile2 from "./pages/profile2/Profile.jsx";
import Knowledge from "./pages/knowledge/Knowledge.jsx";
import Area from "./pages/area/Area.jsx";
import Community from "./pages/community/Community.jsx";
import BottomMenu from "./components/BottomMenu.jsx";

const Feed = lazy(() => import("./pages/feed/Feed.jsx"));
const Profile = lazy(() => import("./pages/profile/Profile.jsx"));
const FullPost = lazy(() => import("./pages/fullPost/FullPost.jsx"));
const Inbox = lazy(() => import("./pages/inbox/Inbox.jsx"));
const SavedPosts = lazy(() => import("./pages/saved/SavedPosts.jsx"));
const SubThread = lazy(() => import("./pages/thread/SubThread.jsx"));
const Location = lazy(() => import("./pages/location/Location.jsx"));
const ListPost = lazy(() => import("./pages/listPost/ListPost.jsx"));
const Notification = lazy(() =>
  import("./pages/notification/Notification.jsx")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <FeedLayout />,
        children: [
          {
            path: "/",
            element: <Feed />,
          },
          {
            path: "/bai-dang",
            element: <FullPost />,
          },
          {
            path: "/post/:postId",
            element: <FullPost />,
          },
          {
            path: "/notification",
            element: <Notification />,
          },
          {
            path: "/u/profile/:section?",
            element: <Profile2 />, // Cập nhật để sử dụng Profile2 với các section
          },
          {
            path: "/u/knowledge",
            element: <Knowledge />,
          },
          {
            path: "/u/area",
            element: <Area />,
          },
          {
            path: "/location",
            element: <Location />,
          },
          {
            path: "/community",
            element: <Community />,
          },
          {
            path: "/list-post",
            element: <ListPost />,
          },
        ],
      },
      {
        path: "/t/:threadName",
        element: <SubThread />,
      },
      {
        path: "/saved",
        element: (
          <RequireAuth>
            <SavedPosts />
          </RequireAuth>
        ),
      },
      {
        path: "/inbox",
        element: (
          <RequireAuth>
            <Inbox />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 120000,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} fallbackElement={<Loader />}>
            <BrowserRouter>
              {/* bottom  chỉ hiển thị khi ở màn hình điện thoại */}
              <BottomMenu className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white"></BottomMenu>
            </BrowserRouter>
          </RouterProvider>
        </Suspense>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
