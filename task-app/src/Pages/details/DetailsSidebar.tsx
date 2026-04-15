import AssignedMetadata from "./AssignedMetadata";
import DatePicker from "./DatePicker";
import VisualAttachments from "./VisualAttachments";

const DetailsSidebar = () => {
  return (
    <div className="space-y-6">
      <DatePicker />
      <DetailsSidebar />
      <AssignedMetadata />
      <VisualAttachments />
    </div>
  );
};

export default DetailsSidebar;
