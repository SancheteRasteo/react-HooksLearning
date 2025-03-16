import { TodoListItem } from "./TodoListItem"


export const TodoList = ({ todos, onRemoveTodo, onDoneTodo }) => {
    return (
        <ul className="list-group">
            {
                todos.map( todo => (
                    <TodoListItem 
                        key={ todo.id } 
                        { ...todo } 
                        onRemoveTodo={ onRemoveTodo }
                        onDoneTodo={ onDoneTodo }
                    />
                ))
            }
        </ul>
    )
}
