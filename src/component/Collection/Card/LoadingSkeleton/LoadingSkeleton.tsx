import React from "react";
import style from "./style.module.scss";
import classNames from "classnames/bind";

type Props = {};
const cx = classNames.bind(style);

const LoadingSkeleton = React.forwardRef(
    (props: Props, ref: React.LegacyRef<HTMLDivElement>) => {
        return (
            <div className={cx("card", "loading")} ref={ref}>
                <div className={cx("image")}></div>
                <div className={cx("content")}>
                    <h4></h4>
                    <div className={cx("description")}></div>
                </div>
            </div>
        );
    }
);

export default LoadingSkeleton;
