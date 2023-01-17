import './SimpsonStyle.css'
const SimpsonComponent = (props) =>{
    let {name,gender,img} = props;
    return(
        <div>
            <h1>{name}</h1>
            <h3>{gender}</h3>
            <img className={'photo'} src={img} alt={name}/>
        </div>
    );
}
export default SimpsonComponent;