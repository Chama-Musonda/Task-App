import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./Pages/dashboard/Dashboard";
import DetailsPage from "./Pages/details/DetailsPage";

function App() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route path="/task-details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
