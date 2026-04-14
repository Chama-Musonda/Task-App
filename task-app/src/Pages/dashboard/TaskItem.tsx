import { CircleCheck, Star } from "lucide-react";

const TaskItem = () => {
  return (
    <>
      <div className="group flex items-center justify-between bg-surface-container-lowest p-6 rounded-xl ghost-shadow hover:bg-surface-bright transition-colors duration-200">
        <div className="flex items-center gap-5">
          <button className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center hover:border-primary transition-colors"></button>
          <div>
            <h4 className="font-body text-lg font-medium text-on-surface">
              Finalize the brand identity guide
            </h4>
            <div className="flex items-center gap-3 mt-1">
              <span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                Today
              </span>
              <span className="text-on-surface-variant text-xs flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-[14px]"
                  data-icon="schedule"
                >
                  schedule
                </span>
                10:00 AM
              </span>
            </div>
          </div>
        </div>
        <button className="p-2 text-on-surface-variant/40 hover:text-primary transition-colors">
          <Star />
        </button>
      </div>

      <div className="group flex items-center justify-between bg-surface-container-lowest p-6 rounded-xl ghost-shadow hover:bg-surface-bright transition-colors duration-200">
        <div className="flex items-center gap-5">
          <button className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center hover:border-primary transition-colors"></button>
          <div>
            <h4 className="font-body text-lg font-medium text-on-surface">
              Weekly sync with the design team
            </h4>
            <div className="flex items-center gap-3 mt-1">
              <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                Meeting
              </span>
              <span className="text-on-surface-variant text-xs flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-[14px]"
                  data-icon="event"
                >
                  event
                </span>
                Oct 24
              </span>
            </div>
          </div>
        </div>
        <button className="p-2 text-indigo-500">
          <Star style={{ fontVariationSettings: "'FILL' 1" }} />
        </button>
      </div>

      <div className="group flex items-center justify-between bg-surface-container-lowest p-6 rounded-xl ghost-shadow hover:bg-surface-bright transition-colors duration-200">
        <div className="flex items-center gap-5">
          <button className="w-6 h-6 rounded-full border-2 border-outline-variant flex items-center justify-center hover:border-primary transition-colors"></button>
          <div>
            <h4 className="font-body text-lg font-medium text-on-surface">
              Review client feedback for TaskFlow mobile
            </h4>
            <div className="flex items-center gap-3 mt-1">
              <span className="bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                Today
              </span>
            </div>
          </div>
        </div>
        <button className="p-2 text-on-surface-variant/40 hover:text-primary transition-colors">
          <Star />
        </button>
      </div>

      <div className="group flex items-center justify-between bg-surface-dim/40 p-6 rounded-xl transition-colors duration-200">
        <div className="flex items-center gap-5">
          <button className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
            <CircleCheck className="text-[14px]" />
          </button>
          <div>
            <h4 className="font-body text-lg font-medium text-on-surface-variant/50 line-through">
              Morning meditation and coffee
            </h4>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-on-surface-variant/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter border border-outline-variant/20">
                Personal
              </span>
            </div>
          </div>
        </div>
        <button className="p-2 text-on-surface-variant/20">
          <Star />
        </button>
      </div>
    </>
  );
};

export default TaskItem;
