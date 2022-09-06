import { useState } from "react";
import axios from "axios";
import PetForm from "./PetForm";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"


const CreatePet = () => {
    const [pet, setPet] = useState({
        name: "",
        type: "",
        description: "",
    });
    const history = useHistory()

    const [petCreated, setPetCreated] = useState(false);

    const [errors, setErrors] = useState([]);

    function handleChange(event) {
        setPet({ ...pet, [event.target.name]: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setPetCreated(false);
        setErrors([]);
        axios
            .post("http://localhost:8000/pets/new", pet)
            .then((response) => {
                setPetCreated(true);
                history.push("/")
            })
            .catch((err) => {
                console.log(err.response);
                const data = err.response.data;
                const errorMessages = [];
                if ("errors" in data) {
                    for (let field in data.errors) {
                        const validationError = data.errors[field];
                        errorMessages.push(validationError.message);
                    }
                }
                setErrors(errorMessages);
            });
            
    }
    return (
        <div style={{margin:"20px"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1>Pet Shelter</h1>
                <Link to={"/"}>
                    Back to the home
                </Link>
            </div>
            <h1>Create Pet</h1>
            {errors.map((errorMessage, index) => (
                <div key={index} style={{ color: "red" }}>Error: {errorMessage}</div>
            ))}
            {petCreated && <div style={{ color: "green" }}>Pet has been successfully created</div>}

            <PetForm handleChange={handleChange} handleSubmit={handleSubmit} {...pet} />
            <button style={{backgroundColor:"blue", color:"white", padding:"8px"}} onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default CreatePet;
