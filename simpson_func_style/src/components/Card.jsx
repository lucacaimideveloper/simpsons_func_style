import { useState } from "react";

const Card = (props) => {
  const [liked, setLiked] = useState(false);
  const { item, onLikeToggle } = props;

  return (
    <>
      <div className={liked ? "like" : "notLiked"}></div>
      <h1>{item.character}</h1>
      <p>{item.quote}</p>
      <img src={item.image} alt={item.character} />
      <button onClick={() => onLikeToggle(item.quote)}>
        <i
          style={{ color: liked ? " red" : " white" }}
          className="fa-solid fa-heart"></i>
      </button>
    </>
  );
};

export default Card;
