import DescriptionArea from "./DescriptionArea";
import SubTaskSection from "./SubtaskSection";

const MainBodyContent = () => {
  return (
    <div className="md:col-span-2 space-y-8">
      <DescriptionArea />
      <SubTaskSection />
    </div>
  );
};

export default MainBodyContent;
