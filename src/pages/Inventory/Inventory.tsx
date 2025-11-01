import Navbar from "../../components/Navbar";
import { Search, ScanQrCode, Trash2, Pencil } from "lucide-react";
import MainBtn from "../../components/Buttons/MainBtn";
import { useState } from "react";
import AddMedicineModal from "../../components/modals/AddMedicineModel";

const Inventory = () => {
  const [open, setOpen] = useState(false);

  function handleAdd(data: any) {
    console.log("New medicine:", data);
    // TODO: call your API here
  }

  return (
    <>
      {/* navbar  */}
      <Navbar
        title="Inventory Management"
        descripition="Manage your pharmacy's medicine inventory and stock levels."
      />

      <div className="flex flex-col gap-10 p-6 flex-1">
        {/* // search box + 2 buttons  */}
        <div className="flex justify-between">
          {/* search box  */}
          <div
            className="flex justify-center items-center border border-gray-300
            rounded gap-1
            "
          >
            <Search className="text-lg text-gray-400 pl-2.5" />
            <input
              type="text"
              placeholder="Search medicines..."
              className="flex gap-2 px-3 py-2 rounded "
            />
          </div>

          {/* 2 buttons  */}
          <div className="flex gap-2.5">
            {/* btn 1  */}
            <div
              className="flex items-center gap-2 text-xl text-black bg-white 
                  px-7 py-2 rounded-xl font-ui hover:bg-gray-300 transition
                  cursor-pointer border border-gray-300 duration-300 active:scale-95"
            >
              <ScanQrCode />
              <p>Scan QR Code</p>
            </div>
            {/* btn 2  */}
            <div>
              <button onClick={() => setOpen(true)}>
                <MainBtn
                  name="Add Medicine"
                  btnClassName="flex transition-all duration-300 active:scale-95 items-center gap-2 text-xl 
        text-white bg-primary/80 
       px-5 py-2 rounded-xl  hover:bg-primary/90 
       cursor-pointer"
                />
              </button>
              <AddMedicineModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onSubmit={handleAdd}
              />
            </div>
          </div>
        </div>

        {/* main table  */}
        <div className="border p-6 rounded-xl border-gray-300 flex flex-col gap-10">
          <h1 className="font-ui font-bold text-3xl">Medicine Inventory</h1>

          <div className="grid grid-cols-12 ">
            <div className="overflow-x-auto  col-span-12">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 text-gray-400">Name</th>
                    <th className="text-left py-2 px-3 text-gray-400">
                      Category
                    </th>
                    <th className="text-left py-2 px-3 text-gray-400">
                      Dosage
                    </th>
                    <th className="text-left py-2 px-3 text-gray-400">Price</th>
                    <th className="text-left py-2 px-3 text-gray-400">Stock</th>
                    <th className="text-left py-2 px-3 text-gray-400">
                      Status
                    </th>
                    <th className="text-left py-2 px-3 text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className=" whitespace-nowrap">
                    <td className="text-left py-2.5 px-3">Lorem ipsum</td>
                    <td className="text-left py-2.5 px-3">Tablet</td>
                    <td className="text-left py-2.5 px-3">250mg</td>
                    <td className="text-left py-2.5 px-3">RS. 550</td>
                    <td className="text-left py-2.5 px-3">1100</td>
                    <td className="text-left py-2.5 px-3">
                      <div>
                        <span className="rounded-xl px-2 py-1 bg-blue-500 text-white">
                          {" "}
                          In Stock
                        </span>
                      </div>
                    </td>
                    <td className="text-left py-2.5 px-3    ">
                      <div className="flex flex-row gap-3">
                        <span className="p-1.5 rounded hover:bg-gray-100 cursor-pointer">
                          <Pencil height={20} width={20} />
                        </span>
                        <span className="p-1.5 rounded hover:bg-gray-100 cursor-pointer">
                          <Trash2 height={20} width={20} />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
