import { Outlet } from "react-router-dom";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

const MainLayout = ({ showTopBar }: {showTopBar: boolean}) => {
  return (
    <>
      <SideBar />

      <MainContent showTopBar={showTopBar}>
        <Outlet />
      </MainContent>
    </>
  );
};

export default MainLayout;
