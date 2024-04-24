import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./components/Data";

const App = () => {
  //those are a hooks, they go directly above
  const [simpsons, setSimpsons] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");
  //
  //api call
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
      );
      setSimpsons(data);
    } catch (err) {
      console.log(err, "something weird is happening!");
    }
  };

  //
  //acces to api mechanism
  useEffect(() => {
    getData();
  }, []);

  if (!simpsons) return <p>Loading...</p>;
  //
  //toggle like button
  const onLikeToggle = (quote) => {
    const indexOf = simpsons.findIndex((item) => {
      return item.quote === quote;
    });
    const _data = [...simpsons];
    _data[indexOf].liked = !_data[indexOf].liked;
    setSimpsons([...simpsons]);
  };
  //
  //delete function

  // const onDelete = (quote) => {
  //   const updatedSimpsons = simpsons.filter((item) => item.quote !== quote);
  //   setSimpsons(updatedSimpsons);
  // };

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
  const onInput = async (e) => {
    setSearch(e.target.value);
  };
  //
  //sort target
  const onOrder = (e) => {
    setSort(e.target.value);
  };

  //
  //total like calculator
  let total = 0;
  simpsons.forEach((item) => {
    if (item.liked) {
      total++;
    }
  });

  let data = [...simpsons];

  if (search) {
    data = data.filter((character) => {
      character.character.toLowerCase().includes(search.toLocaleLowerCase());
    });
  }

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
  //
  //

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
