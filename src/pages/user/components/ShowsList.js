import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ShowsList(props) {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/shows")
      .then((resp) => resp.json())
      .then((data) => {
        setShows(data);
      });
  }, []);
  return (
    <>
      <h2>Available Shows</h2>
      <ul>
        {shows.length > 0 &&
          shows.map((show, index) => {
            const { name, price, address } = show;

            return (
              <li key={index}>
                <h3>{name}</h3>
                <p>Price: £{price}</p>
                <p>Address: {address}</p>
                <Link to={`/shows/${show.id}/book`} state={show}>
                  Book Show
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default ShowsList;
