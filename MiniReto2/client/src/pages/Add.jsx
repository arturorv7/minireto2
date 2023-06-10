import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const Add = () => {
    const [album, setAlbum] = useState({
        band: "",
        name: "",
        release_date: null,
        track_count: null,
        cover: "",
    });

    const [error, setError] = useState(false)
    const navigate = useNavigate();
    const handleChange = (e) => {
        setAlbum((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    };

    const handleClick = async(e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:3000/albums", album);
            navigate("/");
        }catch(err){
            console.log(err);
            setError(true);
        }
    };

    return(
        <div className = "form">
            <h1>Add Album</h1>
            <input
                type = "text"
                placeholder = "Name:"
                name = "name"
                onChange = {handleChange}
            />
            <input
                type = "text"
                placeholder = "Band:"
                name = "band"
                onChange = {handleChange}
            />
            <input
                type = "date"
                placeholder = "Release date:"
                name = "date"
                onChange = {handleChange}
            />
            <input
                type = "number"
                placeholder = "Track count:"
                name = "tracks"
                onChange = {handleChange}
            />
            <input
                type = "text"
                placeholder = "Cover:"
                name = "cover"
                onChange = {handleChange}
            />
            <button className = "formButton" onClick = {handleClick}>Add</button>
            {error && "Something went wrong!"}
            <button className = "returnButton">
                <Link to = "/">Return Home</Link>
            </button>
        </div>
    );
};

export default Add