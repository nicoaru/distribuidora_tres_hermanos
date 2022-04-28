import { NavBar } from "../navBar/navBar";
import { Footer } from "../footer/footer";
import './layout.css'
import { Outlet } from "react-router-dom";

function Layout({ children }) {

    return (
        <main className='main'>
            <NavBar />
            <Outlet />
            {children}
            <Footer />

        </main>


    )
}


export { Layout }