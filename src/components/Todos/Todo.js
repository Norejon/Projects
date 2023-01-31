const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo;

    return (
        <div>
            <div>Id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
            <hr/>
        </div>
    )
}
export default Todo;