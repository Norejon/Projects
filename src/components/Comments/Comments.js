import {useEffect, useState} from "react";
import commentsService from "../../services/commentsService";
import Comment from "./Comment";


const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll()
            .then(value => value.data)
            .then(comments => setComments([...comments]))
    }, [])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}
export default Comments;