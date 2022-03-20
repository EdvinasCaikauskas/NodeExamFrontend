import React from 'react';
import {useRef} from "react";
import http from "../plugins/http"

const Filter = ({setPosts}) => {

    const city = useRef()

    async function search() {
        const item = {
            city: city.current.value
        }

        const data = await http.post(item, "/search")
        setPosts(data.posts)
    }

    return (
        <div className="filter">
            <input type="text" ref={city} placeholder="city"/>

            <button onClick={search}>Search</button>
        </div>
    );
};

export default Filter;