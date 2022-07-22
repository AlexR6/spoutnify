import React, { useState, useEffect } from "react";
import Routing from "./routes";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/user";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    if (window.localStorage.getItem("access_token")) {
      dispatch(setUser({ isConnected: true }));
    }
  }, [loading]);

  return <Routing />;
}

export default App;
