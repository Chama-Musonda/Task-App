import DescriptionArea from "./DescriptionArea";
import SubTaskSection from "./SubtaskSection";

const MainBodyContent = () => {
  {/* remember to add md:col-span-2*/}
  return (
    <div className="col-span-2 space-y-8">
      <DescriptionArea />
      <SubTaskSection />
    </div>
  );
};

export default MainBodyContent;
