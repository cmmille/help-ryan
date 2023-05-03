import { Food } from "../models/Food";

import curry from "../assets/curry.jpeg";
import falafel from "../assets/falafel.jpeg";

const FoodList: Food[] = [
  new Food("Indian", curry),
  new Food("Greek", falafel),
  new Food("Italian", falafel),
  new Food("American", falafel),
];

export default FoodList;
