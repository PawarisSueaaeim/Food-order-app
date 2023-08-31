import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

function App() {
  const [isShowModal ,setIsShowModal] = useState(false);

  const onOrderHandler = () => {
    setIsShowModal(true);
  };

  const onCloseHandler = () => {
    setIsShowModal(false);
  };

  return (
    <div>
      {isShowModal && <Cart onClose={onCloseHandler}/>}
      <Header onOrder={onOrderHandler}/>
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
