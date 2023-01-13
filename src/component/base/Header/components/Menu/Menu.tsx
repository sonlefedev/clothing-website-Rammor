import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import style from "./style.module.scss";
import menus from "../data/menu";

type Props = {};
const cx = classNames.bind(style);
const Menu = (props: Props) => {
    return (
        <nav className={cx("wrapper-menu")}>
            <ul>
                {menus.map((data) => (
                    <li key={data.id}>
                        <Link to={data.link}>
                            <span>{data.text}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
