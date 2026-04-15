import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <nav className="flex items-center gap-4 mb-10 group cursor-pointer">
      <Link to="/" className="flex items-center">
        <MoveLeft className="w-6 h-6 mr-4 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors" />
        <span className="text-on-surface-variant font-label text-sm font-semibold">
          Back to Dashboard / Task Details
        </span>
      </Link>
    </nav>
  );
};

export default Breadcrumbs;
