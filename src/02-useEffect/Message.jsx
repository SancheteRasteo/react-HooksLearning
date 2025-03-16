import { useEffect, useState } from "react"



export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 })

    useEffect(() => {
        
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y })
        }
        
        window.addEventListener( "mousemove", onMouseMove );   // Se usa una funcion para ocupar siempre el mismo espacio de memoria

        return () => {
            window.removeEventListener( "mousemove", onMouseMove );    // si no se hace esto da error
        }
    }, [])
    

    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify( coords ) }
        </>
    )
}
