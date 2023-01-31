import {NavLink} from "react-router-dom";
import css from './NavigationLinks.module.css';

const NavigationLinks = () => {

    return (
        <div className={css.Navigation}>
            <NavLink to={'/albums'}>Albums</NavLink>
            <NavLink to={'/todos'}>Todos</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    )
}
export default NavigationLinks;