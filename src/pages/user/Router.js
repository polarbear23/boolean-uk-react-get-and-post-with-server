import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import HomePage from "./Home"
import BookTicket from "./tickets/BookTicket"
import ViewTickets from "./tickets/ViewTickets"

function UserRouter() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
            <li>
              <Link to="/admin">Admin Pages</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tours/:id/book" element={<BookTicket />} />
        <Route path="/shows/:id/book" element={<BookTicket />} />
        <Route path="/tickets" element={<ViewTickets />} />
      </Routes>
    </>
  )
}

export default UserRouter
