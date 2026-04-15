import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const MainLayout = () => {
  return (
    <>
      <SideBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default MainLayout;
