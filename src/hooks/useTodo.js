import { useEffect, useReducer } from "react"
import { todoReducer } from "./index";


const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}


export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify(todos) );
    }, [todos])
    

    const onNewTodo = ( todo ) => {

        const action = {
            type: 'Add Todo',
            payload: todo
        }
    
        dispatch( action );
    }

    const onRemoveTodo = ( id ) => {

        const action = {
            type: 'Remove Todo',
            payload: id
        }
    
        dispatch( action );
    }

    const onDoneTodo = ( id ) => {
        const action = {
            type: 'Done Todo',
            payload: id
        }
        
        dispatch( action );
    }

    return {
        onDoneTodo,
        onNewTodo,
        onRemoveTodo,
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter( todo => !todo.done).length
    }
}
