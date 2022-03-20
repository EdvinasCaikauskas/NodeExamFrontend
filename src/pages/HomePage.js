import {useState} from 'react';
import {useEffect} from "react";
import http from "../plugins/http"
import SinglePost from "../comps/SinglePost";

const HomePage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        http.get("/getAll").then(res => {
        setPosts(res.posts)
        })
    }, [])

    return (
        <div className="home">
            {posts.map((x, i) => <SinglePost item={x} key={i}/>)}
        </div>
    );
};

export default HomePage;