import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/06-useContext/LoginPage"
import { UserContext } from "../../src/06-useContext/context/UserContext";


describe('Pruebas en <LoginPage/>', () => { 

    const user = {
        usuario: "Sanchete"
    };

    test('debe de mostrarse el componente original', () => { 

        render( 
            <UserContext.Provider value={{}}>
                <LoginPage/>
            </UserContext.Provider>
        );

        screen.debug();

        expect( screen ).toMatchSnapshot();

    })

    test('debe de llamarse onSubmit y entregar el objeto especificado', () => { 

        const setUserMock = jest.fn();

        render( 
            <UserContext.Provider value={{ setUser: setUserMock }}>
                <LoginPage/>
            </UserContext.Provider>
        );

        screen.debug();

        const input = screen.getByRole( "textbox" );
        fireEvent.input( input, { target: { value: user.usuario } } );
        fireEvent.click( screen.getByRole( "button" ) );

        expect( setUserMock ).toHaveBeenCalledWith( user );

    })

})