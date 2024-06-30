import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Home from "@pages/Home/Home";
import "./AppRouter.css";
import CoursesPage from "@pages/CoursesPage/CoursesPage";
import CourseView from "@pages/CourseView/CourseView";
import CourseDetails from "@pages/CourseDetails/CourseDetails";
import Blog from "@pages/Blog/Blog";
import SinglePost from "@pages/SinglePost/SinglePost";
import Shop from "@pages/Shop/Shop";
import SingleProduct from "@pages/SingleProduct/SingleProduct";
import Cart from "@pages/Cart/Cart";
import Contact from "@pages/Contact/Contact";
import Login from "@pages/Login/Login";
import Register from "@pages/Register/Register";
import ForgetPass from "@pages/ForgetPass/ForgetPass";
import Error from "@pages/Error/Error";
import CategoryContextProvider from "@store/context/searchCategoryContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
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
  return (
     <CategoryContextProvider>
        <RouterProvider router={router} />
    </CategoryContextProvider>
);
};
export default AppRouter;
