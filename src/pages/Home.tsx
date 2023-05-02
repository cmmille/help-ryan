import { useState } from "react";
import FoodList from "../data/FoodList";
import { Food } from "../models/Food";
import FoodItem from "../components/FoodItem";

const Home = () => {
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [count, setCount] = useState(0);

  function randomFood() {
    const index = Math.floor(Math.random() * FoodList.length);
    const food = FoodList[index];
    setSelectedFood(food);
    setCount(count + 1);
  }

  return (
    <div className="w-full text-center flex flex-col justify-center items-center gap-2">
      <h1 className="text-8xl mb-4 font-cute">What should Ryan Cook?!</h1>
      <button
        className="bg-lime-900 p-4 text-5xl rounded-md hover:bg-green-900 font-cute"
        onClick={randomFood}
      >
        Help Ryan!
      </button>

      <FoodItem food={selectedFood} key={count} />
    </div>
  );
};

export default Home;
