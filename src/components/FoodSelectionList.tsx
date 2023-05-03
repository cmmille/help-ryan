import { Food } from "../models/Food";
import FoodSelection from "./FoodSelection";

interface Props {
  foods: Food[];
  onClick: (food: Food) => void;
}

const FoodSelectionList = ({ foods, onClick }: Props) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-cute text-5xl">Ryan is able to cook:</h1>
      {foods.map((food) => (
        <FoodSelection
          food={food}
          key={`${food.name}-checkbox`}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default FoodSelectionList;
