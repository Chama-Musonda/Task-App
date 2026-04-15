import { Calendar } from "lucide-react";

const DatePicker = () => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(42,52,57,0.04)]">
      <h3 className="text-on-surface-variant font-label text-xs font-bold uppercase tracking-widest mb-4">
        Due Date
      </h3>
      <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
        <Calendar className="text-primary" />
        <span className="text-on-surface font-medium">October 24, 2023</span>
      </div>
    </div>
  );
};

export default DatePicker;
