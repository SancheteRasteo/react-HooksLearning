import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import { useForm } from '../hooks'


export const LoginPage = () => {

    const { setUser } = useContext( UserContext );
    
    const { usuario, onInputChange, onResetForm } = useForm({
        usuario: ""
    });

    const onSubmit = () => {
        
        setUser({
            usuario
        });

        onResetForm();
    }

    return (
        <>
            <h1>Login Page</h1>
            <hr />

            <input 
                type="text" 
                placeholder="Usuario"
                name="usuario"
                value={ usuario }
                className="form-control"
                onChange={ onInputChange }
            />

            <button className="btn btn-success" onClick={ onSubmit }>
                Loguearse
            </button>
        </>
    )
}
