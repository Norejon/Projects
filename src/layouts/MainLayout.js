import NavigationLinks from "../components/NavigationLinks/NavigationLinks";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div>
            <NavigationLinks/>
            <Outlet></Outlet>
        </div>
    )
}
export default MainLayout;