import classNames from "classnames/bind";
import React from "react";
import style from "./style.module.scss";
type Props = {};
const cx = classNames.bind(style);
const Loader = (props: Props) => {
    return (
        <div className={cx("loader-wrapper")}>
            <span className={cx("loader")}></span>
        </div>
    );
};

export default Loader;
