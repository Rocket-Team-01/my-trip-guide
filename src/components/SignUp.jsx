import React from "react";

export default function App() {
  const [venues, setVenues] = React.useState([]);
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(response => {
      const location = [
        response.coords.latitude,
        response.coords.longitude
      ].join(",");
      console.log(location);
      fetch(
        `https://api.foursquare.com/v2/venues/explore?ll=${location}&query=&limit=30&offset=5&categoryId=4bf58dd8d48988d1fa931735&client_id=CBF5QZWTLTQMFI3P3DXI3GOXDNAQQL1PDG3H2F3GAQBKKYNE&client_secret=FZJWA4IBXRVLOP1TFX0RFSK0FGLFBLWBIWH2RPKIC5J43IOT&v=20200207`
      )
        .then(res => res.json())
        .then(data => {
          setVenues(data.response.groups[0].items);
        });
    });
  }, []);

  return (
    <div>
      <ul>
        {venues.map((item, index) => (
          <div key={index}>
            <li>{item.venue.name}</li>
            <p>{item.venue.id} </p>
          </div>
        ))}
      </ul>
    </div>
  );
}
