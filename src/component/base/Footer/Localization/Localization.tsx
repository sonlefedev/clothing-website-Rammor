import classNames from "classnames/bind";
import style from "./style.module.scss";
import Select from "react-select";

type Props = {
    className?: string;
};
const cx = classNames.bind(style);

const options: {
    value: string;
    label: string;
}[] = [
    { value: "en", label: "English" },
    { value: "vi", label: "Việt Nam" },
];

const Localization = (props: Props) => {
    const { className } = props;
    return (
        <div className={cx("localization-wrapper", className)}>
            <h2>Country/region</h2>
            <Select options={options} className={cx("select")} />
        </div>
    );
};

export default Localization;
