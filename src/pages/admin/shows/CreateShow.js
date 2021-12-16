import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
function CreateShowPage(props) {
    const { shows, setShows } = props
    const [submitted, setSubmitted] = useState(false);
    const [showToCreate, setShowToCreate] = useState({
        name: "",
        price: 0,
        address: "",
    })
    let navigate = useNavigate();
    console.log({ showToCreate })

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        // Redirect to "/" with navigate and useNavigate
    }

    useEffect(() => {
        if (submitted) {
            fetch("http://localhost:3030/shows", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(showToCreate)
            })
                .then(resp => resp.json())
                .then((data) => {
                    setShows([...shows, showToCreate]);
                    navigate("/");
                });
        }
    }, [submitted]);

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        setShowToCreate({ ...showToCreate, [name]: value })
    }

    return (
        <form className="form-stack" onSubmit={handleSubmit}>
            <h2>Create a Show</h2>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={showToCreate.name}
            />
            <label htmlFor="price">price</label>
            <input
                type="text"
                id="price"
                name="price"
                onChange={handleChange}
                value={showToCreate.price}
            />
            <label htmlFor="address">address</label>
            <input
                type="text"
                id="address"
                name="address"
                onChange={handleChange}
                value={showToCreate.address}
            />
            <button type="submit">Create Tour</button>
        </form>
    )
}

export default CreateShowPage
