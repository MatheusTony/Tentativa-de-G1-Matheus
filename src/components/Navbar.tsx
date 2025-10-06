import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return(
        <header className='fixed-navbar'>
            <h1> Refatoração To-Do List com favoritos</h1>
            <nav>
                <Link to ="/" className='titulos'>Home</Link>
                <Link to ="/favoritos" className='titulos'>Favoritos</Link>
            </nav>
        </header>
    );
}


export default Navbar;