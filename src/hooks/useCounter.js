import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = ( value = 1 ) => {
        setCounter( current => current + value );
    }

    const decrement = ( value = 1 ) => {
        if( counter - value < 0) return;

        setCounter( current => current - value );
    }

    const reset = ( value = initialValue ) => {
        setCounter( value );
    }


    return {

        counter,
        increment,
        decrement,
        reset,

    }

}