import TicketRow from "./TicketRow"

function TicketsTable(props) {
  const { tickets } = props

  return (
    <table>
      <tr>
        <th>Tour</th>
        <th>Customer Email</th>
        <th>Quantity</th>
        <th>Price per Ticket</th>
        <th>Total</th>
      </tr>
      {tickets && tickets.map((ticket, index) => {
        return <TicketRow key={index} ticket={ticket} />
      })}
    </table>
  )
}

export default TicketsTable
