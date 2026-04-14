import { Search, Bell, User } from "lucide-react";

const TopBar = () => {
  return (
    <header className="w-full fixed top-0 sticky bg-slate-50 flex justify-between items-center px-8 py-4 w-full z-40 transition-colors">
      <div className="flex items-center gap-4 text-2xl font-bold text-indigo-600">
        <span className="hidden">TaskFlow</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative group">
          <input
            type="text"
            className="pl-10 pr-4 py-2.5 bg-surface-low border-none rounded-full focus:ring-primary transition-all outline-none w-64"
            placeholder="Search tasks..."
          />

          <Search className="absolute left-3 top-2.5 text-sm" />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors duration-200">
            <Bell />
          </button>

          <div className="h-10 w-10 rounded-full bg-surface-highest overflow-hidden border-2 border-white ghost-shadow">
            <User className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default TopBar;
