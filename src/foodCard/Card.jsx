import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { _id, foodImg, foodName, location, exData, quantity, note } = data;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={foodImg} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Food Name: {foodName}</h2>
          <p className="font-medium text-black/60">Quantity: {quantity}</p>
          <p className="font-medium text-black/60">
            Pick-Up Location: {location}
          </p>
          <p className="font-medium text-black/60">Expire date: {exData}</p>
          <p className="font-medium text-black/60">Note: {note}</p>
          <p className="font-medium text-black/60">Status: Available</p>
          <div className="card-actions">
            <Link
              to={`/food-details/${_id}`}
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
