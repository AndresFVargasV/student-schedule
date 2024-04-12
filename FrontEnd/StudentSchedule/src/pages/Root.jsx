import { Outlet } from "react-router-dom";
import Navegation from "../components/Navegation";

const Root = () => {
  return (
    <>
      <Navegation />
      <Outlet />
    </>
  );
};

export default Root;
