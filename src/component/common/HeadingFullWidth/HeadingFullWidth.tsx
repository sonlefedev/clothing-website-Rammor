import classNames from "classnames/bind";

import style from "./style.module.scss";

type Props = {
    sub?: string;
};
const cx = classNames.bind(style);
const HeadingFullWidth = (props: React.PropsWithChildren<Props>) => {
    return (
        <div className={cx("wrapper-heading_full_width")}>
            <h1>{props.children}</h1>
            <span>{props.sub}</span>
        </div>
    );
};

export default HeadingFullWidth;
