function ShowsList(props) {
    const { shows } = props

    return (
        <>
            <h2>Available Shows</h2>
            <ul>
                {shows && shows.map((show, index) => {
                    const { name, price, address } = show

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

export default ShowsList
