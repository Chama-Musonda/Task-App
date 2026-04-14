import { Plus, Calendar, ChevronRight } from "lucide-react";

const QuickAddTask = () => {
  return (
    <section className="mb-16">
      <div className="group relative bg-surface-container-low rounded-xl p-2 flex items-center transition-all duration-300 focus-within:bg-primary-container/30">
        <button className="m-3 bg-primary rounded-full">
          <Plus className="text-white" />
        </button>

        <input
          className="flex-1 bg-transparent border-none focus:ring-0 text-lg placeholder:text-on-surface-variant/40 py-4 px-2 font-medium"
          placeholder="Add a new task..."
          type="text"
        />

        <div className="flex gap-2 pr-4">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <Calendar />
          </button>

          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickAddTask;
