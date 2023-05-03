import { useState } from "react";
import FoodList from "../data/FoodList";
import { Food } from "../models/Food";
import FoodItem from "../components/FoodItem";
import FoodSelectionList from "../components/FoodSelectionList";
import Modal from "../components/Modal";

const Home = () => {
  const [checklist, setChecklist] = useState(FoodList);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  //   Add/Remove a food from the list of foods to choose from
  function handleChecklistClick(food: Food) {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) => {
        if (item.name === food.name) {
          item.toggleChecked();
        }
        return item;
      })
    );
  }

  //   Select a food from the list at random
  function randomFood() {
    const filteredFoods = checklist.filter((food) => food.checked);
    console.log("filteredFoods", filteredFoods);
    const index = Math.floor(Math.random() * filteredFoods.length);
    const food = filteredFoods[index];
    setSelectedFood(food);
    setCount(count + 1);
  }

  return (
    <div className="w-full text-center flex flex-col justify-center items-center gap-2">
      <h1 className="text-8xl mb-4 font-cute">What should Ryan cook?!</h1>

      <button
        className="bg-lime-900 p-4 text-5xl rounded-md hover:bg-green-900 font-cute"
        onClick={() => setShowModal(true)}
      >
        Open Cookbook
      </button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <FoodSelectionList foods={checklist} onClick={handleChecklistClick} />
      </Modal>

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
