import { createBrowserRouter } from 'react-router';

import AuthLayout from './layouts/AuthLayout';
// import DashboardLayout from './layouts/AdminLayout';

//auth
import SignIn from './pages/AuthPages/SignIn';
import SignUp from './pages/AuthPages/SignUp';

//dashboard
import Home from './dashboard/homePage/Home';



const routers = createBrowserRouter([
  // {
  //   path: "/dashboard",
  //   Component: DashboardLayout,
  //   children: [
  //     { index: true, Component: Home },
  //   ]
  // },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: SignIn,
      },
      {
        path: "registration",
        Component: SignUp,
      },
    ],
  },
]);

export default routers;