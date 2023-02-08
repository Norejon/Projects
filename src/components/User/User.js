import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";


const User = ({user}) => {
    const {id, name, username} = user;
    let dispatch = useDispatch();
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <button onClick={()=>dispatch(userActions.setSelectedUser(user))}>Select</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>ApiSelect</button>
        </div>
    );
};

export default User;