import { BsFillCheckSquareFill, BsFillSquareFill } from "react-icons/bs";

import { Food } from "../models/Food";

interface Props {
  food: Food;
  onClick: (food: Food) => void;
}

// checkbox for each food item
const FoodSelection = ({ food, onClick }: Props) => {
  const handleClick = () => {
    onClick(food);
  };
  return (
    <div className="flex flex-row gap-2">
      <button
        className="text-3xl text-lime-900 relative "
        onClick={handleClick}
      >
        {food?.checked ? (
          <BsFillCheckSquareFill className="absolute" />
        ) : (
          <BsFillSquareFill className="absolute" />
        )}
        <BsFillSquareFill className="text-white" />
      </button>
      <h1 className="text-4xl font-cute">{food?.name}</h1>
    </div>
  );
};

export default FoodSelection;
