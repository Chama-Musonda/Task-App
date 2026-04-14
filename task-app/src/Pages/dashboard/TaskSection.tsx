import TaskItem from "./TaskItem";

const TaskSection = () => {
  return (
    <div className="bg-surface-container-low rounded-[2rem] p-8">
      <div className="flex justify-between items-end mb-8 px-2">
        <h3 className="font-headline text-xl font-semibold text-on-background">
          Today
        </h3>
        <span className="text-label-md font-semibold text-on-surface-variant uppercase tracking-widest text-xs">
          4 Active Tasks
        </span>
      </div>

      <div className="space-y-6">
        <TaskItem />
      </div>
    </div>
  );
};

export default TaskSection;
