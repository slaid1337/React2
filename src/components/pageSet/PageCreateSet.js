import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import '../css/Form.css';
export function PageCreateSet(){
    return<div>
        <Header/>
        <h3>Создание сета карточке</h3>
        <Outlet/>
    </div>
}