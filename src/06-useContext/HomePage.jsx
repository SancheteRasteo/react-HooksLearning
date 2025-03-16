import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

    const { user } = useContext( UserContext )

    return (
        <>
            <h1>Home Page</h1>
            <hr />

            <p>Hello { user?.usuario }</p>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
        </>
    )
}
