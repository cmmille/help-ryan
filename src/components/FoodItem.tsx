import { Food } from "../models/Food";

interface Props {
  food: Food | null;
}

const FoodItem = ({ food }: Props) => {
  const { name, image } = food ? food : { name: "", image: "" };

  return (
    <div className="w-full max-w-xs relative">
      <h2 className="text-red-600 -translate-x-1/2 font-bold absolute bottom-2 left-1/2 text-shadow text-4xl font-cute">
        {name}
      </h2>
      <img src={image} alt={name} />
    </div>
  );
};

export default FoodItem;
