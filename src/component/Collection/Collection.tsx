import classNames from "classnames/bind";
import style from "./style.module.scss";
import Button from "../common/Button";
import Card from "./Card";
import HeadingFullWidth from "../common/HeadingFullWidth";

type Props = {
    data: IDataProduct[];
    title: string;
    className?: string;
};

const cx = classNames.bind(style);
const Collection = ({className, data, title}: Props) => {

    if(data.length === 0) return <HeadingFullWidth>nothing here.</HeadingFullWidth>

    return (
        <div
            className={cx(
                "wrapper-collection",
                "default-padding-left_right",
                "max-width",
                className
            )}
        >
            <h3 className={cx("title")}>{title}</h3>
            <ul className={cx("data")}>
                {data.map((item) => (
                    <Card data={item} key={item.id} />
                ))}
            </ul>
            <div className={cx("view-more")}>
                <Button type="1">View all</Button>
            </div>
        </div>
    );
};

export default Collection;
