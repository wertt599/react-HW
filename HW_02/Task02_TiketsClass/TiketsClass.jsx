//Задача 2. З випадаючого списку вибираємо клас квитка у літаку. Якщо 
//1) бізнес -  виводимо елементи для вибору газети та коньяку 
//(якщо вибрано коньяк, то запропонувати закуску (так/ні)), на фоні зображення бізнес кают 
//2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.

import React, { useState } from "react";
import styles from "./TiketsClass.module.css";

export default function TiketsClass() {

  const [ticketClass, setTicketClass] = useState("");
  const [newspaper, setNewspaper] = useState(false);
  const [cognac, setCognac] = useState(false);
  const [snack, setSnack] = useState(false);

  const [beer, setBeer] = useState("light");
  const [chips, setChips] = useState(false);

  return (
    <div
      className={
        ticketClass === "business"
          ? styles.businessBg
          : ticketClass === "econom"
          ? styles.economBg
          : null
      }
    >
      <h2>Виберіть ваш квиток</h2>

      <select value={ticketClass} onChange={(e) => setTicketClass(e.target.value)}>
        <option value="">— Оберіть квиток —</option>
        <option value="business">Бізнес клас</option>
        <option value="econom">Економ клас</option>
      </select>

      {/* Бізнес клас */}
      {ticketClass === "business" && (
        <div>
          <h3>Додаткові послуги</h3>

          <label>
            <input
              type="checkbox"
              checked={newspaper}
              onChange={(e) => setNewspaper(e.target.checked)}
            />
            Газета
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              checked={cognac}
              onChange={(e) => setCognac(e.target.checked)}
            />
            Коньяк
          </label>

          <br />

          {/* закуска показується тільки якщо обрано коньяк */}
          {cognac && (
            <label>
              <input
                type="checkbox"
                checked={snack}
                onChange={(e) => setSnack(e.target.checked)}
              />
              Потрібна закуска?
            </label>
          )}
        </div>
      )}

      {/* Економ клас */}
      {ticketClass === "econom" && (
        <div>
          <h3>Додаткові послуги</h3>

          <label>
            Пиво:
            <select value={beer} onChange={(e) => setBeer(e.target.value)}>
              <option value="light">Світле</option>
              <option value="dark">Темне</option>
              <option value="no">Ні, дякую</option>
            </select>
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              checked={chips}
              onChange={(e) => setChips(e.target.checked)}
            />
            Чипси
          </label>
        </div>
      )}
    </div>
  );}
