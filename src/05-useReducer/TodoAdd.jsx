import { useState } from "react";
import { useForm } from '../hooks/useForm'


export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: "",
    })

    const onSubmit = ( event ) => {
        event.preventDefault();

        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo( newTodo );
        onResetForm();
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Una tarea"
                className="form-control"
                name="description"
                value={ description }   
                onChange={ onInputChange }                     
            />
        </form>
    )
}
