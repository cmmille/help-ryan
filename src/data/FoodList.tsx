import { Food } from "../models/Food";

import curry from "../assets/curry.png";
import falafel from "../assets/falafel.png";
import spaghetti from "../assets/spaghetti.png";
import burger from "../assets/burger.png";
import noodles from "../assets/noodles.png";

const FoodList: Food[] = [
  new Food("Indian", curry),
  new Food("Greek", falafel),
  new Food("Italian", spaghetti),
  new Food("American", burger),
  new Food("Chinese", noodles),
];

export default FoodList;
