import { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { Link } from "react-router-dom"
import CreateTourPage from "./tours/CreateTour"
import Dashboard from "./Dashboard"
import TicketsSummary from "./tickets/Summary"
import CreateShowPage from "./shows/CreateShow"

function AdminRouter() {
  const [tours, setTours] = useState([])
  const [shows, setShows] = useState([])


  console.log({ tours })

  useEffect(() => {
    fetch("http://localhost:3030/tours")
      .then(resp => resp.json())
      .then(data => {
        setTours(data);
      })
      .then(() => {
        fetch("http://localhost:3030/shows")
          .then(resp => resp.json())
          .then(data => {
            setShows(data);
          });
      })

  }, []);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/admin/">Admin Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/tours/create">Create a Tour</Link>
            </li>
            <li>
              <Link to="/admin/shows/create">Create a Show</Link>
            </li>
            <li>
              <Link to="/admin/tickets/summary">Tickets Summary</Link>
            </li>
            <li>
              <Link to="/">User Pages</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard tours={tours} shows={shows} />} />
        <Route
          path="/tours/create"
          element={<CreateTourPage tours={tours} setTours={setTours} />}
        />
        <Route
          path="/shows/create"
          element={<CreateShowPage shows={shows} setShows={setShows} />}
        />
        <Route path="tickets/summary" element={<TicketsSummary tours={tours} />} />
      </Routes>
    </>
  )
}

export default AdminRouter
