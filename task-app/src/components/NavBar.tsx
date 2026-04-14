import { Clipboard, Star, CheckCircle2Icon } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex-1 gap-2">
      <a
        className="flex items-center gap-3 text-indigo-700 dark:text-indigo-300 font-semibold bg-indigo-50 dark:bg-indigo-900/30 rounded-lg px-4 py-2 hover:translate-x-1 transition-transform duration-200 active:scale-98"
        href="#"
      >
        <Clipboard />
        <span className="font-body text-sm font-medium">My Tasks</span>
      </a>
      <a
        className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg px-4 py-2 hover:translate-x-1 transition-transform duration-200 active:scale-98"
        href="#"
      >
        <Star />
        <span className="font-body text-sm font-medium">Important</span>
      </a>
      <a
        className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg px-4 py-2 hover:translate-x-1 transition-transform duration-200 active:scale-98"
        href="#"
      >
        <CheckCircle2Icon />
        <span className="font-body text-sm font-medium">Completed</span>
      </a>
    </nav>
  );
};

export default NavBar;
