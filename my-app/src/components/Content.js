import React, { Component } from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from "../posts.json";
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoaded: false
        }
    }

    getData() {
        console.log("getData called")
        setTimeout(() => {
            console.log("Timeout called")
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }

    componentDidMount() {
        console.log("Component has mounted")
        this.getData()
    }

    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded ? 
                        <PostItem savedPosts={savedPosts} />
                        : <Loader />
                    }
                </div>
            </div>
        )
    }
}

export default Content