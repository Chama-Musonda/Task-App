import { Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { type Task } from "../../types/task";
import Checkbox from "../../components/Checkbox";
import Badge from "../../components/Badge";

const TaskItem = ({ task }: { task: Task }) => {
  const { id, title, status, dueDate, priority, category } = task
  const isCompleted = status !== 'in_progress' && status !== 'pending'
  return (
    <>
      <Link to={`/task-details/${id}`}>
        <div className={`group flex items-center justify-between ${!isCompleted ? 'bg-surface-container-lowest' : 'bg-surface-dim/40 ghost-shadow hover:bg-surface-bright'} p-6 rounded-xl transition-colors duration-200`}>
        <div className="flex items-center gap-5">
          {/* <button className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
            <CircleCheck className="text-[14px]" />
          </button> */}
          <Checkbox checked={isCompleted} whenClicked={() => {}} />
          <div>
            <h4 className={`font-body text-lg font-medium ${isCompleted ? 'text-on-surface-variant/50 line-through' : 'text-on-surface'}`}>
              {title}
            </h4>
            <div className="flex items-center gap-3 mt-1">
              {/* <span className="text-on-surface-variant/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter border border-outline-variant/20">
                Personal
              </span> */}
              <Badge 
                label={category} 
                variant="category" 
                size="sm" 
                className={isCompleted ? "text-on-surface-variant/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter border border-outline-variant/20" : 'bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter'} 
                colorScheme={isCompleted ? "gray" : "indigo"} />
              <Badge 
              label={priority} 
              variant="priority" 
              size="sm" 
              className={isCompleted ? "text-on-surface-variant/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter border border-outline-variant/20" : 'bg-primary-container text-on-primary-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter'} 
              colorScheme={isCompleted ? "gray" : "indigo"} />
                <span className="text-on-surface-variant text-xs flex items-center gap-1">
                  <Calendar className="text-[7px] text-on-surface-variant" />
                  {dueDate.toDateString()}
                </span>
            </div>
          </div>
        </div>
        <button className="p-2 text-on-surface-variant/20">
          <Star />
        </button>
      </div>
      </Link>
    </>
  );
};

export default TaskItem;
