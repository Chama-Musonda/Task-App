import NavBar from "./NavBar";

const SideBar = () => {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 dark:bg-slate-950 flex flex-col p-6 border-r border-transparent z-50">
      <div className="mb-10">
        <h1 className="text-xl font-black font-label text-indigo-600 dark:text-indigo-400 tracking-tighter">
          TaskFlow
        </h1>
        <p className="text-xs text-on-surface-variant/60 font-medium tracking-wide">
          The Intentional Calm
        </p>
      </div>

      <NavBar />
    </aside>
  );
};

export default SideBar;
