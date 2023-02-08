import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    let {selectedUser} = useSelector(state => state.users);
    const {selectedPost} = useSelector(state => state.posts);
    console.log(selectedPost);
    return (
        <div>
            {selectedPost && selectedPost.title}
            {/*{selectedUser && selectedUser.name}*/}
            <br/>
            {selectedPost && selectedPost.body}
            {/*{selectedUser&& selectedUser.username}*/}
            <hr/>
        </div>
    );
};

export default Header;