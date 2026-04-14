import { Search, Bell } from "lucide-react";

const TopBar = () => {
  return (
    <header className="w-full top-0 sticky bg-slate-50 dark:bg-slate-900 flex justify-between items-center px-8 py-4 w-full z-40 transition-colors">
      <div className="flex items-center gap-4">
        <span className="hidden text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tighter">
          TaskFlow
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group">
          <input
            className="pl-10 pr-4 py-2.5 bg-surface-container-low border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 w-64 transition-all outline-none"
            placeholder="Search tasks..."
            type="text"
          />
          <Search className="absolute left-3 top-2.5 text-on-surface-variant text-sm" />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors active:scale-90 duration-200">
            <Bell className="text-on-surface-variant" />
          </button>

          <div className="h-10 w-10 rounded-full bg-surface-container-highest overflow-hidden border-2 border-white ghost-shadow">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              data-alt="close-up portrait of a professional man with a friendly expression in a brightly lit modern office setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQxcZpg_LToNHqBBfaFAYEpOXCAVUaqMx7t34VU5Da9a9BP8tHJaV9_D0piYKPGTEGF-kfCdV7iQFFJbOcuqk-1d1PYzBUPk_a2JFdLT8HiNEwxKeyXJyNbTiDfx-m4jGvGOK6u855YcylFAsoiodYj-eK4U8CNB6zR7mFnY2hiy53aJibvzd1fyhxGYihGzBmrjN4KqYCeUtqQObaDqZ9GjZEVadiZv8Dz_e6hEQJIG40k2v_-TFiDRaF0retsNH76hDAzfEBWL8"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default TopBar;
