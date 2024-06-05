import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Home from "@pages/Home/Home";
import "./AppRouter.css";
import CoursesPage from "@pages/CoursesPage/CoursesPage";
import CourseView from "@pages/CourseView/CourseView";
import CourseDetails from "@pages/CourseDetails/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses",
        element: <CoursesPage />,
      },
      {
        path: "course-view",
        element: <CourseView />,
      },
      {
        path: "course-details",
        element: <CourseDetails />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog-single",
        element: <SinglePost />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop-single",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "forgetpass",
        element: <ForgetPass />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
