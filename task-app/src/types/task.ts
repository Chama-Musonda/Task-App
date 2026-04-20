export interface SubTask {
  id: string;
  title: string;
  status: "pending" | "inProgress" | "completed";
  createdDate: Date;
  updatedDate: Date | null;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: "pending" | "in_progress" | "completed";
  priority: "low" | "medium" | "high";
  category: string;
  attachments: string[];
  subTasks: SubTask[]; 
  reminders: {
    enabled: boolean;
    date: Date | null;
  };
  assignedTo: string;
  createdDate: Date;
  updatedDate: Date | null;
}
