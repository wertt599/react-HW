
// Задача 3. Елемент тренажера англійської. 
// Виводимо зображення елемента і слово. 
// Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре. Молодець!» (і додаємо зелену рамку до 
// елемента), якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).

import React, { useState } from "react";
import styles from "./StylesEnglish.module.css";

const element = [
    {
      en_name: "coat",
      image: "https://via.placeholder.com/150?text=Coat",
    },
    {
      en_name: "hat",
      image: "https://via.placeholder.com/150?text=Hat",
    },
    {
      en_name: "table",
      image: "https://via.placeholder.com/150?text=Table",
    },
  ];
function EnglishTrein() {
    const [answer, setAnswer] = useState("");
    const [input, setInput] = useState("");
    const [messageClass, setMessageClass] = useState("");
    const [message, setMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (answer.toLowerCase(element[index].en_name) === input.toLowerCase('')) {
            setMessageClass(styles.correct)
            setMessage("Добре. Молодець!");
        }else{
            setMessageClaxx(styles.incorrect)
            setMessage("Невірно, спробуйте ще раз");
        };
  
    
};

return (
    <div style={{ padding: 20 }}>
      <h1>Improve your English!</h1>

      <div className={messageClass}>
        <img
          src={element[currentIndex].image}
          alt={element[currentIndex].en_name}
          className={styles.image}
        />
        <p>{element[currentIndex].en_name}</p>
      </div>

      <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
        <input
          type="text"
          placeholder="Введіть слово англійською"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Перевірити</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}