import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Mail,
  MapPin,
  Package,
  Upload,
  X,
} from "lucide-react";

export default function ItemForm({
  report,
  submit,
  emoji,
  color = "bg-blue-500",
  bgcolor = "bg-blue-600",
  hover = "bg-blue-700",
  items = [],
  setItems,
}) {
  const navigate = useNavigate();

  const isLostReport = report.includes("Lost");

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    location: "",
    dateLost: "",
    image: null,
    email: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  function handleChange(event) {
    const { name, value, files } = event.target;

    if (name === "image" && files?.[0]) {
      const file = files[0];

      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      setImagePreview(URL.createObjectURL(file));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function removeImage() {
    setFormData((prev) => ({
      ...prev,
      image: null,
    }));

    setImagePreview(null);
  }

  function resetForm() {
    setFormData({
      itemName: "",
      category: "",
      description: "",
      location: "",
      dateLost: "",
      image: null,
      email: "",
    });

    setImagePreview(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: Date.now(),
      name: formData.itemName.trim(),
      category: formData.category,
      description: formData.description.trim(),
      location: formData.location.trim(),
      date: formData.dateLost,
      image: imagePreview,
      email: formData.email.trim(),
      type: isLostReport ? "lost" : "found",
    };

    // Save item
    setItems((prevItems) => [...prevItems, newItem]);
    resetForm();
    navigate("/");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:py-12">

      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-sky-600"
        >
          <ArrowLeft
            size={17}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to home
        </button>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* ==================================================
              MAIN FORM
          ================================================== */}

          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}
            <div className="border-b border-slate-100 px-6 py-7 sm:px-8">

              <div className="flex items-start gap-4">

                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${color} text-2xl shadow-lg`}
                >
                  {emoji}
                </div>

                <div>
                  <p className="text-sm font-medium text-sky-600">
                    {isLostReport
                      ? "Lost item report"
                      : "Found item report"}
                  </p>

                  <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {report}
                  </h1>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {isLostReport
                      ? "Tell us what you lost so other students can help you find it."
                      : "Tell us what you found so we can help reconnect it with its owner."}
                  </p>
                </div>

              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="px-6 py-7 sm:px-8"
            >

              {/* Section */}
              <div>
                <div className="mb-5">
                  <h2 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                    <Package size={18} className="text-sky-500" />
                    Item information
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Give us enough detail to identify the item.
                  </p>
                </div>

                <div className="space-y-5">

                  {/* Item Name */}
                  <div>
                    <label
                      htmlFor="itemName"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Item name
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <input
                      id="itemName"
                      name="itemName"
                      type="text"
                      value={formData.itemName}
                      onChange={handleChange}
                      placeholder="e.g. iPhone 12, black wallet..."
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label
                      htmlFor="category"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Category
                      <span className="ml-1 text-red-500">*</span>
                    </label>

                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    >
                      <option value="">
                        Select a category
                      </option>

                      <option value="phone">Phone</option>
                      <option value="laptop">Laptop</option>
                      <option value="wallet">Wallet</option>
                      <option value="bag">Bag</option>
                      <option value="id">ID Card</option>
                      <option value="charger">Charger</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="description"
                        className="text-sm font-medium text-slate-700"
                      >
                        Description
                        <span className="ml-1 text-red-500">*</span>
                      </label>

                      <span className="text-xs text-slate-400">
                        Be specific
                      </span>
                    </div>

                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe the colour, brand, model, markings, case, stickers or anything else that could help identify it..."
                      required
                      className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />


                  </div>

                </div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-slate-100" />

              {/* Location + Date */}
              <div>
                <div className="mb-5">
                  <h2 className="text-base font-semibold text-slate-900">
                    When & where?
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Help narrow down where the item was lost or found.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
                    >
                      <MapPin size={15} />
                      Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder={
                        isLostReport
                          ? "Where did you lose it?"
                          : "Where did you find it?"
                      }
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dateLost"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
                    >
                      <CalendarDays size={15} />
                      Date
                    </label>

                    <input
                      id="dateLost"
                      name="dateLost"
                      type="date"
                      value={formData.dateLost}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                  </div>

                </div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-slate-100" />

              {/* Image */}
              <div>
                <div className="mb-5">
                  <h2 className="text-base font-semibold text-slate-900">
                    Add a photo
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    A photo can make identification much easier.
                  </p>
                </div>

                {imagePreview ? (
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                    <img
                      src={imagePreview}
                      alt="Selected item preview"
                      className="h-64 w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur transition hover:bg-red-500"
                      aria-label="Remove image"
                    >
                      <X size={17} />
                    </button>
                  </div>
                ) : (
                  <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-10 text-center transition hover:border-sky-300 hover:bg-sky-50">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm transition group-hover:text-sky-500">
                      <Upload size={24} />
                    </div>

                    <p className="mt-4 text-sm font-semibold text-slate-700">
                      Click to upload a photo
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      PNG or JPG · Maximum 5MB
                    </p>

                    <input
                      type="file"
                      name="image"
                      accept="image/png,image/jpeg"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-slate-100" />

              {/* Contact */}
              <div>
                <div className="mb-5">
                  <h2 className="text-base font-semibold text-slate-900">
                    Contact information
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    We'll use this to connect you with someone who finds or owns the item.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700"
                  >
                    <Mail size={15} />
                    Contact email
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`group mt-8 flex w-full items-center justify-center gap-2 rounded-xl ${bgcolor} py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 ${hover}`}
              >
                {submit}
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="mt-3 text-center text-xs text-slate-400">
                By submitting this report, you confirm that the information provided is accurate.
              </p>

            </form>
          </section>

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <aside className="hidden lg:block">

            <div className="sticky top-28 space-y-5">



              {/* Privacy */}
              <div className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
                <div className="flex gap-3">
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-slate-500"
                  />

                  <div>
                    <h4 className="text-sm font-semibold text-slate-700">
                      Your contact details
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Your email is used to help connect you with relevant reports.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>



      </div>
    </main>
  );
}