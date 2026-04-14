import { Star, Clipboard, CheckCircle2Icon } from "lucide-react";

const MobileNavPanel = () => {
  // Dont forget to add md:hidden for prod
  return (
    <nav className="hidden fixed bottom-0 left-0 right-0 bg-slate-50 dark:bg-slate-900 px-6 py-4 flex justify-around items-center z-50 ghost-shadow">
      <a
        className="flex flex-col items-center gap-1 text-indigo-700 dark:text-indigo-300 font-bold border-b-2 border-indigo-600 px-2 pb-1"
        href="#"
      >
        <Clipboard />
      </a>
      <a
        className="flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-indigo-500 px-2 pb-1"
        href="#"
      >
        <Star />
      </a>
      <a
        className="flex flex-col items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-indigo-500 px-2 pb-1"
        href="#"
      >
        <CheckCircle2Icon />
      </a>
    </nav>
  );
};

export default MobileNavPanel;
