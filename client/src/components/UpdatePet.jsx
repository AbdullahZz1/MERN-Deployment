import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PetForm from "./PetForm";
import { Link } from 'react-router-dom';


const UpdatePet = () => {
    const [pet, setPet] = useState({
        name: "",
        type:"",
        description: "",
    });

    const [petUpdated, setPetUpdated] = useState(false);

    const [errors, setErrors] = useState([]);

    function handleChange(event) {
        setPet({ ...pet, [event.target.name]: event.target.value });
    }

    const { petId } = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/pet/" + petId)
        .then(res => {
            setPet(res.data)
        })
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        setPetUpdated(false);
        setErrors([]);
        axios.put('http://localhost:8000/pets/' + petId+"/edit", pet)
            .then((response) => {
                console.log("done")
                setPetUpdated(true);
            })
            .catch((err) => {
                console.log("not")
                const data = err.response.data;
                const errorMessages = [];
                console.log(data);
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
            <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between"}}>
            <h1>Pet Shelter</h1>
            <Link to={"/"} >
                <div style={{marginLeft:"600px"}}>Back to Home</div>
            </Link>
            </div>
            <h1>Edit {pet.name}</h1>
            {errors.map((errorMessage, index) => (
                <div key={index}>Error: {errorMessage}</div>
            ))}
            {petUpdated && <div style={{color:"green"}}>Pet has been successfully updated</div>}

            <PetForm handleChange={handleChange} handleSubmit={handleSubmit} {...pet} />
            <button style={{backgroundColor:"blue", color:"white", padding:"8px"}} onClick={handleSubmit}>Update</button>
        </div>
    );
};

export default UpdatePet;
