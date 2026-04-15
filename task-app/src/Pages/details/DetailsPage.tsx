import Breadcrumbs from "./Breadcrumbs";
import DetailsGrid from "./DetailsGrid";
import DetailsHeader from "./DetailsHeader";
import FooterActions from "./FooterActions";
import MobileFAB from "./MobileFAB";
import TaskTitleHeader from "./TaskTitleHeader";

const DetailsPage = () => {
  return (
    <>
      <DetailsHeader />

      <main className="flex-grow lg:ml-64 p-8 md:p-12 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs />
          <TaskTitleHeader />
          <DetailsGrid />
          <FooterActions />
        </div>
      </main>
      <MobileFAB />
    </>
  );
};

export default DetailsPage;
