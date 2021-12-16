import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ToursList() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    fetch("http://localhost:3030/tours").then(resp => resp.json()).then(data => {
      setTours(data);
    })
  }, []);

  return (
    <ul>
      <h2>Available Tours</h2>

      {tours && tours.map((tour, index) => {


        return (
          <li key={index}>
            <h3>{tour.name}</h3>
            <p>Price: £{tour.price}</p>
            <p>Address: {tour.address}</p>
            <Link to={`/tours/${tour.id}/book`} state={tour}>
              Book Tour
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ToursList
