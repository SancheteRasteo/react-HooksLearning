import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const initialFormState = {
        username: "Sanchete2711",
        email: "qwedfrtghyu@gmail.com"
    }

    const [ formState, setFormState ] = useState( initialFormState );
    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value,   // propiedad computada
        });
    }

    // useEffect(() => {
        
    // }, [])               // Cuando cambia algo a traves de un useState

    // useEffect(() => {
        
    // }, [ email ])               // Cuando cambia el email del FormState a traves de un useState

    // Se recomienda la separacion del useEffect para tareas multiples
    

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
        
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="JhonDoe123@mail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                username == "Sanchete2711" && <Message/>
            }
        </>
    )
}
