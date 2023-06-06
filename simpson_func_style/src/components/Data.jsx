import Card from "./Card";

const Data = (props) => {
  //   console.log(props, "hi");

  const { data, onLikeToggle, id } = props;

  return data.map((item) => {
    return <Card item={item} onLikeToggle={onLikeToggle} key={id} />;
  });
};

export default Data;
