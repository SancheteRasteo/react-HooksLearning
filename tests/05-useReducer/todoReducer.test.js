const { todoReducer } = require("../../src/05-useReducer")


describe('Pruebas en todoReducer()', () => { 

    const initialState = [{
        id: 1,
        description: "Hace algo",
        done: false,
    }]

    test('debe devolver el valor inicial', () => { 
    
        const newState = todoReducer( initialState, {} );

        expect( newState ).toBe( initialState )

    })

    test('debe de agregar un Todo', () => { 

        const action = {
            type: "Add Todo",
            payload: {
                id: 2,
                description: "Pileta",
                done: false,
            }
        }

        const newState = todoReducer( initialState, action );

        expect( newState ).toEqual( [ ...initialState, action.payload ] )
        // o
        expect( newState ).toContain( action.payload )

    })

    test('debe de remover un Todo', () => { 

        const action = {
            type: "Remove Todo",
            payload: 1
        }

        const newState = todoReducer( initialState, action );

        expect( newState ).toEqual( [] )

    })

    test('debe de cambiar el estado done de un Todo', () => { 

        const action = {
            type: "Done Todo",
            payload: 1
        }


        const newState = todoReducer( initialState, action );

        expect( newState ).toEqual([{
            id: 1,
            description: "Hace algo",
            done: true,
        }])

        
        const newState2 = todoReducer( newState, action );

        expect( newState2 ).toEqual( initialState )

    })

})