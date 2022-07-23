import React, { useState, useEffect } from "react";
import Routing from "./routes";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/user";
import { ifIsNecessaryToGetNewAccessToken } from "./utils/checkDateToken";
import { getCurrentUserAuth } from "./services/userService";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    if (window.localStorage.getItem("access_token")) {
      if (ifIsNecessaryToGetNewAccessToken()) {
        window.localStorage.removeItem("access_token");
        window.location.href = "/";
      } else {
        getCurrentUserAuth().then((res) => {
          const tmp = {
            id: res.data.id,
            display_name: res.data.display_name,
            country: res.data.country,
            followers: res.data.followers.total,
            image: res.data.images[0].url,
          };
          dispatch(setUser(tmp));
        });
      }
    }
  }, [loading]);

  return <Routing />;
}

export default App;
