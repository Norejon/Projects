import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import postService from "../../services/postService";

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {postId&&
        postService.getById(postId)
            .then(value => value.data)
            .then(post => setPost({...post}));
    }, [postId]);
    return (
        <div>
            {post &&
                <>
                    <div>userId: {post.userId}</div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </>
            }
        </div>
    )
}
export default PostDetails;