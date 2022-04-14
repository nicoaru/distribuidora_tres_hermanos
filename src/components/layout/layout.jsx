import { NavBar } from "./navBar/navBar";
import { Footer } from "./footer/footer";
import './layout.css'

function Layout({children}) {

    return(
    <main className='main'>
        <NavBar/>
        {children}
        <Footer/>

    </main>


    )
}


export { Layout }