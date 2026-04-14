import TopBar from "./TopBar";

const MainContent = () => {
  /* remember to add md:ml-64 to main for prod */
  return (
    <main className="ml-64 min-h-screen relative">
      <TopBar />
    </main>
  );
};

export default MainContent;
