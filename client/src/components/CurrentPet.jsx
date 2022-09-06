import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"

const CurrentPet = (props) => {
    //const { removeFromDom } = props;
    const [pet, setPet] = useState([]);
    const { petId } = useParams()
    const [counter, setCounter] = useState(0)
    const history = useHistory()

    const handleCounter = () => {
        setCounter(counter + 1)
    }
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/delete/' + petId)
            .then(res => {
                setPet(pet.filter(petId => pet._id != petId));
            })
            .catch(err => console.error(err));
        history.push("/")
    }

    useEffect(() => {
        axios.get("http://localhost:8000/pet/" + petId)
            .then(res => {
                setPet(res.data)
            })
    }, [])

    return (
        <div style={{ margin: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1>Pet Shelter</h1>
                <Link to={"/"}>
                    back to home
                </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h2>Deatls About: {pet.name}</h2>
                <button style={{ backgroundColor: "red", color: "white", padding: "8px" }} onClick={(event) => deletePet(pet._id)}>
                    Adopt {pet.name}
                </button>
            </div>

            <div style={{ border: "solid 1px", padding: "20px" }}>
                <p>Pet type : {pet.type}</p>
                <p>Descriptions : {pet.description}</p>
                <p>Skill 1 : {pet.skill1}</p>
                <p>Skill 2 : {pet.skill2}</p>
                <p>Skill 3 : {pet.skill3}</p>
                <button style={{ backgroundColor: "green", color: "white", padding: "8px" }} onClick={handleCounter}>Like {pet.name}</button><p>{counter} Like(s)</p>
            </div>

        </div>
    )
}

export default CurrentPet;

