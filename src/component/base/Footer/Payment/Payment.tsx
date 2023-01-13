import classNames from "classnames/bind";
import style from "./style.module.scss";
import PaymentBank from "./PaymentBank";

type Props = {
    className?: string;
};
const cx = classNames.bind(style);

const Payment = (props: Props) => {
    const { className } = props;
    return <div className={cx("payment-wrapper", className)}>
        <PaymentBank />
        <p>© 2023, rammorsmerch Copy Right by SonLe</p>
    </div>;
};

export default Payment;
