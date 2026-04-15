import { Trash2 } from "lucide-react";

const FooterActions = () => {
  return (
    <div className="mt-12 pt-8 border-t border-surface-container-high flex flex-wrap gap-4 items-center justify-between">
      <button className="flex items-center gap-2 text-error font-semibold hover:bg-error/5 px-4 py-2 rounded-lg transition-colors">
        <Trash2 />
        Delete Task
      </button>
      <div className="flex gap-4">
        <button className="px-8 py-3 rounded-full font-semibold border-2 border-outline-variant hover:bg-surface-container-low transition-colors">
          Archive
        </button>
        <button className="px-8 py-3 rounded-full font-semibold bg-primary text-on-primary shadow-lg shadow-indigo-100 hover:translate-y-[-2px] transition-all">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default FooterActions;
