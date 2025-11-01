import { Coins, DollarSign, Pill, ShieldAlert } from "lucide-react";
import MainBtn from "../../components/Buttons/MainBtn";
import IMetricCard from "../../components/Cards/IMetricCard";
import Navbar from "../../components/Navbar";

const Reports = () => {
  return (
    <>
      <Navbar
        title="Reports & Analytics"
        descripition="Generate comprehensive reports and analyze your pharmacy's performance."
      />
      {/* main div  */}
      <div className="flex flex-col gap-8 p-6 flex-1 overflow-y-auto">
        {/* generate report  */}
        <div className="border p-6 flex flex-col gap-8 rounded-xl border-gray-300 ">
          <h1 className="font-ui font-bold text-3xl">Report Generator</h1>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-10">
              <div className="flex flex-row gap-2 font-ui text-xl">
                <p>Report Type:</p>
                <div>
                  <select
                    id="report-type"
                    name="report-type"
                    className=" border border-gray-300 rounded bg-white/30 text-gray-700 
                    "
                  >
                    <option value="" className="text-sm text-black">
                      Sales Report
                    </option>
                    <option value="" className="text-sm text-black">
                      Inventory Report
                    </option>
                    <option value="" className="text-sm text-black">
                      Client Report
                    </option>
                    <option value="" className="text-sm text-black">
                      Financial Report
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-2 font-ui text-xl">
                <p>Date Range:</p>
                <div>
                  <select
                    id="date-report"
                    name="date-report"
                    className=" border border-gray-300 rounded bg-white/30 text-gray-700 
                    "
                  >
                    <option value="" className="text-sm text-black">
                      Last 7 days
                    </option>
                    <option value="" className="text-sm text-black">
                      Last 30 days
                    </option>
                    <option value="" className="text-sm text-black">
                      Last 3 months
                    </option>
                    <option value="" className="text-sm text-black">
                      Last year
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <MainBtn
                name="Generate Report"
                btnClassName="
              flex transition-all duration-300 active:scale-95 items-center gap-2 text-xl 
                text-white bg-primary/80 
                px-4 py-1 rounded  hover:bg-primary/90 
                cursor-pointer
              "
              />
            </div>
          </div>
        </div>

        {/* 4 cards  */}
        <div className="grid grid-cols-4 gap-6">
          {/* 1st card  */}

          <IMetricCard
            title="Total Revenue"
            value="$0.00"
            Icon={DollarSign}
            iconClassName="text-green-600"
            subtitle="All time"
            subtitleClassName="text-green-600"
          />

          {/* 2st card  */}
          <IMetricCard
            title="Total Sales"
            value="1"
            Icon={Pill}
            iconClassName="text-blue-600"
            subtitle="Tranactions"
            subtitleClassName="text-blue-600"
          />

          {/* 3st card  */}
          <IMetricCard
            title="Average Sale"
            value="$0.00"
            Icon={Coins}
            iconClassName="text-blue-600"
            subtitle="Per transaction"
            subtitleClassName="text-blue-600"
          />

          {/* 4st card  */}
          <IMetricCard
            title="Low Stock Items"
            value="0"
            Icon={ShieldAlert}
            iconClassName="text-red-600"
            subtitle="Items need restock"
            subtitleClassName="text-red-600"
          />
        </div>
      </div>
    </>
  );
};

export default Reports;
