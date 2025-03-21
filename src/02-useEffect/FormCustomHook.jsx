import { useEffect } from "react"
import { useForm } from "../hooks/useForm";


export const FormCustomHook = () => {
    
    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: "Sanchete2711",
        email: "qwedfrtghyu@gmail.com",
        password: "24252724"
    });


    return (
        <>
            <h1>Formulario con Custom Hook</h1>
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

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button className="btn btn-danger mt-2" onClick={ onResetForm }>Reset</button>
        </>
    )
}
