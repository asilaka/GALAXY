import React from "react";
import "./Card.scss";
const Card = ({  title="Пока не указано" , price="Нету цену", photo="https://ruoteclassiche.quattroruote.it/wp-content/themes/ruoteclassiche/images/SkinnySeveralAsianlion.gif" }) => {
  return (
    <>
      <div className="card">
        <img src={photo} alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
        <button>Купить</button>
      </div>
    </>
  );
};

export default Card;
