import React from "react";
import Header from "../../component/base/Header";
import Footer from "../../component/base/Footer";

import style from "./style.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

type Props = {};

const CommonLayout = (props: React.PropsWithChildren<Props>) => {
    return (
        <>
            <Header />
            <div className={cx("wrapper-common_layout")}>{props.children}</div>
            <Footer />
        </>
    );
};

export default CommonLayout;
