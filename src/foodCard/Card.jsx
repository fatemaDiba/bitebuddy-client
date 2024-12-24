import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Food Name: Fresh Bread</h2>
          <p className="font-medium">Quantity: 2 loaves</p>
          <p className="font-medium">
            Pick-Up Location: 45 Market Lane, Townville
          </p>
          <p className="font-medium">Expire date: 2024-12-25T15:00:00</p>
          <p className="font-medium">
            Note: Homemade sourdough. Best before tomorrow.
          </p>
          <p className="font-medium">Status: Available</p>
          <div className="card-actions">
            <Link
              to="/food-details"
              className="border-0 bg-gradient-to-b from-purple-400 to-pink-400 font-semibold text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg text-sm"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
