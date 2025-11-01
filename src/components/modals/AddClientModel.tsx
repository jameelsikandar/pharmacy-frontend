import type React from "react";
import Modal from "react-modal";

type AddClientForm = {
  fullName: string;
  contact: string;
  email?: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AddClientForm) => void;
}

const AddClientModel: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSubmit({
      fullName: String(fd.get("name") || " "),
      contact: String(fd.get("contact") || " "),
      email: String(fd.get("email") || " "),
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
        className="bg-white w-xl rounded-2xl shadow-xl p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Add new Client</h2>
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
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              placeholder="Enter full name"
              required
              className="w-full border border-gray-400 rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              name="phoneNumber"
              placeholder="Enter phone number"
              className="w-full border border-gray-400 rounded-lg px-3 py-2"
            />
          </div>

          {/* Row 2 */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email (Optional)
            </label>
            <input
              name="email"
              placeholder="Enter your email"
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
              Add Client
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddClientModel;
