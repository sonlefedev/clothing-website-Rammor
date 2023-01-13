import classNames from "classnames/bind";
import React from "react";
import style from "./style.module.scss";

type Props = {
    className_wrapper?: string;
    classNameCommonPropertiesBigComponent?: string;
};
const cx = classNames.bind(style);
const CommonPropertiesBigComponent = (
    props: React.PropsWithChildren<Props>
) => {
    const { classNameCommonPropertiesBigComponent, className_wrapper } = props;
    return (
        <div
            className={cx(
                "wrapper_CommonPropertiesBigComponent",
                className_wrapper
            )}
        >
            <div
                className={cx(
                    "CommonPropertiesBigComponent",
                    "max-width",
                    "default-padding-left_right",
                    classNameCommonPropertiesBigComponent
                )}
            >
                {props.children}
            </div>
        </div>
    );
};

export default CommonPropertiesBigComponent;
