import React from "react";
import Modal from "react-modal";

type MedicineForm = {
  name: string;
  category: string;
  dosage: string;
  price: number;
  stockQty: number;
  batch?: string;
  expiry?: string;
  supplierId?: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MedicineForm) => void;
}

const AddMedicineModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSubmit({
      name: String(fd.get("name") || ""),
      category: String(fd.get("category") || ""),
      dosage: String(fd.get("dosage") || ""),
      price: Number(fd.get("price") || 0),
      stockQty: Number(fd.get("stockQty") || 0),
      batch: String(fd.get("batch") || ""),
      expiry: String(fd.get("expiry") || ""),
      supplierId: String(fd.get("supplierId") || ""),
    });
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} // enables ESC + overlay click
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      closeTimeoutMS={150}
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Add New Medicine</h2>
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
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Row 1 */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Medicine Name
          </label>
          <input
            name="name"
            placeholder="Enter medicine name"
            required
            className="w-full border border-gray-400 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Category</label>
          <input
            name="category"
            placeholder="e.g., Pain Relief, Antibiotics"
            className="w-full border border-gray-400 rounded-lg px-3 py-2"
          />
        </div>

        {/* Row 2 */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">Dosage</label>
          <input
            name="dosage"
            placeholder="e.g., 500mg, 10ml"
            className="w-full border border-gray-400 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">Price ($)</label>
          <input
            name="price"
            type="number"
            min="0"
            step="0.01"
            defaultValue={0}
            className="w-full border border-gray-400 rounded-lg px-3 py-2"
          />
        </div>

        {/* Row 3 */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Stock Quantity
          </label>
          <input
            name="stockQty"
            type="number"
            min="0"
            defaultValue={0}
            className="w-full border border-gray-400 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Batch Number (Optional)
          </label>
          <input
            name="batch"
            placeholder="Enter batch number"
            className="w-full border border-gray-400 rounded-lg px-3 py-2"
          />
        </div>

        {/* Row 4 */}
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Expiry Date (Optional)
          </label>
          <input
            name="expiry"
            type="date"
            className="w-full border border-gray-400 rounded-lg px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 mb-1">
            Supplier ID (Optional)
          </label>
          <input
            name="supplierId"
            placeholder="Enter supplier ID"
            className="w-full border border-gray-400 rounded-lg px-3 py-2"
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
            Add Medicine
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddMedicineModal;
