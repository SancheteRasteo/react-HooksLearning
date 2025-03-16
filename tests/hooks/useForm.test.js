import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks"


describe('Pruebas en useForm', () => { 

    const initialForm = {
        user: "Sanchete2711",
        contra: "123456",
        email: "qwedfrtghyu@gmail.com"
    }

    test('debe de regresar los valores por defecto', () => { 

        const { result } = renderHook( () => useForm( initialForm ) );

        expect( result.current ).toEqual({
            user: initialForm.user,
            contra: initialForm.contra,
            email: initialForm.email,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })

    })

    test('debe de cambiar el nombre del formulario', () => { 

        const valueChange = "Sanchete";

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, user } = result.current;

        act( () => {
            onInputChange( { target: { name: "user", value: valueChange } } );
        });

        expect( result.current.user ).toBe( valueChange );

    })

    test('debe de resetear el nombre del formulario', () => { 

        const valueChange = "Sanchete";

        const { result } = renderHook( () => useForm( initialForm ) );
        const { onInputChange, user, onResetForm } = result.current;

        act( () => {
            onInputChange( { target: { name: "user", value: valueChange } } );
            onResetForm();
        });

        expect( result.current.user ).toBe( initialForm.user );

    })

})