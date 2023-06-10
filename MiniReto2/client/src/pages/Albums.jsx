import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Albums = () => {
    const [albums, setAlbums] = useState( [] );

    useEffect(() => {
        const fetchAlbums = async () => {
            try{
                const res = await axios.get("http://localhost:3001/albums");
                setAlbums(res.data);
            }catch(err){
                console.log(err);
            }
        };
        fetchAlbums();
    }, []);

    console.log(albums);

    const handleDelete = async(id) => {
        try{
            await axios.delete(`http://localhost:3000/albums/${id}`);
            window.location.reload()
        }catch(err){
            console.log(err);
        }
    };

    return(
        <div>
            <h1 id = "header1">Progressive Rock Albums</h1>
            <button className = "addAlbum">
                <Link to = "/add" style = {{color:"inherit", textDecoration: "none"}}>Add Album</Link>
            </button>
            <div className = "albums">
                {albums.map((album) => (
                    <div className = "album" key = {album.id}>
                        <img src = {album.cover}/>
                        <h2>{album.name}</h2>
                        <p>{album.band}</p>
                        <p>{album.release_date}</p>
                        <p>Tracks: {album.track_count}</p>
                        <button className = "delete" onClick = {() => handleDelete(album.id)}>Delete</button>
                        <button className = "update">
                            <Link to = {`/update/${album.id}`} style = {{color : "inherit", textDecoration: "none"}}>Update</Link>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Albums;