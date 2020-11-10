import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import "./reset.css";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await Axios.get(
      "https://lereacteur-backend-deliveroo.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header data={data.restaurant} isLoading={isLoading} />
      <Main data={data.categories} isLoading={isLoading} />
    </div>
  );
}

export default App;
