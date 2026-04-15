import { Search, User } from "lucide-react";

const DetailsHeader = () => {
  return (
    <header className="w-full top-0 sticky bg-slate-50 dark:bg-slate-900 z-50 tonal-shift flat no shadows">
      <nav className="flex justify-between items-center px-8 py-4 w-full">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tighter font-headline">
            TaskFlow
          </span>
        </div>
        <div className="flex items-center gap-6">
          {/* remember to add the selectors "hidden md:flex" for prod */}
          <div className="flex gap-8 items-center">
            <a
              className="text-indigo-700 dark:text-indigo-300 font-bold border-b-2 border-indigo-600 py-1 font-headline font-semibold tracking-tight"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 py-1 font-headline font-semibold tracking-tight transition-colors"
              href="#"
            >
              Calendar
            </a>
            <a
              className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 py-1 font-headline font-semibold tracking-tight transition-colors"
              href="#"
            >
              Analytics
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors rounded-full active:scale-90 duration-200">
              <Search />
            </button>
            <button className="p-2 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors rounded-full active:scale-90 duration-200">
              <User />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DetailsHeader;
