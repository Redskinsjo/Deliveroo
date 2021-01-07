import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import "./reset.css";
import "./App.css";

function App() {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // The api sends back data for one restaurant only
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
            {/* transfer description and name of the restaurant */}
            <Header data={data.restaurant} isLoading={isLoading} />

            {/* transfer all product categories offered by this restaurant */}
            <Main data={data.categories} isLoading={isLoading} />
        </div>
    );
}

export default App;
