import Card from "./Card";

const Data = (props) => {
  //
  //time to destructure
  const { simpsons, onLikeToggle, onDelete } = props;
  //
  //map over api data
  return simpsons.map((item) => {
    return (
      <Card
        item={item}
        onLikeToggle={onLikeToggle}
        onDelete={onDelete}
        // key={id.quote}
      />
    );
  });
};

export default Data;
