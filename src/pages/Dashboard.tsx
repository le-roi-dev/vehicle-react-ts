import DashboardTabs from "../components/Dashboard/DashboardTabs";
import DefaultLayout from "../layout/DefaultLayout";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <div className="bg-[#f2f8fc]">
        <div className="bg-[#ebf2ff] p-6 rounded-2xl">
          <div className="text-4xl font-bold">Insured Your <span className="text-orange-400">Vehicle</span></div>
          <div className="mt-4">
            Neque porro quisquam est qui dolorem ipsum quia dolor
          </div>
          <button className="mt-6 bg-[#515fd6] text-white py-4 px-6 text-2xl rounded-xl">Secure My Vehicle</button>
        </div>
        <div className="bg-white mt-6 rounded-2xl">
          <div className="flex justify-between items-center py-3 px-7">
            <div className="font-bold text-2xl">My Claims</div>
            <button className="bg-orange-400 px-7 py-3 text-white rounded-lg text-base">New Claim</button>
          </div>
          <div className="px-7">
            <DashboardTabs />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
