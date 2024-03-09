import { Outlet } from "react-router-dom";
import { OutletContainer } from "./components/OutletContainer/OutletContainer";

export const App = () => {
  return (
    <OutletContainer>
      <Outlet />
    </OutletContainer>
  );
};
