import { Circle, CircleCheck } from "lucide-react";

const SubTaskSection = () => {
  return (
    <div className="bg-surface-container-low p-8 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-on-surface font-headline text-xl font-semibold">
          Sub-tasks
        </h3>
        <button className="text-primary font-semibold text-sm hover:underline flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">add</span>
          Add Sub-task
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-surface-container-lowest p-5 rounded-lg transition-all hover:bg-surface-bright group">
          <Circle className="cursor-pointer hover:text-primary" />
          <span className="text-on-surface font-medium flex-grow">
            Draft new color system
          </span>
          <span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">
            drag_indicator
          </span>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-lowest p-5 rounded-lg transition-all hover:bg-surface-bright group">
          <CircleCheck
            className="text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          />
          <span className="text-on-surface-variant font-medium flex-grow line-through opacity-60">
            Review typography pairings
          </span>
          <span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">
            drag_indicator
          </span>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-lowest p-5 rounded-lg transition-all hover:bg-surface-bright group">
          <Circle className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-primary" />
          <span className="text-on-surface font-medium flex-grow">
            Create sample moodboard for client
          </span>
          <span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">
            drag_indicator
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubTaskSection;
