import React, {useEffect, useState} from 'react'
import axios from 'axios'
import API_KEY from '../secrets'
import css from './css/Content.module.css'
import Loader from './Loader';
import PostItemAPI from './PostItemAPI';


function ContentAPI() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    //const [imageType, setImageType] = useState("photo");
    const [error, setError] = useState(null);

    useEffect(() => {
        const imageType = "photo";
        let apiAddress = "";
        searchTerm ? (apiAddress = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=${imageType}&per_page=20`) : (apiAddress = `https://pixabay.com/api/?key=${API_KEY}&image_type=${imageType}&per_page=20`)
        axios.get(apiAddress)
        .then(response => {
            console.log(response);
            const data = Array.isArray(response.data.hits) ? response.data.hits : [response.data.hits];
            setPosts(data);
            setIsLoaded(true);
        })
        .catch(error => {
            setError(error.message);
        })
    }, [searchTerm])

    const handleSearch = (event) => {
        let searchWord = event.target.value.toLowerCase();
        setSearchTerm(searchWord);
    }

    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <form>
                    <label htmlFor='searchInput'>Search:</label>
                    <input 
                        type='search' 
                        id='searchInput' 
                        placeholder='key word'
                        onChange={handleSearch}/>
                </form>
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded ? 
                    ( error ? <p>{error}</p> :
                    <PostItemAPI savedPosts={posts} />)
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentAPI