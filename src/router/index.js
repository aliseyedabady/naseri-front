import FormLayOut from "../components/formLayout/index";
import PanelLayout from "../layout";
import UserLoginLayout from "../layout/login";
import TableUser from "../pages/user-table";
import UserLogin from "../pages/userLogin";

export default [
  {
    path: "/",
    component: FormLayOut,
    layout: PanelLayout,
  },

  {
    path: "user-login",
    component: UserLogin,
    layout: UserLoginLayout,
  },

  {
    path: "user-table",
    component: TableUser,
    layout: PanelLayout,
  },
];
