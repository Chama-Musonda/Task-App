import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./Pages/dashboard/Dashboard";
import DetailsPage from "./Pages/details/DetailsPage";

function App() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <Routes>
        <Route element={<MainLayout showTopBar={true}/>}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route element={<MainLayout showTopBar={false}/>}>
          <Route path="/task-details/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
