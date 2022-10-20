import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionery = {
    "🍇": "Grapes",
    "🍈": "Muskmelon",
    "🍉": "WaterMelon",
    "🍊": "Orange",
    "🍌": "Banananana",
    "🍍": "Pineapple",
    "🍑": "Peach",
    "🍒": "Cherry",
    "🍓": "Strawberry",
    "🍅": "Tomato",
    "🥝": "Kiwi"
  };
  var [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    meaning = event.target.value;
    if (meaning in emojiDictionery) {
      setMeaning(emojiDictionery[meaning]);
    } else {
      meaning = "Sorry! we dont have this emoji in our database :(";
      setMeaning(meaning);
    }
  }
  var arr = Object.keys(emojiDictionery);
  function onClickHandler(emoji) {
    setMeaning(emojiDictionery[emoji]);
  }
  return (
    <div className="App">
      <h1>!!Welcome to Fun With Fruits!!</h1>
      <input onChange={onChangeHandler}></input>
      <h2>{meaning}</h2>
      <h3> The emojis we have in our database</h3>
      <div>
        {arr.map((emoji) => {
          return (
            <span
              style={{ cursor: "pointer", fontSize: "2rem", padding: "2rem " }}
              key={emoji}
              onClick={() => onClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
