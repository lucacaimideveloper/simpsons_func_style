import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "./components/Data";

const App = () => {
  //those are a hooks, they go directly above
  const [simpsons, setSimpsons] = useState();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");
  //
  //api call
  const getData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    setSimpsons(data);
    // simpsons.forEach((element, index) => {
    //   element.id = index + Math.random();
    // });
  };
  //
  //acces to api mechanism
  useEffect(() => {
    getData();
  }, []);
  //
  //toggle like button
  const onLikeToggle = (quote) => {
    const _data = [...simpsons];

    const indexOf = simpsons.findIndex((item) => {
      return item.quote === quote;
    });

    _data[indexOf].liked = !_data[indexOf].liked;
    setSimpsons([...simpsons]);
  };
  //
  //delet funtion
  const onDelete = (quote) => {
    const indexOf = simpsons.findIndex((item) => {
      return item.quote === quote;
    });
    const _data = [...simpsons];
    _data.splice(indexOf, 1);
    setSimpsons([..._data]);
  };
  //
  //input target
  const onInput = (e) => {
    setSearch(e.target.value);
  };
  //
  //sort target
  const onOrder = (e) => {
    setSort(e.target.value);
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
  //
  //total like calculator
  let total = 0;

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
  //
  //sort selector
  if (sort === "ASC") {
    data.sort((a, b) => {
      if (a.character > b.character) return 1;
      if (a.character < b.character) return -1;
    });
  } else if (sort === "DSC") {
    data.sort((a, b) => {
      if (a.character > b.character) return -1;
      if (a.character < b.character) return 1;
    });
  }

  return (
    <>
      <p> like = {total}</p>
      <input onInput={onInput} type="text"></input>
      <select onInput={onOrder}>
        <option value="ASC">AZ</option>
        <option value="DSC">ZA</option>
      </select>
      <Data simpsons={data} onLikeToggle={onLikeToggle} onDelete={onDelete} />
    </>
  );
};

export default App;
