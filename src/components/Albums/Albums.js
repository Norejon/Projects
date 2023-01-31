import {useEffect, useState} from "react";
import albumsService from "../../services/albumsService";
import Album from "./Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll()
            .then(value => value.data)
            .then(albums => setAlbums([...albums]))
    }, [])

    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    )
}
export default Albums;