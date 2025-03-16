import { useCounter } from '../hooks/useCounter'


export const CounterCustomHook = () => {

    const initialValue = 10;
    const changeValue = 3;

    const { counter, increment, decrement, reset } = useCounter( initialValue );

    return (
        <>
            <h1>Counter con Hook: { counter }</h1>

            <hr />

            <button className="btn btn-primary" onClick={ () => increment( changeValue ) }>+{ changeValue }</button>
            <button className="btn btn-primary" onClick={ () => reset( initialValue ) }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement( changeValue ) }>-{ changeValue }</button>
        </>
    )
}
