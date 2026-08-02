import { useState } from "react";

export default function ReportLost() {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    location: "",
    dateLost: "",
    image: null,
    email: "",
  });

  function handleChange(event) {
    const { name, value, files } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData);

    // Later I'll send this data to your backend
  }

  return (
   <div className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">

    <button className="text-gray-600 hover:text-blue-600 mb-8">
      ← Back
    </button>

    <div className="flex items-center justify-center gap-4 mb-10">
      <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-2xl">
        🎒
      </div>

      <h1 className="text-3xl font-bold text-gray-800">
        Report Lost Item
      </h1>
    </div>

    <form className="space-y-6" onSubmit={handleSubmit}>

      {/* Item Name */}
      <div>
        <label className="block mb-2 font-medium">
          Item Name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="e.g. iPhone 12"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-2 font-medium">
          Category <span className="text-red-500">*</span>
        </label>

        <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none">
          <option>Select Category</option>
          <option>Phone</option>
          <option>Laptop</option>
          <option>Wallet</option>
          <option>Bag</option>
          <option>Other</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="block mb-2 font-medium">
          Description <span className="text-red-500">*</span>
        </label>

        <textarea
          rows="5"
          placeholder="Describe the item in detail..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
      </div>

      {/* Two Column */}
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Location Lost
          </label>

          <input
            type="text"
            placeholder="Where did you lose it?"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Date Lost
          </label>

          <input
            type="date"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

      </div>

      {/* Upload */}
      <div>
        <label className="block mb-2 font-medium">
          Upload Image
        </label>

        <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center">

          <input
            type="file"
            className="w-full"
          />

          <p className="text-sm text-gray-500 mt-3">
            PNG, JPG up to 5MB
          </p>

        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-medium">
          Contact Email <span className="text-red-500">*</span>
        </label>

        <input
          type="email"
          placeholder="your@email.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
      >
        Submit Lost Item
      </button>

    </form>

  </div>
</div>
  );
}
