import { TodoList, TodoAdd } from "./index"
import { useTodo } from "../hooks"


export const TodoApp = () => { 
    
    const { onDoneTodo, onNewTodo, onRemoveTodo, todos, todosCount, pendingTodos } = useTodo(  )

    return (
        <>
            <h1>Todo App: { todosCount }, 
                <small>
                    pendientes: { pendingTodos }
                </small> 
            </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onRemoveTodo={ onRemoveTodo } 
                        onDoneTodo={ onDoneTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>To Do's</h4>
                    <hr />

                    <TodoAdd onNewTodo={ onNewTodo }/>
                </div>
            </div>

        </>
    )
}
