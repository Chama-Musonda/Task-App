import { Plus } from "lucide-react";

const MobileFAB = () => {
  return (
    <button className="md:hidden fixed bottom-24 right-6 action-gradient text-white h-14 w-14 rounded-full ghost-shadow flex items-center justify-center z-50">
      <Plus />
    </button>
  );
};

export default MobileFAB;
