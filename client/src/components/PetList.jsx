import './css/table.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const PetList = (props) => {
    const [pet, setPet] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/")
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <div style={{ margin: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1>Pet Shelter</h1>
                <div>
                    <Link to={"/pets/new"}>
                        <p>Add Pet to the Shelter</p>
                    </Link>
                </div>
            </div>
            <h4>These Pets are looking for a good home: </h4>

            <div >
                {!isLoaded ? (
                    <div>Loading...</div>
                ) : (
                    <table >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {pet.map((pet, index) => (
                                <tr key={index}>
                                    <td>{pet.name}</td>
                                    <td>{pet.type}</td>
                                    <td>
                                        <Link to={"/pet/" + pet._id}>

                                            Details
                                        </Link>
                                        |
                                        <Link to={"/pets/" + pet._id + "/edit"}>
                                            Update
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default PetList;

