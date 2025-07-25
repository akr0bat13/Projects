import { NavLink } from "react-router";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
  <NavLink to='/'>
    Главная
  </NavLink>
  <NavLink to='/users'>
    Пользователи
  </NavLink>
    </header>
  )
};