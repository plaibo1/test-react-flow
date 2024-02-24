import { Outlet } from "react-router-dom";
import { ReactFlowProvider } from "reactflow";
import { OutletContainer } from "./components/OutletContainer/OutletContainer";

export const App = () => {
  return (
    <ReactFlowProvider>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </ReactFlowProvider>
  );
};
