import AppLayout from "./components/AppLayout";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <SideBar />
      <MainContent />
    </div>
  );
}

export default App;
