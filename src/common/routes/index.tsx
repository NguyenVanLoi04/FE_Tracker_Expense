import { ElementType, lazy, Suspense } from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
// hooks
import useAuth from "../hooks/useAuth";
// layouts
import DashboardLayout from "../layouts/dashboard";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
// guards
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
// config
// components

import LoadingScreen from "../components/LoadingScreen";
import { PATH_AUTH, PATH_DASHBOARD } from "./paths";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  const { pathname } = useLocation();

  const { isAuthenticated } = useAuth();

  const isDashboard = pathname.includes("/dashboard") && isAuthenticated;

  return (
    <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
      ],
    },

    // Dashboard Routes
    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "merchant",
          children: [
            {
              element: <Navigate to={PATH_DASHBOARD.merchant.root} replace />,
              index: true,
            },
            { path: "settings", element: <AccountGeneral /> },
            { path: "change-password", element: <AccountChangePassword /> },
          ],
        },
        {
          path: "",
          children: [
            {
              path: PATH_DASHBOARD.category.list,
              element: <ListCategory />,
            },
            {
              path: PATH_DASHBOARD.category.new,
              element: <CreateCategory />,
            },
            {
              path: PATH_DASHBOARD.category.edit,
              element: <EditCategory />,
            },
            {
              path: PATH_DASHBOARD.category.detail,
              element: <DetailCategory />,
            },
          ],
        },
        {
          path: "",
          children: [
            {
              path: PATH_DASHBOARD.userManagement.list,
              element: <ListUser />,
            },
            {
              path: PATH_DASHBOARD.userManagement.detail,
              element: <DetailUser />,
            },
          ],
        },
        {
          path: "",
          children: [
            {
              path: PATH_DASHBOARD.agentManage.list,
              element: <ListAdmin />,
            },

            {
              path: PATH_DASHBOARD.agentManage.new,
              element: <CreateAdmin />,
            },

            {
              path: PATH_DASHBOARD.agentManage.detail,
              element: <DetailAdmin />,
            },
            {
              path: PATH_DASHBOARD.agentManage.edit,
              element: <EditAdmin />,
            },
          ],
        },
        {
          path: "",
          children: [
            {
              path: PATH_DASHBOARD.statistic.user,
              element: <UserStatistic />,
            },
            {
              path: PATH_DASHBOARD.statistic.category,
              element: <CategoryStatistic />,
            },
          ],
        },
      ],
    },
    // Main Routes
    {
      path: "*",
      element: <LogoOnlyLayout />,
      children: [
        { path: "500", element: <Page500 /> },
        { path: "404", element: <Page404 /> },
        { path: "403", element: <Page403 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Navigate to={PATH_AUTH.login} replace />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
// login
const Login = Loadable(lazy(() => import("../../auth/login/Login")));
const ForgotPassword = Loadable(
  lazy(() => import("../../auth/forgot-password/ResetPassword"))
);
const Register = Loadable(lazy(() => import("../../auth/register/Register")));

// merchant
const AccountGeneral = Loadable(
  lazy(() => import("../../profile/account-general/AccountGeneral"))
);
const AccountChangePassword = Loadable(
  lazy(
    () => import("../../profile/account-change-password/AccountChangePassword")
  )
);

// category
const ListCategory = Loadable(lazy(() => import("../../category/index")));
const CreateCategory = Loadable(
  lazy(() => import("../../category/category-create/index"))
);
const EditCategory = Loadable(
  lazy(() => import("../../category/category-edit/index"))
);
const DetailCategory = Loadable(
  lazy(() => import("../../category/category-detail/index"))
);

// user
const ListUser = Loadable(lazy(() => import("../../user/index")));
const DetailUser = Loadable(lazy(() => import("../../user/user-detail/index")));

// admin

const ListAdmin = Loadable(lazy(() => import("../../admin/index")));
const DetailAdmin = Loadable(
  lazy(() => import("../../admin/admin-detail/index"))
);
const CreateAdmin = Loadable(
  lazy(() => import("../../admin/admin-create/index"))
);
const EditAdmin = Loadable(lazy(() => import("../../admin/admin-edit/index")));

// statistic
const UserStatistic = Loadable(
  lazy(() => import("../../analytics/analytics_user/index"))
);

const CategoryStatistic = Loadable(
  lazy(() => import("../../analytics/analytics_category/index"))
);

const Page500 = Loadable(lazy(() => import("../pages/Page500")));
const Page403 = Loadable(lazy(() => import("../pages/Page403")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
