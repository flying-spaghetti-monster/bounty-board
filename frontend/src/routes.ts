import { createBrowserRouter } from 'react-router';

import AuthLayout from './layouts/AuthLayout';

//auth
import SignIn from './pages/AuthPages/SignIn';
import SignUp from './pages/AuthPages/SignUp';

//home Page
import SiteLayout from './layouts/SiteLayout';

const routers = createBrowserRouter([
  {
    path: "/", Component: SiteLayout
  },
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