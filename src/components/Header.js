import './css/Header.css'
import { Link } from 'react-router-dom';
export function Header(){
    return(
        <div className='header'>
            <h1>
                <Link className='link' to="/">флеш карточка</Link>
            </h1>
            <nav className='main-menu'>
                <ul>
                    <li>
                        <Link className='main-menu__link link' to="/admin/createset">Создать сет </Link>
                        <Link className='main-menu__link link' to="/admin/createcard">Создать карточку</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}