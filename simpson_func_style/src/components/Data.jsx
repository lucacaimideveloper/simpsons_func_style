import Card from "./Card";

const Data = (props) => {
  const { simpsons, onLikeToggle, onDelete } = props;

  return (
    <>
      {simpsons.map((item, id) => {
        return (
          <Card
            item={item}
            onLikeToggle={onLikeToggle}
            onDelete={onDelete}
            // key={id.quote}
          />
        );
      })}
    </>
  );
};

export default Data;
