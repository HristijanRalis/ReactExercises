import React from "react";

import styles from "./Card.module.scss";
import { Button } from "../../Button/Button";

export const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <h2>Card</h2>
      <div className={styles["card-content"]}>
        <p>Name: </p>
        <p>Email: </p>
      </div>

      <div className="buttons">
        <Button label="Prev" />
        <Button label="Next" />
      </div>
    </div>
  );
};
