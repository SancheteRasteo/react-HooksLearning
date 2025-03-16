import { render, screen } from "@testing-library/react"
import { HomePage } from "../../src/06-useContext/HomePage"
import { UserContext } from "../../src/06-useContext/context/UserContext";


describe('Pruebas en <HomePage/>', () => { 

    const user = {
        id: 1,
        usuario: "Sanchete",
    }

    test('debe de mostrar el componente sin el usuario ', () => { 
    
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider> 
        );

        screen.debug();

        expect( screen.getByText( "null" ) );

    })

    test('debe de mostrar el componente sin el usuario ', () => { 
    
        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage/>
            </UserContext.Provider> 
        );

        screen.debug();

        expect( screen.getByText( `Hello ${user.usuario}` ) );

    })

})