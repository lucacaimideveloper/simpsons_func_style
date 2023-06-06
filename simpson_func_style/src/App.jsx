import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "./components/Data";

const App = () => {
  //this is a hook, they go directly above
  const [simpsons, setSimpsons] = useState();
  const [search, setSearch] = useState("");

  const getData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    setSimpsons(data);
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  const onLikeToggle = (quote) => {
    const _data = [...simpsons];

    const indexOf = simpsons.findIndex((item) => {
      return item.quote === quote;
    });

    _data[indexOf].liked = !_data[indexOf].liked;
    setSimpsons([...simpsons]);
  };

  const onDelete = (quote) => {
    const indexOf = simpsons.findIndex((item) => {
      return item.quote === quote;
    });
    const _data = [...simpsons];
    _data.splice(indexOf, 1);
    setSimpsons([...simpsons]);
  };

  const onInput = (e) => {
    setSearch(e.target.value);
  };
  // console.log(onDelete);
  // const onDelete = (quote) => {
  //   const _data = [...data];

  //   const indexOf = data.findIndex((item) => {
  //     return item.quote === quote;
  //   });

  //   _data.splice(indexOf, 1);
  //   setData([...data]);
  // };

  if (!simpsons) return <p>Loading...</p>;

  let total = 0;
  // console.log(data, "l39");
  simpsons.forEach((item) => {
    if (item.liked) {
      total++;
    }
  });
  //
  //filter
  let data = [...simpsons];

  if (search) {
    data = data.filter((item) => {
      return item.character.toLowerCase().includes(search);
    });
  }

  return (
    <>
      <p> like = {total}</p>
      <input onInput={onInput} type="text"></input>
      <Data simpsons={data} onLikeToggle={onLikeToggle} onDelete={onDelete} />
    </>
  );
};

export default App;
