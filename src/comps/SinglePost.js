import React from 'react';

const SinglePost = ({item}) => {
    return (
        <div>
            <img src={item.photo} alt=""/>
            <div><strong>city:</strong> {item.city}</div>
            <div><strong>price:</strong> {item.price}</div>
            <div><strong>description:</strong> {item.description}</div>
        </div>
    );
};

export default SinglePost;