import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, LoginPage } from "./index"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"


export const MainApp = () => {
    return (
        <UserProvider>
            <NavBar/>
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="about" element={ <AboutPage/> } />
                <Route path="login" element={ <LoginPage/> } />

                {/* //Manejo de Rutas no existentes */}
                <Route path="/*" element={ <Navigate to="/login" /> } />
            </Routes>
        </UserProvider>
    )
}
