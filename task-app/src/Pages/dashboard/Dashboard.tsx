import QuickAddTask from "./QuickAddInput";
import TaskSection from "./TaskSection";
import { type Task } from "../../types/task";

const Dashboard = () => {
  const tasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "Description 1",
      status: 'completed',
      dueDate: new Date(),
      priority: "low",
      category: "Category 1",
      attachments: [],
      subTasks: [],
      reminders: {
        enabled: false,
        date: null,
      },
      assignedTo: "User 1",
      createdDate: new Date(),
      updatedDate: null
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description 2",
      status: 'pending',
      dueDate: new Date(),
      priority: "medium",
      category: "Category 2",
      attachments: [],
      subTasks: [],
      reminders: {
        enabled: false,
        date: null,
      },
      assignedTo: "User 2",
      createdDate: new Date(),
      updatedDate: null
    },
    {
      id: "3",
      title: "Task 3",
      description: "Description 3",
      status: 'in_progress',
      dueDate: new Date(),
      priority: "high",
      category: "Category 3",
      attachments: [],
      subTasks: [],
      reminders: {
        enabled: false,
        date: null,
      },
      assignedTo: "User 3",
      createdDate: new Date(),
      updatedDate: null
    },
  ]

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

      <TaskSection tasks={tasks}/>
    </div>
  );
};

export default Dashboard;
