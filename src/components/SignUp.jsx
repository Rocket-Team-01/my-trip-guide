import React from "react";
import Header from "../components/Header";

export default function App() {
  const [venues, setVenues] = React.useState([]);
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((response) => {
      const location = [
        response.coords.latitude,
        response.coords.longitude,
      ].join(",");
      console.log(location);
      fetch(
        `https://api.foursquare.com/v2/venues/explore?ll=${location}&query=&limit=30&offset=5&categoryId=4bf58dd8d48988d1fa931735&client_id=CBF5QZWTLTQMFI3P3DXI3GOXDNAQQL1PDG3H2F3GAQBKKYNE&client_secret=FZJWA4IBXRVLOP1TFX0RFSK0FGLFBLWBIWH2RPKIC5J43IOT&v=20200207`
      )
        .then((res) => res.json())
        .then((data) => {
          setVenues(data.response.groups[0].items);
        });
    });
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}
