import { Pencil, Search, Trash2 } from "lucide-react";
import MainBtn from "../../components/Buttons/MainBtn";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import AddClientModel from "../../components/modals/AddClientModel";

const Client = () => {
  const [open, setOpen] = useState(false);

  function handleAdd(data: any) {
    console.log("New Client: ", data);
  }

  return (
    <>
      {/* navbar  */}
      <Navbar
        title="Client Management"
        descripition="Manage your pharmacy's client database and prescription history."
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
              placeholder="Search client..."
              className="flex gap-2 px-3 py-2 rounded "
            />
          </div>

          {/* 2 buttons  */}
          <div className="flex gap-2.5">
            {/* btn 2  */}
            <button onClick={() => setOpen(true)}>
              <MainBtn
                name="Add Client"
                btnClassName="flex transition-all duration-300 active:scale-95 items-center gap-2 text-xl 
                text-white bg-primary/80 
                px-8 py-2 rounded-xl  hover:bg-primary/90 
                cursor-pointer"
              />
            </button>
            <AddClientModel
              isOpen={open}
              onClose={() => setOpen(false)}
              onSubmit={handleAdd}
            />
          </div>
        </div>

        {/* main table  */}
        <div className="border p-6 rounded-xl border-gray-300 flex flex-col gap-10">
          <h1 className="font-ui font-bold text-3xl">Clients Directory</h1>

          <div className="grid grid-cols-12 ">
            <div className="overflow-x-auto  col-span-12">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 text-gray-400">Name</th>
                    <th className="text-left py-2 px-3 text-gray-400">
                      Contact
                    </th>
                    <th className="text-left py-2 px-3 text-gray-400">Email</th>
                    <th className="text-left py-2 px-3 text-gray-400">
                      Prescriptions
                    </th>
                    <th className="text-left py-2 px-3 text-gray-400">
                      Joined
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

export default Client;
