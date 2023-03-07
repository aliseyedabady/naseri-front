import FormLayOut from "../components/formLayout/index";
import PanelLayout from "../layout";
import UserLoginLayout from "../layout/login";
import ShowModal from "../pages/show-modal";
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
    path: "users",
    component: TableUser,
    layout: PanelLayout,
  },
  {
    path: "modal",
    component: ShowModal,
    layout: PanelLayout,
  },
];
