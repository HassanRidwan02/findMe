import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
// import { items } from "./data.js";

export default function ItemDetails({items}) {

    const navigate = useNavigate()
    
    const { id } = useParams();

    const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return <h1>Item not found</h1>;
  }

  return (
    <div className="max-w-[1080px] mx-auto px-4 py-10">

      <button 
      className="text-gray-600 hover:text-blue-600 mb-8"
      onClick={() => navigate('/')}
        >
        ← Back
        </button>
      <img
        src={item.image}
        alt={item.name}
        className="w-full max-w-md rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-6">
        {item.name}
      </h1>

      <p className="mt-4 text-gray-600">
        {item.description}
      </p>

      <p className="mt-4">
        <strong>Location:</strong> {item.location}
      </p>

      <p>
        <strong>Date:</strong> {item.date}
      </p>

      <p>
        <strong>Category:</strong> {item.category}
      </p>

      <p>
        <strong>Type:</strong> {item.type}
      </p>

      <p>
        <strong>Contact:</strong> {item.email}
      </p>
    </div>
  );
}