import PanelLayout from "../layout";
import UserLoginLayout from "../layout/login";
import ShowModal from "../pages/show-modal";
import AkoChart from "../pages/chart";
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";
import TableUser from "../pages/user-table";
import UserLogin from "../pages/userLogin";

export default [
  {
    path: "/",
    component: Dashboard,
    layout: PanelLayout,
  },

  {
    path: "login",
    component: UserLogin,
    layout: UserLoginLayout,
  },

  {
    path: "users",
    component: TableUser,
    layout: PanelLayout,
  },
  {
    path: "modal",
    component: ShowModal,
    layout: PanelLayout,
  },
  {
    path: "/chart",
    component: AkoChart,
    layout: PanelLayout,
  },
  {
    path: "/profile",
    component: Profile,
    layout: PanelLayout,
  },
];
