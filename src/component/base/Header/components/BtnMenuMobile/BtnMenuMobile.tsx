import classNames from "classnames/bind";
import style from "./style.module.scss";
import AppStore from "../../../../../app/Context/AppStore";

type Props = {};
const cx = classNames.bind(style);
const BtnMenuMobile = (props: Props) => {
    const {isOpenMenuMobile, setIsOpenMenuMobile} = AppStore()
    return (
        <div
            className={cx(
                "btn-menu-mobile-wrapper",
                isOpenMenuMobile && "open-menu"
            )}
            onClick={() => setIsOpenMenuMobile((prev) => !prev)}
        >
            <svg>
                <path
                    d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z"
                    fill="currentColor"
                />
            </svg>
            <svg>
                <path
                    d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};

export default BtnMenuMobile;
