import './PersonStyle.css';

const PersonComponent = (props) => {
    let{id,name,status,species,gender,image} = props;
    return(
        <div className={'PersonDiv'}>
            <img src={image} alt={name}/>
            <div>
            <p>Name: {name}</p>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            </div>
        </div>
    );
}
export default PersonComponent;