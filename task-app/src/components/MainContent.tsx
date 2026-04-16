import MobileFAB from "./MobileFAB";
import MobileNavPanel from "./MobileNavPanel";
import TopBar from "./TopBar";

interface PropsType {
  children: React.ReactNode;
  showTopBar?: boolean;
}

const MainContent = ({ children, showTopBar }: PropsType) => {
  /* remember to add md:ml-64 to main for prod */
  return (
    <main className="ml-64 min-h-screen relative">
      {showTopBar && <TopBar />}

      {showTopBar ? <div className="max-w-4xl mx-auto px-8 pt-12 pb-24">{children}</div> : children}
      <MobileNavPanel />
      <MobileFAB />
    </main>
  );
};

export default MainContent;
