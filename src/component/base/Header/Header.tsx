import Menu from "./components/Menu";
import { CiSearch } from "react-icons/ci";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import AppStore from "../../../app/Context/AppStore";
import BtnMenuMobile from "./components/BtnMenuMobile";
import CommonPropertiesBigComponent from "../../common/CommonPropertiesBigComponent";

type Props = {};
const cx = classNames.bind(style);
const Header = (props: Props) => {
    const { setIsOpenSearchLayer } = AppStore();

    return (
        <CommonPropertiesBigComponent
            className_wrapper={cx("wrapper-header")}
            classNameCommonPropertiesBigComponent={cx("header")}
        >
            <BtnMenuMobile />
            <Link className={cx("link-home")} to={"/"}>
                <img
                    src={require("../../../static/img/RAMMOR-LOGOSCHWARZ-84_100x.png")}
                    alt=""
                />
            </Link>
            <Menu />
            <ul className={cx("header-icon")}>
                <li onClick={() => setIsOpenSearchLayer((prev) => !prev)}>
                    <CiSearch className={cx("icon", "search")} />
                </li>
                <li>
                    <Link to="/cart">
                        <svg className={cx("icon")}>
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
                                fillRule="evenodd"
                            />
                        </svg>
                    </Link>
                </li>
            </ul>
        </CommonPropertiesBigComponent>
    );
};

export default Header;
