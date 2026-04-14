import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import Dashboard from "./Pages/dashboard/Dashboard";

function App() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <SideBar />
      <MainContent>
        <Dashboard />
      </MainContent>
    </div>
  );
}

export default App;
