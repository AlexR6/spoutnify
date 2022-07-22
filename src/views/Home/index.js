import React, { useState, useEffect } from "react";
import { getCategoriesWithLimit } from "../../services/categoriesService";
import Categorie from "../../components/Categorie";
import "../../assets/styles/home.scss";

const Index = () => {
  const [loading, setLoading] = useState(1);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getCategoriesWithLimit()
      .then((res) => setAllCategories(res.data.categories.items))
      .catch((err) => console.log(err));
  }, [loading]);

  return (
    <div className="container-hit">
      {allCategories &&
        allCategories.map((categorie) => {
          return (
            <Categorie
              key={categorie.id}
              id={categorie.id}
              icon={categorie.icons[0].url}
              name={categorie.name}
            />
          );
        })}
    </div>
  );
};

export default Index;
