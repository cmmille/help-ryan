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
      <button className="text-3xl text-lime-900" onClick={handleClick}>
        {food?.checked ? <BsFillCheckSquareFill /> : <BsFillSquareFill />}
      </button>
      <h1 className="text-4xl font-cute">{food?.name}</h1>
    </div>
  );
};

export default FoodSelection;
