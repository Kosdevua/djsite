import "./Navbar.css";
import "tailwindcss";

import { useDispatch, useSelector } from "react-redux";
import { toggleUnlock } from "../../store/slice";
const Navbar = () => {
  const dispatch = useDispatch();
  const unlock = useSelector((state) => state.app.unlock);

  const handleClick = () => {
    if (unlock) {
      dispatch(toggleUnlock());
    }
  };

  return (
    <>
      <nav className="">
        <div className="navbar__burger" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="flex flex-col gap-2 navbar__list">
          <li>
            <a className="" href="#home">
              Головна
            </a>
          </li>
          <li>
            <a href="#about">Про себе</a>
          </li>
          <li>
            <a href="#services">Послуги</a>
          </li>
          <li>
            <a href="#equipments">Обладнання</a>
          </li>
          <li>
            <a href="#reviews">Відгуки</a>
          </li>
          <li>
            <a href="#gallery">Галерея</a>
          </li>
          <li>
            <a href="#contact">Контакти</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
