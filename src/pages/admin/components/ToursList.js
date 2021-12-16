function ToursList(props) {
  const { tours } = props

  return (
    <>
      <h2>Available Tours</h2>
      <ul>
        {tours.map((tour, index) => {
          const { name, price, address } = tour

          return (
            <li key={index}>
              <h3>{name}</h3>
              <p>Price: £{price}</p>
              <p>Address: {address}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToursList
