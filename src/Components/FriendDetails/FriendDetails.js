import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const { friendId } = useParams();
    const [user, setUser] = useState({});
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])
    return (
        <div>
            <h1>UserName: {user.name}</h1>
            <h3>Call @ {user.phone}</h3>
            <h3>Email : {user.email}</h3>
            <p>Address: {user.address?.city}</p>
            <h1>User Id : {user.id}</h1>

        </div>
    );
};

export default FriendDetails;