import logo from "../assets/medicine.png";
import avatar from "../assets/avatar.png";
import {
  House,
  Pill,
  ShoppingCart,
  Users,
  Truck,
  ChartColumn,
  LogOut,
} from "lucide-react";

const SideBar = () => {
  const menuItems = [
    {
      label: "Dashboard",
      icon: House,
    },
    {
      label: "Inventory",
      icon: Pill,
    },
    {
      label: "Point Of Sale",
      icon: ShoppingCart,
    },
    {
      label: "Clients",
      icon: Users,
    },
    {
      label: "Suppliers",
      icon: Truck,
    },
    {
      label: "Reports",
      icon: ChartColumn,
    },
  ];
  return (
    <>
      <div
        className="h-screen max-h-screen overflow-y-auto w-72 p-4 bg-white flex flex-col 
      border-r-2 border-black/10"
      >
        {/* logo + title  */}
        <div className="h-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={logo} alt="" width={55} height={55} />
            <h1 className="text-4xl font-ui">Pharmacy</h1>
          </div>
        </div>
        {/* divider  */}
        <p className=" w-full border-b border-black/10 mb-6"></p>
        {/* menues  */}
        <div className="flex flex-col gap-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <>
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer ${
                    index === 0
                      ? "bg-primary/80 text-white"
                      : "hover:bg-primary/20"
                  }`}
                >
                  <Icon size={24} />
                  <span className="text-lg">{item.label}</span>
                </div>
              </>
            );
          })}
        </div>
        {/* user profilie  */}
        <div className="mt-auto flex justify-between items-center border-t border-black/10">
          <div className="flex gap-2">
            <img
              src={avatar}
              alt="User avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col mt-2">
              <h1 className="text-sm font-ui font-bold">Jameel</h1>
              <p className="text-sm font-light font-ui">Admin</p>
            </div>
          </div>
          <div>
            <LogOut className="hover:text-red-500 cursor-pointer duration-300 active:scale-95" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
