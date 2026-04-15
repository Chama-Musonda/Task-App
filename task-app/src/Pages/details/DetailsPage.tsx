import Breadcrumbs from "./Breadcrumbs";
import DetailsHeader from "./DetailsHeader";
import TaskTitleHeader from "./TaskTitleHeader";

const DetailsPage = () => {
  return (
    <>
      <DetailsHeader />
      <main className="flex-grow lg:ml-64 p-8 md:p-12 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs />
          <TaskTitleHeader />
        </div>
      </main>
    </>
  );
};

export default DetailsPage;
