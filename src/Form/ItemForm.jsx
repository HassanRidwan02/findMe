import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileImage,
  Loader2,
  Mail,
  MapPin,
  Package,
  Sparkles,
  Upload,
  X,
} from "lucide-react";
import { findPotentialMatches } from "../services/aiservices.js";

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

  const [matches, setMatches] = useState([]);
  const [isMatching, setIsMatching] = useState(false);
  const [matchError, setMatchError] = useState("");
  const [hasCheckedMatches, setHasCheckedMatches] = useState(false);

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

  async function handleSubmit(event) {
    event.preventDefault();

    if (isMatching) return;

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

    // Lost reports don't need AI matching
    if (newItem.type === "lost") {
      resetForm();
      navigate("/");
      return;
    }

    // Found reports trigger AI matching
    setMatches([]);
    setMatchError("");
    setHasCheckedMatches(false);

    const lostItems = items.filter(
      (item) =>
        item.type === "lost" &&
        item.category === newItem.category
    );

    if (lostItems.length === 0) {
      setHasCheckedMatches(true);
      resetForm();
      return;
    }

    try {
      setIsMatching(true);

      const result = await findPotentialMatches(
        newItem,
        lostItems
      );

      setMatches(result.matches || []);
      setHasCheckedMatches(true);
      resetForm();
    } catch (error) {
      console.error("AI matching failed:", error);

      setMatchError(
        "We couldn't check for potential matches. Your report has still been saved."
      );
    } finally {
      setIsMatching(false);
    }
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

                    {/* AI hint */}
                    <div className="mt-3 flex items-start gap-2 rounded-xl bg-sky-50 p-3 text-xs leading-5 text-sky-700">
                      <Sparkles
                        size={15}
                        className="mt-0.5 shrink-0"
                      />

                      <p>
                        {isLostReport
                          ? "Detailed descriptions make it easier for someone who found your item to recognise it."
                          : "Our AI will compare this description with reported lost items to find possible matches."}
                      </p>
                    </div>
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
                disabled={isMatching}
                className={`group mt-8 flex w-full items-center justify-center gap-2 rounded-xl ${bgcolor} py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 ${hover} disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {isMatching ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Checking for matches...
                  </>
                ) : (
                  <>
                    {submit}
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
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

              {/* How it works */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      How it works
                    </h3>

                    <p className="text-xs text-slate-500">
                      Simple and straightforward
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">

                  {[
                    {
                      number: "01",
                      title: "Submit your report",
                      text: "Tell us what happened and provide useful details.",
                    },
                    {
                      number: "02",
                      title: "We check for matches",
                      text: "Found reports are compared with existing lost reports.",
                    },
                    {
                      number: "03",
                      title: "Reconnect the item",
                      text: "Potential matches help owners and finders connect.",
                    },
                  ].map((step) => (
                    <div
                      key={step.number}
                      className="flex gap-4"
                    >
                      <span className="text-xs font-bold text-sky-500">
                        {step.number}
                      </span>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">
                          {step.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

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

        {/* ==================================================
            AI MATCHING RESULT
        ================================================== */}

        {isMatching && (
          <div className="mx-auto mt-8 max-w-6xl rounded-3xl border border-sky-200 bg-sky-50 p-6">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                <Sparkles
                  size={20}
                  className="text-sky-600"
                />
              </div>

              <div>
                <h3 className="font-semibold text-sky-900">
                  AI is checking for potential matches
                </h3>

                <p className="mt-1 text-sm leading-6 text-sky-700">
                  We're comparing your found item with previously reported lost items.
                </p>
              </div>
            </div>

            <div className="mt-5 h-1 overflow-hidden rounded-full bg-sky-100">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-sky-500" />
            </div>
          </div>
        )}

        {/* AI Error */}
        {matchError && (
          <div className="mx-auto mt-8 max-w-6xl rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="font-semibold text-amber-900">
              Report saved successfully
            </h3>

            <p className="mt-1 text-sm text-amber-700">
              {matchError}
            </p>
          </div>
        )}

        {/* Potential Matches */}
        {hasCheckedMatches &&
          !isMatching &&
          matches.length > 0 && (
            <section className="mx-auto mt-8 max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
                  <Sparkles
                    size={20}
                    className="text-green-600"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Potential matches found
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Our AI found lost reports that may describe the same item.
                  </p>
                </div>

              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                {matches.map((match) => {
                  const lostItem = items.find(
                    (item) =>
                      String(item.id) === String(match.itemId)
                  );

                  if (!lostItem) return null;

                  const confidence = Math.round(
                    match.confidence * 100
                  );

                  return (
                    <article
                      key={match.itemId}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-sky-200 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <h3 className="font-semibold text-slate-900">
                            {lostItem.name}
                          </h3>

                          <p className="mt-1 text-xs capitalize text-slate-500">
                            {lostItem.category}
                          </p>
                        </div>

                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                          {confidence}% match
                        </span>

                      </div>

                      <div className="mt-4 space-y-2 text-sm text-slate-600">
                        <p>
                          <span className="font-medium text-slate-800">
                            Location:
                          </span>{" "}
                          {lostItem.location || "Not provided"}
                        </p>

                        <p>
                          <span className="font-medium text-slate-800">
                            Date:
                          </span>{" "}
                          {lostItem.date || "Not provided"}
                        </p>
                      </div>

                      <div className="mt-4 rounded-xl border border-sky-100 bg-sky-50 p-4">
                        <p className="text-xs font-semibold text-sky-800">
                          Why this may be a match
                        </p>

                        <p className="mt-1 text-sm leading-6 text-sky-700">
                          {match.reason}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700"
                      >
                        View lost report
                        <ArrowRight size={15} />
                      </button>
                    </article>
                  );
                })}

              </div>
            </section>
          )}

        {/* No Matches */}
        {hasCheckedMatches &&
          !isMatching &&
          !matchError &&
          matches.length === 0 && (
            <div className="mx-auto mt-8 max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50">
                  <CheckCircle2
                    size={20}
                    className="text-green-600"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Report submitted successfully
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    We couldn't find a potential match yet, but your report has been saved. A matching lost report may appear later.
                  </p>
                </div>

              </div>
            </div>
          )}

      </div>
    </main>
  );
}