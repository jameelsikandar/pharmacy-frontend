import { Trash2 } from "lucide-react";
import MainBtn from "../../components/Buttons/MainBtn";
import Navbar from "../../components/Navbar";

const POS = () => {
  const sales = [
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
      <Navbar
        title="Point of Sale"
        descripition="Process sales and manage transactions efficiently."
      />

      {/* main div  */}
      <div className="flex flex-col flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* left side */}
          <div className="col-span-8 flex flex-col gap-6">
            {/* Add Items to Sale */}
            <div className="bg-white flex flex-col border p-6 gap-5 border-black/10 rounded-xl">
              <h1 className="text-2xl font-ui font-bold">Add Items to Sale</h1>
              <div className="grid grid-cols-3 gap-3 w-full">
                {/* Medicine Select */}
                <div className="w-full">
                  <label
                    htmlFor="medicine"
                    className="block text-gray-700 text-sm mb-2"
                  >
                    Select Medicine
                  </label>
                  <select
                    id="medicine"
                    name="medicine"
                    className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-white text-gray-700 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" className="text-sm text-gray-300">
                      -- Choose Medicine --
                    </option>
                  </select>
                </div>

                {/* Quantity Input */}
                <div className="w-full">
                  <label
                    htmlFor="quantity"
                    className="block text-gray-700 text-sm mb-2"
                  >
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    className="w-full py-2 px-3 border border-gray-300 rounded-lg bg-white text-gray-700 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Add to Cart Button */}
                <div className="w-full flex items-end">
                  <MainBtn
                    name="Add to Cart"
                    btnClassName="flex justify-center w-full items-center gap-2 text-sm font-medium 
            text-white bg-primary/80 px-4 py-2 rounded-lg 
            hover:bg-primary/90 cursor-pointer 
            transition-all duration-300 active:scale-95"
                  />
                </div>
              </div>
            </div>

            {/* Cart Items - Now Separate */}
            <div className="bg-white flex flex-col border p-6 gap-5 border-black/10 rounded-xl">
              <h1 className="font-ui font-bold text-2xl">Cart Items</h1>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3">Medicine</th>
                      <th className="text-left py-2 px-3">Price</th>
                      <th className="text-left py-2 px-3">Quantity</th>
                      <th className="text-left py-2 px-3">Subtotal</th>
                      <th className="text-right py-2 px-3">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {sales.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="text center py-6 text-gray-500"
                        >
                          No items in cart
                        </td>
                      </tr>
                    ) : (
                      sales.map((sale) => (
                        <tr key={sale.id}>
                          <td
                            className="text-left py-2 
                            px-3
                            "
                          >
                            <span className="rounded font-ui p-1">
                              MEDICINE
                            </span>
                          </td>

                          <td className="text-left py-2 px-3">
                            <div className="flex flex-col font bold font-ui text-gray-700">
                              <span className="font-medium">PRICE</span>
                            </div>
                          </td>

                          <td className="text-left py-2 px-3">
                            <div className="flex flex-col  font-ui">
                              <span className="">Quantity</span>
                            </div>
                          </td>

                          <td className="text-left py-2 px-3">Subtotal</td>

                          <td
                            className="text-right py-2 px-3 
        
                          "
                          >
                            <span className="flex justify-end pr-5 ">
                              <Trash2 className="hover:bg-gray-400 cursor-pointer" />
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* right div  */}
          <div className="col-span-4 flex flex-col gap-6 rounded-xl">
            {/* upper div  */}
            <div className="bg-white flex flex-col border border-black/10 p-6 rounded-xl">
              <h1 className="font-ui font-bold text-2xl">Sale Summary</h1>
              <div className="flex flex-col gap-4">
                <div className=" border-b border-gray-300 py-3">
                  <label htmlFor="client" className="text-gray-700 text-sm">
                    Select Client (Optional)
                  </label>
                  <select
                    name="client"
                    id="client"
                    className="w-full py-2 px-3 border border-gray-300 rounded-lg
                bg-white text-gray-700 focus:outline-none focus:ring-2
                focus:ring-blue-500 focus:border-blue-500 "
                  >
                    <option value="client" className="text-sm text-gray-300">
                      -- Walk-in customer --
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between font-ui text-lg">
                    <h3>Items</h3>
                    <p>0</p>
                  </div>
                  <div className="flex flex-row justify-between font-ui text-lg">
                    <h3>Total Quantity:</h3>
                    <p>0</p>
                  </div>
                  <div className="flex flex-row justify-between font-ui text-lg font-bold">
                    <h3>Total Amount:</h3>
                    <p>0</p>
                  </div>
                </div>

                <MainBtn
                  name="Complete Sale"
                  btnClassName="
                flex justify-center w-full items-center gap-2 text-xl font-medium 
                    text-white bg-primary/80 px-4 py-2 rounded-lg 
                    hover:bg-primary/90 cursor-pointer 
                    transition-all duration-300 active:scale-95
              "
                />
              </div>
            </div>

            {/* lower   */}
            <div
              className="bg-white flex flex-col border border-black/10 
              justify-between p-6 rounded-xl gap-7"
            >
              <h1 className="font-ui font-bold text-2xl">Quick Actions</h1>

              <MainBtn
                name="Clear Cart"
                btnClassName="
                    flex justify-center w-full items-center gap-2 text-xl font-medium 
                    text-black bg-white px-4 py-2 rounded 
                    border border-gray-300
                    cursor-pointer 
                    transition-all duration-300 active:scale-95
              "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default POS;
