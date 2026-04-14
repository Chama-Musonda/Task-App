import MobileFAB from "./MobileFAB";
import MobileNavPanel from "./MobileNavPanel";
import TopBar from "./TopBar";

const MainContent = ({ children }) => {
  /* remember to add md:ml-64 to main for prod */
  return (
    <main className="ml-64 min-h-screen relative">
      <TopBar />

      <div className="max-w-4xl mx-auto px-8 pt-12 pb-24">{children}</div>
      <MobileNavPanel />
      <MobileFAB />
    </main>
  );
};

export default MainContent;
