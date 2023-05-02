import { motion } from "framer-motion";

import { Food } from "../models/Food";

interface Props {
  food: Food | null;
}

const FoodItem = ({ food }: Props) => {
  const { name, image } = food ? food : { name: "", image: "" };

  return (
    <motion.div
      animate={{
        scale: [0, 1],
        rotate: [0, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 1,
        delay: 0.25,
      }}
      className="w-full max-w-xs relative"
    >
      {food && <h1 className="text-4xl font-cute">Ryan should cook:</h1>}
      <h2 className="text-red-600 -translate-x-1/2 font-bold absolute bottom-2 left-1/2 text-shadow text-4xl font-cute">
        {name}
      </h2>
      <img src={image} alt={name} />
    </motion.div>
  );
};

export default FoodItem;
