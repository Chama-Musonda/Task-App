import { Plus } from "lucide-react";

const MobileFAB = () => {
  return (
    <button
      className="lg:hidden fixed bottom-8 right-8 bg-primary text-on-primary px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2 active:scale-95 transition-all z-50"
      style={{
        background: "linear-gradient(135deg, #4d44e3 0%, #4034d7 100%)",
      }}
    >
      <Plus />
      New Task
    </button>
  );
};

export default MobileFAB;
