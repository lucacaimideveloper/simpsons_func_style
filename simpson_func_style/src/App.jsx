import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "./components/Data";

const App = () => {
  //this is a hook, they go directly above
  const [data, setData] = useState();

  const getData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    setData(data);
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const onLikeToggle = (quote) => {
    const _data = [...data];

    const indexOf = data.findIndex((item) => {
      return item.quote === quote;
    });

    _data[indexOf].liked = !_data[indexOf].liked;
    setData({ ...data });
  };

  if (!data) return <p>Loading...</p>;

  let total = 0;
  console.log(data, "l39");
  data.map((item) => {
    if (item.liked) {
      total++;
    }
  });
  return (
    <>
      <p> like = {total}</p>
      <Data data={data} onLikeToggle={onLikeToggle} />
    </>
  );
};

export default App;
