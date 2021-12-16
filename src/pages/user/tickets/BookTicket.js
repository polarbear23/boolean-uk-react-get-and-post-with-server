import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
function BookTicket() {
  const [submitted, setSubmitted] = useState(false);
  const [attractionType, setAttractionType] = useState("");
  const location = useLocation();
  console.log("location", location);
  const attraction = location.state;
  const pathname = location.pathname;
  const typeArray = pathname.split("/");
  console.log("types", typeArray[1]);

  const navigate = useNavigate();
  const [ticketToCreate, setTicketToCreate] = useState({
    email: "",
    quantity: 0,
    date: "",
  });
  console.log("attraction", attraction);
  useEffect(() => {
    if (submitted) {
      fetch("http://localhost:3030/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketToCreate),
      })
        .then((resp) => resp.json())
        .then((data) => {
          navigate("/");
        });
      setSubmitted(false);
    }
  }, [submitted]);

  useEffect(() => {
    setAttractionType(typeArray[1]);
  }, [location]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTicketToCreate({
      ...ticketToCreate,
      [`${attractionType}Id`]: attraction.id,
    });
    setSubmitted(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTicketToCreate({ ...ticketToCreate, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{attraction.name}</h1>
      <label htmlFor="email">
        Email:
        <input type="email" name="email" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label htmlFor="quantity">
        Quantity:
        <input type="number" name="quantity" onChange={handleChange} />
      </label>
      <br />
      <br />
      <label htmlFor="date">
        Date:
        <input type="datetime-local" name="date" onChange={handleChange} />
      </label>
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookTicket;
