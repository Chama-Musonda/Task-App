import QuickAddTask from "./QuickAddInput";
import TaskSection from "./TaskSection";

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 pt-12 pb-24">
      <header className="mb-12">
        <h2 className="font-headline text-5xl font-bold text-on-background tracking-tight mb-2">
          My Tasks
        </h2>
        <p className="text-on-surface-variant text-lg">
          Focus on what matters most today.
        </p>
      </header>

      <QuickAddTask />

      <TaskSection />
    </div>
  );
};

export default Dashboard;
