import { Plus } from "lucide-react";
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

      <div className="mt-auto">
        <button
          className="w-full py-3 px-4 action-gradient text-white rounded-full font-semibold flex items-center justify-center gap-2 ghost-shadow hover:scale-[1.02] transition-transform active:scale-95">
          <Plus />
          <span>Add New Task</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
