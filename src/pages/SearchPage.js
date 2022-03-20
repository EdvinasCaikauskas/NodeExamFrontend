import React, {useState} from 'react';
import Filter from "../comps/Filter";
import SinglePost from "../comps/SinglePost";

const SearchPage = () => {
    const [posts, setPosts] = useState([])
    return (
        <div className="search">
            <div className="center">
                <Filter setPosts={setPosts}/>
            </div>
            <div className="search-container">
                {posts.map((x, i) => <SinglePost item={x} key={i}/>)}
            </div>
        </div>
    );
};

export default SearchPage;