import PostDetails from "../../components/PostDetails/PostDetails";
import {Outlet} from "react-router-dom";

const PostDetailsPage= ()=>{

    return(
        <div>
            <h3>PostDetailsPage</h3>
            <PostDetails/>
            <Outlet/>
        </div>
    )
}
export default PostDetailsPage;