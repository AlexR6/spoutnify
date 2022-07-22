import React, { useState, useEffect } from "react";
import { getHitSearch } from "../../services/searchService";
import CardArtist from "../../components/CardArtist";
import "../../assets/styles/search.scss";

const Index = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSubmit = (e) => {
    if (e.code == "Enter" && searchText) {
      getHitSearch(searchText).then((res) => {
        console.log(res);
        setSearchResult(res.data.artists.items);
      });
    }
  };
  return (
    <div className="container-hit">
      <input
        placeholder="Artiste, titres ou podcasts"
        className="input-search"
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <div className="container-artist">
        {searchResult &&
          searchResult.map((res) => {
            if (res.images) {
              return (
                <CardArtist
                  key={res.id}
                  id={res.id}
                  img={res.images[0].url}
                  name={res.name}
                  type={res.type}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default Index;
