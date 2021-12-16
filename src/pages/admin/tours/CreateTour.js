import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
function CreateTourPage(props) {
  const { tours, setTours } = props
  const [submitted, setSubmitted] = useState(false);
  const [tourToCreate, setTourToCreate] = useState({
    name: "",
    price: 0,
    address: "",
  })
  let navigate = useNavigate();
  console.log({ tourToCreate })

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    // Redirect to "/" with navigate and useNavigate
  }

  useEffect(() => {
    if (submitted) {
      fetch("http://localhost:3030/tours", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tourToCreate)
      })
        .then(resp => resp.json())
        .then((data) => {
          setTours([...tours, tourToCreate]);
          navigate("/");
        });
    }
  }, [submitted]);

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    setTourToCreate({ ...tourToCreate, [name]: value })
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <h2>Create a Tour</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={tourToCreate.name}
      />
      <label htmlFor="price">price</label>
      <input
        type="text"
        id="price"
        name="price"
        onChange={handleChange}
        value={tourToCreate.price}
      />
      <label htmlFor="address">address</label>
      <input
        type="text"
        id="address"
        name="address"
        onChange={handleChange}
        value={tourToCreate.address}
      />
      <button type="submit">Create Tour</button>
    </form>
  )
}

export default CreateTourPage
