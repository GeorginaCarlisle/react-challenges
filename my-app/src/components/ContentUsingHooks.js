import React, {useState, useEffect} from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from './PostItem';
import Loader from './Loader';

function ContentUsingHooks() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);


    useEffect(() => {
        setTimeout(()=>{
            setIsLoaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, []);

    const handleSearch = (event) => {
        let author = event.target.value.toLowerCase();
        let filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(author);
        });
        setFetchedPosts(filteredPosts);
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
                        placeholder='By Author'
                        onChange={(event)=>{handleSearch(event)}}/>
                </form>
                <h4>posts found: {fetchedPosts.length}</h4>
            </div>
            <div className={css.SearchResults}>
                {
                    isLoaded ? 
                    <PostItem savedPosts={fetchedPosts} />
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default ContentUsingHooks