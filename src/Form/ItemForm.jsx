import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function ItemForm({report, submit, emoji, color, bgcolor, hover, items, setItems}) 
{
  const navigate = useNavigate()

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

  const newItem = {
    id: Date.now(),
    name: formData.itemName,
    category: formData.category,
    description: formData.description,
    location: formData.location,
    date: formData.dateLost,
    image: formData.image,
    email: formData.email,
    type: report.includes("Lost") ? "lost" : "found",
  };

  setItems((prevItems) => {
    const updatedItems = [...prevItems, newItem];
    console.log("Updated items:", updatedItems);
    return updatedItems;
  });

  navigate("/");
}


  return (
   <div className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">

    <button 
      className="text-gray-600 hover:text-blue-600 mb-8"
      onClick={() => navigate('/')}
    >
      ← Back
    </button>

    <div className="flex items-center justify-center gap-4 mb-10">
      <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center text-2xl`}>
        {emoji}
      </div>

      <h1 className="text-3xl font-bold text-gray-800">
        {report}
      </h1>
    </div>

    <form className="space-y-6" onSubmit={handleSubmit}>

      {/* Item Name */}
      <div>
        <label className="block mb-2 font-medium" htmlFor="name">
          Item Name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="name"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          placeholder="e.g. iPhone 12"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category */}
      <div>
      <label className="block mb-2 font-medium">
        Category <span className="text-red-500">*</span>
      </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select Category</option>
          <option value="phone">Phone</option>
          <option value="laptop">Laptop</option>
          <option value="wallet">Wallet</option>
          <option value="bag">Bag</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label 
          className="block mb-2 font-medium"
        >
          Description <span className="text-red-500">*</span>
        </label>

        <textarea
          name="description"
          rows="5"
          placeholder="Describe the item in detail..."
          value={formData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
      </div>

      {/* Two Column */}
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label 
            className="block mb-2 font-medium"
          >
            Location Lost
          </label>

          <input
            type="text"
            name="location"
            placeholder="Where did you lose it?"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Date Lost
          </label>

          <input
            type="date"
            name="dateLost"
            value={formData.dateLost}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
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
            name='image'
            onChange={handleChange}
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <button
        type='submit'
        className={`w-full ${bgcolor} hover:bg-${hover}-700 text-white py-3 rounded-lg font-semibold transition`}
      >
        {submit}
      </button>

    </form>

  </div>
</div>
  );
}
