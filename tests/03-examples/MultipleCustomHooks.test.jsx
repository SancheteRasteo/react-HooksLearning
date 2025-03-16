import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from '../../src/03-examples/index'
import { useFetch } from "../../src/hooks";

jest.mock( "../../src/hooks/useFetch" );

describe('Pruebas en <MultipleCustomHooks/>', () => { 

    test('debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })

        render( <MultipleCustomHooks/> );
        screen.debug();

        expect( screen.getByText( "Cargando" ) );
        expect( screen.getByText( "Informacion de Pokemons" ) );
        expect( screen.getByRole( "textbox", {name: "pokemonNumber"} ) );

    })

    test('debe de mostrar un Pokemon', () => { 

        const pokemonData = {
            data: { 
                id: 213,
                name: "shuckle",
                sprites: {
                    other: {
                        ['official-artwork']: {
                            front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png"
                        }
                    }
                }
            },
            isLoading: false,
            hasError: false,
            error: null,
        }

        useFetch.mockReturnValue( pokemonData );

        render( <MultipleCustomHooks/> );
        screen.debug();

        expect( screen.getByRole( "img" ) );
        expect( screen.getByText(`${ pokemonData.data.id } - ${ pokemonData.data.name }` ) );

    })

    test('debe de mostrar un error con mensaje', () => { 

        const pokemonData = {
            data: null,
            isLoading: false,
            hasError: true,
            error: {
                message: "Hubo un error",
                code: "123"     
            },
        }

        useFetch.mockReturnValue( pokemonData )

        render( <MultipleCustomHooks/> );
        screen.debug();

        expect( screen.getByText( JSON.stringify( pokemonData.error ) ) );

    })

})