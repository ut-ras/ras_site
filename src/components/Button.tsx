import React from "react";
import styles from "@/css/Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
    >
      {props.title ? props.title : "Join RAS!"}
    </button>
  );
};

export default Button;
