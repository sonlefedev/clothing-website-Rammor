import classNames from "classnames/bind";
import React from "react";
import style from "./style.module.scss";
import CommonPropertiesBigComponent from "../../common/CommonPropertiesBigComponent";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import Localization from "./Localization";
import Payment from "./Payment";

type Props = {};

const menuFooter: { id: string; text: string; link: string }[] = [
    { id: v4(), text: `Search`, link: `/search` },
    { id: v4(), text: `merch shop.`, link: `/collections/all` },
    { id: v4(), text: `faq.`, link: `/pages/q-a` },
    { id: v4(), text: `imprint`, link: `/pages/imprint` },
    { id: v4(), text: `data privacy.`, link: `/pages/copy-of-imprint` },
    {
        id: v4(),
        text: `terms and conditions.`,
        link: `/pages/terms-and-conditions`,
    },
    { id: v4(), text: `withdrawal.`, link: `/pages/withdrawal` },
    { id: v4(), text: `Terms of Service`, link: `/policies/Terms-of-Service` },
    { id: v4(), text: `Refund policy`, link: `/policies/Refund-policy` },
];

const cx = classNames.bind(style);
const Footer = (props: Props) => {
    return (
        <>
            <CommonPropertiesBigComponent
                classNameCommonPropertiesBigComponent={cx("footer")}
                className_wrapper={cx("wrapper-footer")}
            >
                <ul className={cx("menu-bottom")}>
                    <li>
                        <h2 className={cx("heading")}>overview.</h2>
                    </li>
                    {menuFooter.map((item) => (
                        <li key={item.id}>
                            <Link to={item.link}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
                <div className={cx("grateful")}>
                    <h2 className={cx("heading")}>
                        thank you for your support.
                    </h2>
                    <p>love, rammor.</p>
                </div>
            </CommonPropertiesBigComponent>
            <CommonPropertiesBigComponent
                classNameCommonPropertiesBigComponent={cx("footer_bottom")}
                className_wrapper={cx("wrapper-footer")}
            >
                <Localization className={cx('item')} />
                <Payment className={cx('item')} />
            </CommonPropertiesBigComponent>
        </>
    );
};

export default Footer;
