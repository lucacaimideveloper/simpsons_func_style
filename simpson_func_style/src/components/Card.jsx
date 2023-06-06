import { useState } from "react";

const Card = (props) => {
  //
  //time to destructure
  const { item, onLikeToggle, onDelete } = props;

  return (
    <>
      <h1>{item.character}</h1>
      <p>{item.quote}</p>
      <img src={item.image} alt={item.character} />
      <button onClick={() => onLikeToggle(item.quote)}>
        {/* {item.liked ? "liked" : "notLiked"} */}
        <i
          style={{ color: item.liked ? " red" : " white" }}
          className="fa-solid fa-heart"></i>
      </button>
      <button onClick={() => onDelete(item.quote)}>Delete</button>
    </>
  );
};

export default Card;
