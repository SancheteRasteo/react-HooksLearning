const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoListItem } = require("../../src/05-useReducer/TodoListItem");


describe('Pruebas en <TodoListItem/>', () => { 

    const todo = {
        id: 1,
        description: "Limpiar la pile",
        done: false,
    }

    const todoDone = {
        id: 1,
        description: "Limpiar la pile",
        done: true,
    }

    const troughLineClass = 'text-decoration-line-through';

    const onRemoveTodoMock = jest.fn();
    const onDoneTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el Todo pendiente de completar', () => {
        
        render( <TodoListItem 
                {...todo} 
                onRemoveTodo={ onRemoveTodoMock } 
                onDoneTodo={ onDoneTodoMock } 
            /> )
        
        screen.debug()

        expect( screen.getByText( todo.description ).className ).not.toContain( troughLineClass );
        expect( screen.getAllByRole( "button" ).length ).toBe( 2 );

    });

    test('debe de mostrar el Todo completado', () => {
        
        render( <TodoListItem 
                {...todoDone} 
                onRemoveTodo={ onRemoveTodoMock } 
                onDoneTodo={ onDoneTodoMock } 
            /> )
        
        screen.debug();

        expect( screen.getByText( todoDone.description ).className ).toContain( troughLineClass );

    });

    test('debe de cambiar el done al tocar el boton', () => {
        
        render( <TodoListItem 
                {...todo} 
                onRemoveTodo={ onRemoveTodoMock } 
                onDoneTodo={ onDoneTodoMock } 
            /> )


        fireEvent.click( screen.getAllByRole( "button" )[0] );

        expect( onDoneTodoMock ).toHaveBeenCalledWith( todo.id );

    });

    test('debe de borrar el Todo', () => {
        
        render( <TodoListItem 
                {...todo} 
                onRemoveTodo={ onRemoveTodoMock } 
                onDoneTodo={ onDoneTodoMock } 
            /> )
            

        fireEvent.click( screen.getByText( "Borrar" ) );

        expect( onRemoveTodoMock ).toHaveBeenCalledWith( todo.id );

    });

})