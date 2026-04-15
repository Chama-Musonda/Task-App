import { CircleCheck } from "lucide-react";

const TaskTitleHeader = () => {
  return (
    <div className="mb-12">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-4">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            High Priority
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-background tracking-tight leading-tight">
            Revitalize the Brand Identity for Project Echo
          </h1>
        </div>
        <button className="w-14 h-14 rounded-full border-2 border-outline-variant flex items-center justify-center text-outline-variant hover:border-primary hover:text-primary transition-all duration-300">
          <CircleCheck className="text-[32px]" />
        </button>
      </div>
    </div>
  );
};

export default TaskTitleHeader;
