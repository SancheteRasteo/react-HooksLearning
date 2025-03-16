import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks"


describe('Pruebas en useCounter', () => { 

    const initialValue = 100;

    test('debe de retornar los valores por defecto', () => { 

        const { result } = renderHook( () => useCounter() );
        const { increment, reset, decrement, counter } = result.current;

        expect( counter ).toBe( 10 );
        expect( increment ).toEqual( expect.any( Function ) ); 
        expect( reset ).toEqual( expect.any( Function ) ); 
        expect( decrement ).toEqual( expect.any( Function ) ); 

    })

    test('debe de generar el counter con valor 100', () => { 

        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter } = result.current;

        expect( counter ).toBe( initialValue );

    })

    test('debe de incrementar el contador', () => { 

        const { result } = renderHook( () => useCounter( initialValue ) );
        const { increment, counter } = result.current;
        
        act( () => {
            increment();
            increment(3);
        });

        expect( result.current.counter ).toBe( initialValue + 4 )

    })

    test('debe de decrementar el contador', () => { 

        const { result } = renderHook( () => useCounter( initialValue ) );
        const { decrement, counter } = result.current;
        
        act( () => {
            decrement();
            decrement(3);
        });

        expect( result.current.counter ).toBe( initialValue - 4 )

    })

    test('debe de resetear el contador', () => { 

        const { result } = renderHook( () => useCounter( initialValue ) );
        const { increment, counter, reset } = result.current;
        
        act( () => {
            increment();
            increment(3);
            reset();
        });

        expect( result.current.counter ).toBe( initialValue )

    })

})