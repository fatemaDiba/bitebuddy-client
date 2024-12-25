import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { _id, foodImg, foodName, location, exDate, quantity, note, status } =
    data;

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <div className="h-[200px] overflow-hidden">
          <figure className="h-full rounded-xl">
            <img
              src={foodImg}
              alt="Shoes"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
        <div className="card-body h-80">
          <h2 className="card-title font-bold">{foodName}</h2>
          <p className="font-medium text-black/60">Quantity: {quantity}</p>
          <p className="font-medium text-black/60">
            PickUp Location: {location}
          </p>
          <p className="font-medium text-black/60">Expire date: {exDate}</p>
          <p className="font-medium text-black/60">Note: {note}</p>
          <p className="font-medium text-black/60">Status: {status}</p>
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
