import classNames from "classnames/bind";
import style from "./style.module.scss";
import menus from "../data/menu";
import { Link } from "react-router-dom";
import AppStore from "../../../../../app/Context/AppStore";

type Props = {
    state: boolean;
};

const cx = classNames.bind(style);

const MenuMobile = (props: Props) => {
    const { state } = props;
    const {setIsOpenMenuMobile} = AppStore()
    return (
        <div onClick={() => setIsOpenMenuMobile(false)} className={cx("wrapper-menu-mobile", state && "open")}>
            <div className={cx("container")} onClick={(e) => e.stopPropagation()}>
                <nav>
                    <ul>
                        {menus.map((data) => (
                            <li key={data.id} onClick={() => setIsOpenMenuMobile(false)}>
                                <Link to={data.link}>
                                    <span>{data.text}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={cx("links")}></div>
            </div>
        </div>
    );
};

export default MenuMobile;
