import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    return (
        <div className="friend-div">
            <h1> i am {name} {id}</h1>
            <h3>Call Me :{phone}</h3>
            <h4>Visit Me :{website}</h4>
            <p>I live in {address.city}</p>
            <Link to={`/friend/${id}`} >Visit Me</Link>




        </div>
    );
};

export default Friend;