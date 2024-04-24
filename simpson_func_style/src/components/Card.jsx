const Card = (props) => {
  const { item, onLikeToggle, onDelete, characterDirection } = props;

  return (
    <>
      <h1>{item.character}</h1>
      <p>{item.quote}</p>
      <div className={"item.characterDirection" === "Right" ? "right" : "left"}>
        <img src={item.image} alt={item.character} />
      </div>
      <button onClick={() => onLikeToggle(item.quote)}>
        <i
          style={{ color: item.liked ? " red" : " white" }}
          className="fa-solid fa-heart"></i>
      </button>
      <button onClick={() => onDelete(item.quote)}>Delete</button>
    </>
  );
};

export default Card;
