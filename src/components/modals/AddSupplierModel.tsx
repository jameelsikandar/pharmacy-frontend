import React from "react";
import Modal from "react-modal";

type SupplierForm = {
  companyName: string;
  contactNumber: string;
  email: string;
  licenseNumber: string;
  address: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SupplierForm) => void;
}

const AddSupplierModel: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSubmit({
      companyName: String(fd.get("companyName") || ""),
      contactNumber: String(fd.get("contactNumber") || ""),
      email: String(fd.get("email") || ""),
      licenseNumber: String(fd.get("licenseNumber")),
      address: String(fd.get("address")),
    });
    onClose();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose} // enables ESC + overlay click
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        closeTimeoutMS={150}
        overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        className="bg-white w-xl max-w-3xl rounded-2xl shadow-xl p-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Add New Supplier</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-gray-500 text-3xl cursor-pointer hover:text-gray-800"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Company Name
              </label>
              <input
                name="name"
                placeholder="Enter Company name"
                required
                className="w-full border border-gray-400 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                name="contactNumber"
                placeholder="Enter Contact Number"
                className="w-full border border-gray-400 rounded-lg px-3 py-2"
              />
            </div>

            {/* Row 2 */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Email Address
              </label>
              <input
                name="email"
                placeholder="Enter Email Address"
                className="w-full border border-gray-400 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                License Number
              </label>
              <input
                name="licenseNumber"
                placeholder="Enter License Number"
                className="w-full border border-gray-400 rounded-lg px-3 py-2"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Address</label>
            <textarea
              name="address"
              placeholder="Enter address"
              rows={2} // controls height
              className="w-full border border-gray-400 rounded-lg px-3 py-2 resize-y"
            />
          </div>

          {/* Actions */}
          <div className="md:col-span-2 flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
            >
              Add Supplier
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddSupplierModel;
