//Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
//1) якщо логін = Іван – колір повідомлення про помилку синій
//2) якщо хтось інший, то колір повідомлення червоний

import React, { useState } from "react";
import styles from "./loginForm01.module.css";

const User1 = {
  name: "Владислав",
  password: "2026"
};

const User2 = {
  name: "Іван",
  password: "1234"
};

export default function LoginFunc1() {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [messageClass, setMessageClass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //правильний логін + пароль : смайл
    if (
      (login === User1.name && password === User1.password) ||
      (login === User2.name && password === User2.password)
    ) {
      setMessage("😊 Вхід успішний");
      setMessageClass(styles.message3);   
      return;
    }

    // логін = Іван : синій (message1)
    if (login === "Іван") {
      setMessage(" Невірний логін або пароль");
      setMessageClass(styles.message1);
      return;
    }

    //інші : червоний (message2)
    setMessage(" Невірний логін або пароль");
    setMessageClass(styles.message2);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логін"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Увійти</button>
      </form>

      {message && (
        <p className={messageClass}>{message}</p>
      )}
    </div>
  );
}