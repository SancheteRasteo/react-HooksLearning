import { useEffect, useState } from "react"


const localCache = {};


export const useFetch = ( url ) => {

    const initialState = {
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    }

    const [state, setState] = useState( initialState )

    const getFetch = async() => {

        if( localCache[url] ) {
            setState({
                ...state,
                data: localCache[url],
                isLoading: false,
            })
            return;
        }

        setInitialState();

        const resp = await fetch( url );

        // sleep
        await new Promise(resolve => setTimeout(resolve, 1500))

        if( !resp.ok ) {
            setState({
                ...state,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            })
            
            return;
        }

        const data = await resp.json();

        setState({
            ...state,
            data: data,
            isLoading: false,
        })

        localCache[url] = data;
    }

    useEffect(() => {
        getFetch();
    }, [ url ])

    const setInitialState = () => {
        setState( initialState );
    }
        

    return {
        ...state,
        data: state.data,
    }
}
