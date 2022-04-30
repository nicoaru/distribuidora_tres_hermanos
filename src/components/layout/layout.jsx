import { NavBar } from "../navBar/navBar";
import { Footer } from "../footer/footer";
import './layout.css'
import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <main className='main'>
            <NavBar />
            <Outlet />
            <Footer />

        </main>


    )
}


export { Layout }