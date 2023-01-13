import classNames from "classnames/bind";
import React from "react";
import style from "./style.module.scss";

type Props = {
    onClick?: () => void;
    className?: string;
    type?: "1";
};

const cx = classNames.bind(style);

const Button = (props: React.PropsWithChildren<Props>) => {
    const { onClick, className, type } = props;
    return (
        <button
            onClick={onClick}
            className={cx("button", className, type === "1" && "type_1")}
        >
            {props.children}
        </button>
    );
};

export default Button;
