import DashboardHeader from "./dashboardContent/DashboardHeader";
import MainContent from "./dashboardContent/MainContent";

function DashboardContent() {
  return (
    <main className="col-span-8">
      <DashboardHeader />
      <MainContent />
    </main>
  );
}

export default DashboardContent;
