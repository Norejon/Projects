import Comments from "../../components/Comments/Comments";
import css from './Component.module.css';
import PostDetails from "../../components/PostDetails/PostDetails";


const CommentsPage = () => {

    return (
        <div>
            <h3>CommentsPage</h3>
            <div className={css.CommentsPage}>
                <Comments/>
                <PostDetails/>
            </div>
        </div>
    )
}
export default CommentsPage;