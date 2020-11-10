import React from "react";
import NotImage from "../assets/not-image.jpg";
import Logo from "../assets/logo.svg";

const Header = ({ data, isLoading }) => {
  // const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const fetchData = async () => {
  //   const response = await Axios.get(
  //     "https://lereacteur-backend-deliveroo.herokuapp.com/"
  //   );
  //   setData(response.data);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="container">
      <div style={{ borderBottom: "0.5px solid #f1eded" }}>
        <img
          style={{
            backgroundColor: "#00CCBC",
            height: "59px",
          }}
          src={Logo}
          alt=""
        />
      </div>
      <div style={{ display: "flex", padding: "30px 0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "35px",
          }}
        >
          <h1
            style={{ margin: "25px 0", fontSize: "33px", fontWeight: "bold" }}
          >
            {!isLoading ? data.name : "en cours de chargement"}
          </h1>
          <p style={{ fontSize: "19px" }}>
            {" "}
            {!isLoading ? data.description : "en cours de chargement"}
          </p>
        </div>
        <img
          style={{ width: "350px", borderRadius: "5px" }}
          src={!isLoading ? data.picture : NotImage}
          alt="not-available"
        />
      </div>
    </div>
  );
};

export default Header;
