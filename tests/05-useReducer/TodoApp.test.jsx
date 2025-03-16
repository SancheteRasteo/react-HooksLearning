const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/05-useReducer");
const { useTodo } = require("../../src/hooks");


jest.mock( "../../src/hooks" );


describe('Pruebas en <TodoApp/>', () => { 

    const todosValues = [{
        id: 1,
        description: "Hacer la Tarea",
        done: false,
    },{
        id: 2,
        description: "Limpiar la Pileta",
        done: true,
    }]

    useTodo.mockReturnValue({
        onDoneTodo: jest.fn(),
        onNewTodo: jest.fn(),
        onRemoveTodo: jest.fn(),
        todos: todosValues,
        todosCount: todosValues.length,
        pendingTodos: todosValues.filter( todo => !todo.done).length
    });

    test('debe de mostrar el componente correctamente', () => {
        
        render( <TodoApp/> );

        screen.debug();

        expect( screen.getByText( todosValues[0].description ) && screen.getByText( todosValues[1].description ) );
        expect( screen.getByRole( "textbox" ) )

    });

})