import css from './Comment.module.css';
import {Link} from "react-router-dom";
const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return(
        <div>
        <Link to={id.toString()} className={css.Link}>
        <div>
            <div className={css.Comment}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
                <hr/>
        </div>
        </div>
            </Link>
        </div>

    )
}
export default Comment;