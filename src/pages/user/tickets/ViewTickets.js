import { useEffect, useState } from "react"

function ViewTickets() {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    fetch("http://localhost:3030/tickets").then(resp => resp.json())
      .then(data => {
        setTickets(data);
      }).catch(err => console.error(err))
  }, []);
  return (
    <ul>
      {tickets && tickets.map((ticket, index) => {
        const { email, quantity, date, tourid, showid } = ticket

        return (
          <li key={index}>
            <h3>{tourid || showid}</h3>
            <p>Email: {email}</p>
            <p>Quantity: {quantity}</p>
            <p>Date: {date}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default ViewTickets
