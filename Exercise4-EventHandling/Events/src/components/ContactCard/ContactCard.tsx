import React, { useEffect, useState } from "react";
import "./ContactCard.css";
export const ContactCard = () => {
  const [userId, setUserid] = useState(2);
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleClickPrev = () => {
    setUserid((prevValue) => {
      return prevValue > 1 ? prevValue - 1 : 1;
    });
  };

  const handleClickNext = () => {
    setUserid((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        setName(data.name);
        setEmail(data.email);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [userId]);

  return (
    <div id="contactContainer">
      <h3>ContactCard</h3>
      <div className="card">
        <p>Username: {name}</p>
        <p>Name: {email} </p>
      </div>
      <div className="buttons">
        <button
          id="prev"
          className="btn"
          onClick={handleClickPrev}
          disabled={userId === 1}
        >
          Prev
        </button>
        <button id="next" className="btn" onClick={handleClickNext}>
          Next
        </button>
      </div>
    </div>
  );
};
