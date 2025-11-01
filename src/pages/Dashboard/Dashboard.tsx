import {
  Pill,
  UserPlus,
  Plus,
  NotepadText,
  DollarSign,
  ShieldAlert,
  Coins,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import IMetricCard from "../../components/Cards/IMetricCard";
import RecentSalesTable from "../../components/Tables/RecentSale";

const Dashboard = () => {
  const salesData = [
    {
      id: 1,
      receiptNo: "RCP001",
      date: new Date(),
      items: [{ name: "Panadol", quantity: 2, unit: "Boxes", dosage: "500mg" }],
      totalAmount: 12.5,
    },
    {
      id: 2,
      receiptNo: "RCP002",
      date: new Date(),
      items: [{ name: "Disprin", quantity: 1, unit: "Pack", dosage: "300mg" }],
      totalAmount: 5.0,
    },
  ];

  return (
    <>
      {/* navbar  */}
      <Navbar
        title="Dashboard"
        descripition="Welcome back! Here's what's happening at your pharmacy today."
      />

      <div className="flex flex-col overflow-y-auto p-6 gap-5">
        {/* 4 cards  */}
        <div className="grid grid-cols-4 gap-6">
          {/* 1st card  */}

          <IMetricCard
            title="Today's Sales"
            value="$0.00"
            Icon={DollarSign}
            iconClassName="text-green-600"
            subtitle="+12.5% from yesterday"
            subtitleClassName="text-green-600"
          />

          {/* 2st card  */}
          <IMetricCard
            title="Total Medicines"
            value="1"
            Icon={Pill}
            iconClassName="text-blue-600"
            subtitle="Active inventory"
            subtitleClassName="text-blue-600"
          />
          {/* 3st card  */}
          <IMetricCard
            title="Low Stock Items"
            value="0"
            Icon={ShieldAlert}
            iconClassName="text-red-600"
            subtitle="Requires attention"
            subtitleClassName="text-red-600"
          />
          {/* 4st card  */}
          <IMetricCard
            title="Inventory"
            value="0"
            Icon={Coins}
            iconClassName="text-yellow-600"
            subtitle="Total Inventory Value"
            subtitleClassName="text-yellow-600"
          />
        </div>
        {/* recent sales div  plus 2 divs stacked */}
        <div className="grid grid-cols-12 gap-6">
          {/* left side  */}
          <div className="col-span-8 bg-white flex flex-col border p-6 gap-5 border-black/10 rounded-xl">
            {/* table  */}

            <RecentSalesTable
              sales={salesData}
              onViewAll={() => console.log("view all")}
            />
          </div>

          {/* right side  */}
          <div className="col-span-4 flex flex-col gap-6 h-full">
            {/* Top left div */}
            <div className="bg-white flex flex-col border border-black/10 p-6 rounded-xl max-h-60 flex-1">
              <h1 className="font-ui font-bold text-2xl p-2">Quick Actions</h1>
              {/* 3 buttons  */}
              <div className="flex flex-col gap-1.5 items-start p-2 ">
                <button
                  className="flex flex-row gap-3.5 border border-primary/10 w-full py-2 rounded-xl
                    hover:bg-primary/20 cursor-pointer px-2 font-ui duration-300 active:scale-95
                    "
                >
                  <span>
                    <Plus />
                  </span>
                  Add Medicines
                </button>
                <button
                  className="flex flex-row gap-3.5 border border-primary/10 w-full py-2 rounded-xl
                    hover:bg-primary/20 cursor-pointer px-2 font-ui duration-300 active:scale-95
                    "
                >
                  <span>
                    <UserPlus />
                  </span>
                  Add Client
                </button>
                <button
                  className="flex flex-row gap-3.5 border border-primary/10 w-full py-2 rounded-xl
                    hover:bg-primary/20 cursor-pointer px-2 font-ui duration-300 active:scale-95
                    "
                >
                  <span>
                    <NotepadText />
                  </span>
                  Generate Report
                </button>
              </div>
            </div>
            {/* Bottom left div */}
            <div
              className="bg-white flex flex-col border border-black/10 
              justify-between p-6 rounded-xl gap-7"
            >
              <h1 className="font-ui font-bold text-2xl">Alerts</h1>

              <div className="flex flex-col bg-primary/10 rounded-lg py-3 px-2.5 gap-0.5">
                <h1 className="font-ui font-bold text-blue-900">
                  System Status
                </h1>
                <p className="font-ui font-thin text-blue-600">
                  All systems operational
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* invendtory + require actions  */}
        {/*<div className="grid grid-cols-12 gap-3">
          {/* right side inventory overview  */}
        {/* <div className="bg-white col-span-6 p-6 border border-black/10 rounded-xl">
          <h1 className="text-2xl font-ui font-bold p-6">Inventory Overview</h1>

          <div className="flex flex-col p-6 gap-7">
            <div className="flex flex-row justify-between">
              <p className="font-ui font-light">Total Items</p>
              <p>0</p>
            </div>
            <div className="flex flex-row justify-between ">
              <p className="font-ui font-light">Low Stock Items</p>
              <p>0</p>
            </div>
          </div>
          {/* divider  */}
        {/* <div className="border-b border-gray-300"></div> */}
        {/* total invendtory value  */}
        {/* <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-2xl font-ui font-bold">0.00</h1>
            <p className="font-body font-thin">Total Inventory Value</p>
          </div>
        </div> */}
        {/* left side  */}
        {/* <div className="bg-white col-span-6 border border-black/10 rounded-xl p-6">
          <h1 className="text-2xl font-ui font-bold">
            Items Requiring Attention
          </h1>

          <div className="flex justify-center items-center py-7">
            <p className="font-body font-thin">All Items Well Stocked</p>
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Dashboard;
