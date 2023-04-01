import { useState } from "react";
import "./App.css";
import NewItem from "./components/NewItem";
import DisplayItem from "./components/DisplayItem";

function App() {
  const [itemDetails, setItemDetails] = useState({});

  const enteredDataHandler = (items) => {
    setItemDetails(items);
  };

  console.log(itemDetails);

  return (
    <>
      <NewItem onSaveData={enteredDataHandler} />
      <DisplayItem Candies={itemDetails} />
    </>
  );
}

export default App;
