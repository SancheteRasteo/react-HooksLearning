

export const TodoListItem = ({ id, description, done, onRemoveTodo, onDoneTodo }) => {
    return (
        <li 
            className="list-group-item d-flex justify-content-between" 
            onDoubleClick={ () => onDoneTodo( id ) }
        >
            <span className={`align-self-center ${ done ? 'text-decoration-line-through' : '' }`}>{ description }</span>
            <div>
                <button className="btn btn-success" onClick={ () => onDoneTodo( id ) }>
                    Done
                </button>
                <button className="btn btn-danger" onClick={ () => onRemoveTodo( id ) }>
                    Borrar
                </button>
            </div>
        </li>
    )
}
