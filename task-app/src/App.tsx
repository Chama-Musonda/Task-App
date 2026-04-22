import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./Pages/dashboard/Dashboard";
import DetailsPage from "./Pages/details/DetailsPage";
import LandingPage from "./Pages/landing/LandingPage";
import SignInPage from "./Pages/signin/SignInPage";

function App() {
  return (
    <div className="bg-background font-body text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <Routes>
        <Route path="/" element={<LandingPage />}/>

        <Route path="/signin/:action" element={<SignInPage />} />
        
        <Route element={<MainLayout showTopBar={true}/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<MainLayout showTopBar={false}/>}>
          <Route path="/task-details/:id" element={<DetailsPage />} />
        </Route>

        <Route path="*" element={<div className="h-screen flex justify-center items-center">404</div>} />
      </Routes>
    </div>
  );
}

export default App;
