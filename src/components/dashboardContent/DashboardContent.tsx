import DashboardHeader from "./DashboardHeader";
import MainContent from "./MainContent";

function DashboardContent() {
  return (
    <main className="col-span-8">
      <DashboardHeader />
      <MainContent />
    </main>
  );
}

export default DashboardContent;
