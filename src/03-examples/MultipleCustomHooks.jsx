import { useState } from "react";
import { useFetch, useForm } from "../hooks"
import { LoadingMessage, PokemonCard } from "./index";
import { toast } from "react-toastify";


export const MultipleCustomHooks = () => {

    const predValue = "swampert";
    const urlBase = "https://pokeapi.co/api/v2/pokemon/";

    const { pokemonNumber, onInputChange, onResetForm } = useForm({
        pokemonNumber: "",
    }); 

    const [searchUrl, setSearchUrl] = useState(urlBase + predValue);

    const onSubmitInput = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            const number = parseInt(pokemonNumber);
            
            // Validación: Si el número es <= 0 o > 1023, mostrar un toast y no enviar el formulario
            if (number <= 0 || number > 1023) {
                toast.warning("Pokemon no existente", {
                    position: "top-center",
                    autoClose: 2500,
                });
                return;
            }

            setSearchUrl( urlBase + pokemonNumber );
            onResetForm();
        }
    }

    const { data, hasError, isLoading, error } = useFetch( searchUrl );

    const sprite = data?.sprites.other['official-artwork'].front_default;


    return (
        <>
            <h1>Informacion de Pokemons</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Pokemon Number or Name"
                name="pokemonNumber"
                value={ pokemonNumber }
                onChange={ onInputChange }
                onKeyDown={ onSubmitInput }
                aria-label="pokemonNumber"
            />

            { isLoading ?
                <LoadingMessage/> : 
                !hasError && <PokemonCard id={data.id} name={data.name} sprite={sprite}/>}

            { hasError && <pre>{JSON.stringify(error)}</pre> }

            {/* <pre> Pokemon Info: { JSON.stringify( data, null, 2 ) } </pre> */}
            
        </>
    )
}
