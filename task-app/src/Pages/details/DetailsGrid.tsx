import DetailsSidebar from "./DetailsSidebar";
import MainBodyContent from "./MainBodyContent";

const DetailsGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <MainBodyContent />
      <DetailsSidebar />
    </div>
  );
};

export default DetailsGrid;
