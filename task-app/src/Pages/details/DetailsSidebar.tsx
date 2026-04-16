import AssignedMetadata from "./AssignedMetadata";
import DatePicker from "./DatePicker";
import VisualAttachments from "./VisualAttachments";

const DetailsSidebar = () => {
  return (
    <div className="col-span-1 space-y-6">
      <DatePicker />
      <AssignedMetadata />
      <VisualAttachments />
    </div>
  );
};

export default DetailsSidebar;
