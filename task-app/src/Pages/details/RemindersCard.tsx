import { BellRing } from "lucide-react";

const RemindersCard = () => {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0px_12px_32px_rgba(42,52,57,0.04)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BellRing className="material-symbols-outlined text-secondary" />
          <span className="text-on-surface font-medium">Remind me</span>
        </div>
        <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer flex items-center px-1">
          <div className="w-4 h-4 bg-on-primary rounded-full shadow-sm translate-x-6"></div>
        </div>
      </div>
      <p className="text-xs text-on-surface-variant mt-3 leading-relaxed">
        Notifications will be sent 30 minutes before the deadline.
      </p>
    </div>
  );
};

export default RemindersCard;
