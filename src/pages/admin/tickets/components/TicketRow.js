function TicketRow(props) {
  const { ticket } = props

  const { tour } = ticket

  return (
    <tr>
      <td>{tour && tour.name}</td>
      <td>{ticket.email}</td>
      <td>{ticket.quantity}</td>
      <td>{tour && tour.price}</td>
      <td>{tour && ticket.quantity * tour.price}</td>
    </tr>

  )
}

export default TicketRow
