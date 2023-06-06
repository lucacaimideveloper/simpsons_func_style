import Card from "./Card";

const Data = (props) => {
  //   console.log(props, "hi");

  const { simpsons, onLikeToggle, onDelete } = props;

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
