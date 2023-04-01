import { useState } from "react";

const NewItem = (props) => {
  const [enteredCandyName, setEnteredCandyName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();

  const candyNameChangeHandler = (event) => {
    setEnteredCandyName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      candyName: enteredCandyName,
      description: description,
      price: price,
    };
    props.onSaveData(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>CandyName</label>
      <input type="text" onChange={candyNameChangeHandler}></input>
      <label>Description</label>
      <input type="text" onChange={descriptionChangeHandler}></input>
      <label>Price</label>
      <input type="number" onChange={priceChangeHandler}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewItem;
