import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvaliableMeal from "./AvaliableMeal";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaliableMeal />
    </Fragment>
  );
};

export default Meals;
