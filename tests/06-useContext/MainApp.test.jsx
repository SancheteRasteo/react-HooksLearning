const { screen, render } = require("@testing-library/react");
const { MainApp } = require("../../src/06-useContext");
const { MemoryRouter } = require("react-router-dom");


describe('Pruebas en <MainApp/>', () => { 

    test('debe de mostrar el <HomePage/>', () => { 

        render(
            <MemoryRouter>
                <MainApp/> 
            </MemoryRouter>
        );

        screen.debug();

        expect( screen.getByText( "Home Page" ) );

    })

    test('debe de mostrar el <LoginPage/>', () => { 

        render(
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp/> 
            </MemoryRouter>
        );

        screen.debug();

        expect( screen.getByText( "Login Page" ) );

    })

    test('debe de mostrar el <AboutPage/>', () => { 

        render(
            <MemoryRouter initialEntries={["/about"]}>
                <MainApp/>
            </MemoryRouter>
        );

        // screen.debug();

        expect( screen.getByText( "About Page" ) );

    })

    test('debe de manejar las rutas no especificadas', () => { 

        render(
            <MemoryRouter initialEntries={["/Mallorca"]}>
                <MainApp/>
            </MemoryRouter>
        );

        // screen.debug();

        expect( screen.getByText( "Login Page" ) );

    })

})
